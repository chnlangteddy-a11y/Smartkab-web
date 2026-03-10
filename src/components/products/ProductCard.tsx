'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string | null;
  model: string;
  categories: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Link href={`/products/${product.slug}`}>
        {/* Image */}
        <div className="relative h-56 bg-neutral-100 overflow-hidden">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {/* Category Badge */}
          {product.categories && product.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                {product.categories[0]}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {product.model && (
            <div className="text-sm text-primary font-medium mb-1">
              {product.model}
            </div>
          )}
          <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-neutral-600 text-sm line-clamp-2 mb-4">
            {product.excerpt}
          </p>
          <div className="flex items-center text-primary font-medium">
            View Details
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
