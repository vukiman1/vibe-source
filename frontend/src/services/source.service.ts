import { api } from '@/lib/request';
import type { SourceCode, PaginatedResponse } from '@/types';

const SOURCE_ENDPOINTS = {
  LIST: '/sources',
  DETAIL: (id: string) => `/sources/${id}`,
  SEARCH: '/sources/search',
  CATEGORIES: '/sources/categories',
  FEATURED: '/sources/featured',
};

export interface SourceFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  technologies?: string[];
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'createdAt' | 'title';
  sortOrder?: 'asc' | 'desc';
}

export const sourceService = {
  async getAll(filters?: SourceFilters) {
    const params: Record<string, string | number | boolean> = {};
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params[key] = Array.isArray(value) ? value.join(',') : value;
        }
      });
    }
    return api.get<PaginatedResponse<SourceCode>>(SOURCE_ENDPOINTS.LIST, { params });
  },

  async getById(id: string) {
    return api.get<SourceCode>(SOURCE_ENDPOINTS.DETAIL(id));
  },

  async search(query: string, filters?: Omit<SourceFilters, 'search'>) {
    const params: Record<string, string | number | boolean> = { q: query };
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params[key] = Array.isArray(value) ? value.join(',') : value;
        }
      });
    }
    return api.get<PaginatedResponse<SourceCode>>(SOURCE_ENDPOINTS.SEARCH, { params });
  },

  async getCategories() {
    return api.get<string[]>(SOURCE_ENDPOINTS.CATEGORIES);
  },

  async getFeatured(limit = 8) {
    return api.get<SourceCode[]>(SOURCE_ENDPOINTS.FEATURED, {
      params: { limit },
    });
  },
};
