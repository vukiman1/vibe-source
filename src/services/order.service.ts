import { api } from '@/lib/request';
import type { Order, CartItem, PaginatedResponse } from '@/types';

const ORDER_ENDPOINTS = {
  LIST: '/orders',
  DETAIL: (id: string) => `/orders/${id}`,
  CREATE: '/orders',
  CHECKOUT: '/orders/checkout',
  CANCEL: (id: string) => `/orders/${id}/cancel`,
};

export interface CreateOrderData {
  items: { sourceId: string; quantity: number }[];
  paymentMethod: string;
  couponCode?: string;
}

export interface CheckoutData {
  orderId: string;
  paymentMethod: string;
  billingInfo?: {
    name: string;
    email: string;
    address?: string;
  };
}

export const orderService = {
  async getAll(page = 1, limit = 10) {
    return api.get<PaginatedResponse<Order>>(ORDER_ENDPOINTS.LIST, {
      params: { page, limit },
    });
  },

  async getById(id: string) {
    return api.get<Order>(ORDER_ENDPOINTS.DETAIL(id));
  },

  async create(data: CreateOrderData) {
    return api.post<Order>(ORDER_ENDPOINTS.CREATE, data);
  },

  async checkout(data: CheckoutData) {
    return api.post<{ paymentUrl: string; orderId: string }>(
      ORDER_ENDPOINTS.CHECKOUT,
      data
    );
  },

  async cancel(id: string) {
    return api.post<Order>(ORDER_ENDPOINTS.CANCEL(id));
  },
};
