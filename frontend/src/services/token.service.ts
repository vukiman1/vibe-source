import Cookies from "js-cookie";
import { AUTH_CONFIG } from "@/constants";

const tokenService = {
  getAccessTokenFromCookie: () => {
    try {
      const accessToken = Cookies.get(AUTH_CONFIG.ACCESS_TOKEN_KEY);
      if (accessToken) {
        return accessToken;
      }
      return null;
    } catch {
      return null;
    }
  },

  getRefreshTokenFromCookie: () => {
    try {
      const refreshToken = Cookies.get(AUTH_CONFIG.REFRESH_TOKEN_KEY);
      if (refreshToken) {
        return refreshToken;
      }
      return null;
    } catch {
      return null;
    }
  },

  getProviderFromCookie: () => {
    try {
      const provider = Cookies.get(AUTH_CONFIG.BACKEND_KEY);
      if (provider) {
        return provider;
      }
      return null;
    } catch {
      return null;
    }
  },

  saveAccessTokenAndRefreshTokenToCookie: (
    accessToken: string,
    refreshToken?: string,
    provider?: string,
  ) => {
    try {
      Cookies.set(AUTH_CONFIG.ACCESS_TOKEN_KEY, accessToken, {
        expires: 365,
        sameSite: "lax",
      });

      if (refreshToken) {
        Cookies.set(AUTH_CONFIG.REFRESH_TOKEN_KEY, refreshToken, {
          expires: 365,
          sameSite: "lax",
        });
      }

      if (provider) {
        Cookies.set(AUTH_CONFIG.BACKEND_KEY, provider, {
          expires: 365,
          sameSite: "lax",
        });
      }

      return true;
    } catch {
      return false;
    }
  },

  removeAccessTokenAndRefreshTokenFromCookie: () => {
    try {
      Cookies.remove(AUTH_CONFIG.ACCESS_TOKEN_KEY);
      Cookies.remove(AUTH_CONFIG.REFRESH_TOKEN_KEY);
      Cookies.remove(AUTH_CONFIG.BACKEND_KEY);
      return true;
    } catch {
      return false;
    }
  },
};

export default tokenService;
