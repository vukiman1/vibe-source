"use server";

import { authService } from "@/services/auth.service";
import type { LoginCredentials } from "@/types";

export async function loginAction(credentials: LoginCredentials) {
  try {
    const response = await authService.login(credentials);

    if (response.success && response.data) {
      return { success: true, user: response.data.user };
    }

    return { success: false, error: response.message || "Đăng nhập thất bại" };
  } catch (error) {
    console.error("Login Action Error:", error);
    return { success: false, error: "Đã có lỗi xảy ra, vui lòng thử lại sau" };
  }
}

export async function logoutAction() {
  try {
    await authService.logout();

    return { success: true };
  } catch (error) {
    console.error("Logout Action Error:", error);
    return { success: false };
  }
}
