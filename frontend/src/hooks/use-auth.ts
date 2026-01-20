'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES, AUTH_COOKIE_NAME, REFRESH_COOKIE_NAME } from '@/constants';
import type { AuthUser, LoginCredentials, RegisterCredentials } from '@/types';

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      // TODO: Call API to get current user
      // const response = await authService.getCurrentUser();
      // setUser(response.data);
      setUser(null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      // TODO: Call authService.login
      // const response = await authService.login(credentials);
      // Set cookies (should be done by API response or server action)
      // setUser(response.data.user);
      console.log('Login:', credentials);
      router.push(ROUTES.HOME);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setIsLoading(true);
    try {
      // TODO: Call authService.register
      // const response = await authService.register(credentials);
      console.log('Register:', credentials);
      router.push(ROUTES.LOGIN);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // TODO: Call authService.logout
      // await authService.logout();
      // Clear cookies
      document.cookie = `${AUTH_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${REFRESH_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      setUser(null);
      router.push(ROUTES.HOME);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };
}
