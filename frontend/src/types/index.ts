export interface Pagination {
  limit: number;
  page: number;
  totalPages: number;
  totalItems: number;
}

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "SELLER";

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  data: T;
  errors?: unknown;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  metadata: Pagination;
}

export interface SourceCode {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  demoUrl?: string;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  categories?: string[];
  features?: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  pricingType?: "free" | "cash" | "token";
  languages?: string[];
  isFavorite?: boolean;
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  followers: string;
  href: string;
}

export interface FlashSaleItem {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  href: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface CartItem {
  id: string;
  source: SourceCode;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "paid" | "completed" | "cancelled";
  paymentMethod: string;
  createdAt: string;
}

export * from "./auth";
