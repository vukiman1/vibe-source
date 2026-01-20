import { api } from '@/lib/request';
import type {
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
  AuthUser,
} from '@/types';

const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

export const authService = {
  async login(credentials: LoginCredentials) {
    return api.post<AuthResponse>(AUTH_ENDPOINTS.LOGIN, credentials);
  },

  async register(credentials: RegisterCredentials) {
    return api.post<AuthResponse>(AUTH_ENDPOINTS.REGISTER, credentials);
  },

  async logout() {
    return api.post(AUTH_ENDPOINTS.LOGOUT);
  },

  async refreshToken(refreshToken: string) {
    return api.post<{ accessToken: string }>(AUTH_ENDPOINTS.REFRESH, {
      refreshToken,
    });
  },

  async getCurrentUser() {
    return api.get<AuthUser>(AUTH_ENDPOINTS.ME);
  },

  async forgotPassword(email: string) {
    return api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email });
  },

  async resetPassword(token: string, password: string) {
    return api.post(AUTH_ENDPOINTS.RESET_PASSWORD, { token, password });
  },
};
