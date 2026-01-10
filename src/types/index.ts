export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}
