export const APP_NAME = 'Vibe Source';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const SUPPORTED_LOCALES = ['en', 'vi'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export const ROUTES = {
  HOME: '/',
  SOURCES: '/sources',
  SOURCE_DETAIL: (id: string) => `/sources/${id}`,
  CART: '/cart',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;
