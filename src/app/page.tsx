import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductCard } from "@/components/products/ProductCard";
import { getProducts, getSiteOptions, getSolutions } from "@/lib/wordpress";
import type { Product, SiteOptions, Solution } from "@/types/wordpress";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
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

      {/* Stats Section - Megarevo Style Dark */}
      <section className="relative bg-gradient-to-r from-neutral-900 via-primary-900 to-neutral-900 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "200+", label: "Global Partners" },
              { number: "50+", label: "Countries Served" },
              { number: "1GW+", label: "Total Capacity" },
              { number: "15+", label: "Certifications" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-neutral-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                About SmartKAB
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6 leading-tight">
                Leading Energy Storage Solution Provider
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                SmartKAB specializes in customized and pre-integrated outdoor ESS cabinets. 
                We provide comprehensive energy storage solutions for commercial, industrial, 
                and utility-scale applications worldwide.
              </p>
              <Link href="/about" className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all group">
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-100 rounded-2xl flex items-center justify-center">
                <span className="text-neutral-400">About Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our range of smart energy storage cabinets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) : (
              <>
                {[
                  { title: "Commercial ESS Cabinet", model: "SK-C100", capacity: "100kWh" },
                  { title: "Industrial ESS Cabinet", model: "SK-I500", capacity: "500kWh" },
                  { title: "Utility Scale ESS", model: "SK-U1000", capacity: "1MWh" },
                ].map((product, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                      <span className="text-neutral-400">Product Image</span>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-medium mb-1">{product.model}</div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">{product.title}</h3>
                      <p className="text-neutral-600 text-sm mb-4">Capacity: {product.capacity}</p>
                      <Link href="/products" className="text-primary font-medium inline-flex items-center">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Application Scenarios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Commercial Building", desc: "Office buildings, shopping malls" },
              { title: "Industrial Plant", desc: "Manufacturing facilities" },
              { title: "Data Center", desc: "UPS and backup power" },
              { title: "Microgrid", desc: "Remote areas, islands" },
            ].map((solution, index) => (
              <Link key={index} href="/solutions" className="group p-8 bg-neutral-50 rounded-2xl hover:bg-primary hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 group-hover:text-white mb-2 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 group-hover:text-white/80 text-sm transition-colors">
                  {solution.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Megarevo Style */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-neutral-600 uppercase tracking-wider">
              Certifications & Standards
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {["CE", "TUV", "UL", "ISO 9001", "ISO 14001", "IEC"].map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-sm border border-neutral-200">
                <span className="text-neutral-600 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Contact our team to discuss your energy storage requirements and get a customized solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about#contact" className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-neutral-100 transition-all">
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/products" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}