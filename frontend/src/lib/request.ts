import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import queryString from "query-string";
import { API_BASE_URL } from "@/constants";
import tokenService from "@/services/token.service";

const httpRequest: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params, { arrayFormat: "bracket" });
  },
});

// Request Interceptor
httpRequest.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = tokenService.getAccessTokenFromCookie();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
httpRequest.interceptors.response.use(
  (response) => {
    // Backend returns: { statusCode: 200, success: true, data: { ... } }
    // Unwrap data.data to match expected service return type
    if (response.data && response.data.data) {
      return response.data.data;
    }
    return response.data;
  },
  async (error) => {
    // Handle 401: Clear tokens
    if (error.response?.status === 401) {
      tokenService.removeAccessTokenAndRefreshTokenFromCookie();
    }

    // Use backend error message if available
    if (error.response?.data) {
      const { message } = error.response.data;
      if (message) {
        error.message = Array.isArray(message) ? message.join(", ") : message;
      }
    }

    return Promise.reject(error);
  },
);

const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    httpRequest.get<unknown, T>(url, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpRequest.post<unknown, T>(url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpRequest.put<unknown, T>(url, data, config),
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    httpRequest.patch<unknown, T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    httpRequest.delete<unknown, T>(url, config),
};

export { httpRequest, api };
