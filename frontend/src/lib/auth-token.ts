import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/constants";

/**
 * Utility functions for managing authentication tokens in cookies
 * These functions are designed to be used in Server Actions or Server Components
 */

export async function setAuthToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
}

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value;
}

export async function removeAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}
