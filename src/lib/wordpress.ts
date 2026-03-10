/**
 * WordPress REST API Client
 */

import type { 
  WPResponse, 
  Product, 
  Solution, 
  CaseStudy, 
  MenuItem, 
  SiteOptions, 
  BlogPost 
} from '@/types/wordpress';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://your-wordpress-site.com/wp-json';

// API Functions
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${WP_API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    // Cache strategy for ISR
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data as T;
}

// Products
export async function getProducts(params: {
  page?: number;
  per_page?: number;
  category?: string;
  search?: string;
} = {}): Promise<WPResponse<Product[]>> {
  const searchParams = new URLSearchParams();
  if (params.page) searchParams.set('page', params.page.toString());
  if (params.per_page) searchParams.set('per_page', params.per_page.toString());
  if (params.category) searchParams.set('category', params.category);
  if (params.search) searchParams.set('search', params.search);

  const query = searchParams.toString();
  return fetchAPI<WPResponse<Product[]>>('/smartkab/v1/products' + (query ? `?${query}` : ''));
}

export async function getProductBySlug(slug: string): Promise<WPResponse<Product>> {
  return fetchAPI<WPResponse<Product>>(`/smartkab/v1/products/${slug}`);
}

// Solutions
export async function getSolutions(): Promise<WPResponse<Solution[]>> {
  return fetchAPI<WPResponse<Solution[]>>('/smartkab/v1/solutions');
}

// Case Studies
export async function getCaseStudies(): Promise<WPResponse<CaseStudy[]>> {
  return fetchAPI<WPResponse<CaseStudy[]>>('/smartkab/v1/case-studies');
}

// Site Options
export async function getSiteOptions(): Promise<WPResponse<SiteOptions>> {
  return fetchAPI<WPResponse<SiteOptions>>('/smartkab/v1/options');
}

// Menus
export async function getMenu(location: string): Promise<WPResponse<MenuItem[]>> {
  return fetchAPI<WPResponse<MenuItem[]>>(`/smartkab/v1/menus/${location}`);
}

// Blog Posts
export async function getPosts(params: {
  page?: number;
  per_page?: number;
  categories?: number;
} = {}): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
  const searchParams = new URLSearchParams();
  searchParams.set('page', (params.page || 1).toString());
  searchParams.set('per_page', (params.per_page || 10).toString());
  if (params.categories) searchParams.set('categories', params.categories.toString());

  const response = await fetch(`${WP_API_URL}/wp/v2/posts?${searchParams.toString()}`, {
    next: { revalidate: 60 },
  });

  const posts = await response.json();
  const total = parseInt(response.headers.get('X-WP-Total') || '0');
  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

  return { posts: posts.map(formatPost), total, totalPages };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`${WP_API_URL}/wp/v2/posts?slug=${slug}`, {
    next: { revalidate: 60 },
  });
  
  const posts = await response.json();
  if (posts.length === 0) return null;
  
  return formatPost(posts[0]);
}

// Helper: Format post data
function formatPost(post: Record<string, unknown>): BlogPost {
  return {
    id: post.id as number,
    title: (post.title as { rendered: string }).rendered,
    slug: post.slug as string,
    excerpt: (post.excerpt as { rendered: string }).rendered.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
    content: (post.content as { rendered: string }).rendered,
    date: new Date(post.date as string).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    featured_image: post.featured_image ? (post.featured_image as BlogPost['featured_image']) : null,
    author: (post.author_name as string) || 'Admin',
    categories: (post.categories_names as string[]) || [],
  };
}
