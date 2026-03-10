import { getProducts } from "@/lib/wordpress";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/wordpress";
import Link from "next/link";
import { Suspense } from "react";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Products",
  description: "Explore our range of smart energy storage cabinets for various applications.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");
  const category = params.category;

  let products: Product[] = [];
  let totalPages = 1;
  
  try {
    const productsRes = await getProducts({
      page: currentPage,
      per_page: 12,
      category,
    });
    products = productsRes.data || [];
    totalPages = productsRes.total_pages || 1;
  } catch (error) {
    console.log('API not available, showing placeholder content');
  }

  // Category options
  const categories = [
    { slug: "", name: "All Products" },
    { slug: "outdoor-ess", name: "Outdoor ESS Cabinet" },
    { slug: "smart-cabinet", name: "Smart Cabinet" },
    { slug: "pre-integrated", name: "Pre-integrated Cabinet" },
    { slug: "battery-enclosure", name: "Battery Enclosure" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
            Our Products
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Explore our comprehensive range of smart energy storage cabinets designed for various applications
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug ? `/products?category=${cat.slug}` : "/products"}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  (category === cat.slug || (!category && !cat.slug))
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">No products found</h3>
              <p className="text-neutral-600">Try selecting a different category</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/products?${category ? `category=${category}&` : ""}page=${page}`}
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors ${
                    page === currentPage
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-neutral-600 mb-6">
            We offer customized solutions tailored to your specific requirements.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
