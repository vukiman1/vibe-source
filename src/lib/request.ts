import { API_BASE_URL } from '@/constants';
import type { ApiResponse } from '@/types';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

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

  private buildUrl(endpoint: string, params?: RequestOptions['params']): string {
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
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { headers = {}, params, cache, next } = options;

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      cache,
      next,
    };

    if (data && method !== 'GET') {
      config.body = JSON.stringify(data);
    }

    const url = this.buildUrl(endpoint, params);

    try {
      const response = await fetch(url, config);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      return result;
    } catch (error) {
      throw error instanceof Error ? error : new Error('Unknown error occurred');
    }
  }

  get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>('GET', endpoint, undefined, options);
  }

  post<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>('POST', endpoint, data, options);
  }

  put<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>('PUT', endpoint, data, options);
  }

  patch<T>(endpoint: string, data?: unknown, options?: RequestOptions) {
    return this.request<T>('PATCH', endpoint, data, options);
  }

  delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>('DELETE', endpoint, undefined, options);
  }
}

export const api = new HttpClient(API_BASE_URL);
