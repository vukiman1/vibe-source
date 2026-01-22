import { API_BASE_URL } from "@/constants";
import type { ApiResponse } from "@/types";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(
    endpoint: string,
    params?: RequestOptions["params"],
  ): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  }

  private async request<T>(
    method: RequestMethod,
    endpoint: string,
    data?: unknown,
    options: RequestOptions = {},
  ): Promise<ApiResponse<T>> {
    const { headers = {}, params, cache, next } = options;

    const config: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
      next,
    };

    // Include existing cookies in the request to backend if on server side
    if (typeof window === "undefined") {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const allCookies = cookieStore.getAll();

      if (allCookies.length > 0) {
        const cookieString = allCookies
          .map((c) => `${c.name}=${c.value}`)
          .join("; ");
        (config.headers as Record<string, string>)["Cookie"] = cookieString;
      }
    }

    if (data && method !== "GET") {
      config.body = JSON.stringify(data);
    }

    const url = this.buildUrl(endpoint, params);

    try {
      const response = await fetch(url, config);
      const result = await response.json();

      // Forward Set-Cookie headers from backend to client for Server Actions/Components
      if (typeof window === "undefined") {
        const { cookies } = await import("next/headers");
        const setCookieHeaders = response.headers.getSetCookie();

        if (setCookieHeaders.length > 0) {
          const cookieStore = await cookies();
          setCookieHeaders.forEach((cookieString) => {
            const [cookiePart] = cookieString.split(";");
            const [name, value] = cookiePart.split("=");
            if (name && value) {
              cookieStore.set(name.trim(), value.trim(), {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
              });
            }
          });
        }
      }

      if (!response.ok) {
        throw new Error(result.message || "Request failed");
      }

      return result;
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Unknown error occurred");
    }
  }

  get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>("GET", endpoint, undefined, options);
  }

  post<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>("POST", endpoint, data, options);
  }

  put<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>("PUT", endpoint, data, options);
  }

  patch<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>("PATCH", endpoint, data, options);
  }

  delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>("DELETE", endpoint, undefined, options);
  }
}

export const api = new HttpClient(API_BASE_URL);
