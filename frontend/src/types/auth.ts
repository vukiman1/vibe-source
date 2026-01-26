import { UserRole } from ".";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar: string | null;
}

export interface LoginResponseData {
  user: AuthUser;
  accessToken: string;
}

export type AuthResponse = LoginResponseData;
