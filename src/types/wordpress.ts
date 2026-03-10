/**
 * WordPress API Types
 */

export interface WPResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  total_pages?: number;
  page?: number;
  message?: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string | null;
  thumbnail_large: string | null;
  gallery: string[];
  model: string;
  specifications: { name: string; value: string }[];
  features: { title: string; description: string; icon: string }[];
  applications: string[];
  categories: string[];
  pdf: string | null;
  related_products?: number[];
}

export interface Solution {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string | null;
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string | null;
  location: string;
  capacity: string;
  year: number;
  products_used: number[];
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
  slug: string;
  parent: string;
  order: number;
  target: string;
  children: MenuItem[];
}

export interface SiteOptions {
  site_name: string;
  site_desc: string;
  logo: string | null;
  hero_banners: {
    image: string;
    title: string;
    subtitle: string;
    link: string;
    button_text: string;
  }[];
  company_info: {
    address: string;
    phone: string;
    email: string;
    social: {
      linkedin: string;
      twitter: string;
      facebook: string;
    };
  };
  stats: { number: string; label: string }[];
  certifications: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featured_image: {
    thumbnail: string;
    medium: string;
    large: string;
    full: string;
  } | null;
  author: string;
  categories: string[];
}
