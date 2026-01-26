"use server";

import { cookies } from "next/headers";
import { authService } from "@/services/auth.service";
import { AUTH_CONFIG } from "@/constants";
import type { LoginCredentials } from "@/types";

export async function loginAction(credentials: LoginCredentials) {
  try {
    const response = await authService.login(credentials);

    if (response && response.user && response.accessToken) {
      const cookieStore = await cookies();

      // Set Access Token
      cookieStore.set(AUTH_CONFIG.ACCESS_TOKEN_KEY, response.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });

      // Set Backend Provider (legacy support if needed)
      cookieStore.set(AUTH_CONFIG.BACKEND_KEY, "backend", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });

      // Note: If refreshToken becomes available in response, set it here too.

      return { success: true, user: response.user };
    }

    return { success: false, error: "Đăng nhập thất bại" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Đã có lỗi xảy ra, vui lòng thử lại sau" };
  }
}

export async function logoutAction() {
  try {
    // Call backend logout if needed (optional, but good practice)
    // await authService.logout();

    const cookieStore = await cookies();
    cookieStore.delete(AUTH_CONFIG.ACCESS_TOKEN_KEY);
    cookieStore.delete(AUTH_CONFIG.REFRESH_TOKEN_KEY);
    cookieStore.delete(AUTH_CONFIG.BACKEND_KEY);

    return { success: true };
  } catch (error) {
    console.error("Logout Action Error:", error);
    // Force clear cookies even if backend call fails
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_CONFIG.ACCESS_TOKEN_KEY);
    cookieStore.delete(AUTH_CONFIG.REFRESH_TOKEN_KEY);
    cookieStore.delete(AUTH_CONFIG.BACKEND_KEY);

    return { success: false };
  }
}
