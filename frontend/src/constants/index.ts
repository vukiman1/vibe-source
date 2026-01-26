export const APP_NAME = "Vibe Source";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export const SUPPORTED_LOCALES = ["en", "vi"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const DEFAULT_AVATAR = "/assets/users/avatars/default-avatar.jpeg";
export const ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  USER: "USER",
  SELLER: "SELLER",
} as const;

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

export const ROUTES = {
  HOME: "/",
  SOURCES: "/sources",
  SOURCE_DETAIL: (id: string) => `/sources/${id}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
  PROFILE: "/profile",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
} as const;

export const AUTH_COOKIE_NAME = "sub";
export const REFRESH_COOKIE_NAME = "refresh_token";

export const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/sources",
];

export const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

export const PROTECTED_ROUTES = ["/checkout", "/profile", "/orders"];

export const AUTH_CONFIG = {
  ACCESS_TOKEN_KEY: "access_token",
  REFRESH_TOKEN_KEY: "refresh_token",
  BACKEND_KEY: "backend",
};
