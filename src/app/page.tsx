import { HeroBanner } from "@/components/home/HeroBanner";
import { Stats } from "@/components/home/Stats";
import { ProductCard } from "@/components/products/ProductCard";
import { getProducts, getSiteOptions, getSolutions } from "@/lib/wordpress";
import type { Product, SiteOptions, Solution } from "@/types/wordpress";
import Link from "next/link";
import Image from "next/image";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch data with error handling
  let products: Product[] = [];
  let options: SiteOptions | null = null;
  let solutions: Solution[] = [];
  
  try {
    const [productsRes, optionsRes, solutionsRes] = await Promise.all([
      getProducts({ per_page: 6 }),
      getSiteOptions(),
      getSolutions(),
    ]);
    products = productsRes.data || [];
    options = optionsRes.data;
    solutions = solutionsRes.data || [];
  } catch (error) {
    console.log('API not available, showing placeholder content');
  }

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner banners={options?.hero_banners || []} />

      {/* Stats Section */}
      <Stats stats={options?.stats || []} />

      {/* Products Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
              Featured Products
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our range of smart energy storage cabinets designed for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View All Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
              Solutions for Every Scenario
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Tailored energy storage solutions for commercial, industrial, and utility-scale applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.slice(0, 6).map((solution) => (
              <Link
                key={solution.id}
                href={`/solutions#${solution.slug}`}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svg className="w-7 h-7 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 text-sm line-clamp-2">
                  {solution.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Why Choose SmartKAB?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Customized Solutions", desc: "Tailored designs to meet your specific requirements" },
                  { title: "Pre-integrated Systems", desc: "Ready-to-deploy solutions reducing installation time" },
                  { title: "Global Standards", desc: "Certified products meeting international quality standards" },
                  { title: "Expert Support", desc: "Professional technical support throughout the project lifecycle" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-2xl" />
              <div className="absolute inset-4 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white text-6xl font-heading font-bold">SmartKAB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Contact our team to discuss your energy storage cabinet requirements and get a customized solution.
            </p>
            <Link
              href="/about#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
