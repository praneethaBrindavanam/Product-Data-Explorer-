// Core domain types for the Book Explorer

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  productCount?: number;
  subcategories?: Category[];
}

export interface Product {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  slug: string;
  categoryId: string;
  condition?: 'new' | 'very-good' | 'good' | 'acceptable';
  inStock: boolean;
}

export interface ProductDetail extends Product {
  description: string;
  isbn?: string;
  publisher?: string;
  publicationDate?: string;
  pages?: number;
  format?: string;
  language?: string;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
  relatedProducts?: Product[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful?: number;
}

export interface NavigationItem {
  id: string;
  name: string;
  slug: string;
  featured?: boolean;
  categories?: Category[];
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ScrapeJob {
  id: string;
  type: 'navigation' | 'category' | 'product' | 'detail';
  status: 'queued' | 'running' | 'completed' | 'failed';
  targetUrl: string;
  createdAt: string;
  completedAt?: string;
  error?: string;
}
