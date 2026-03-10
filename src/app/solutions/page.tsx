import { getSolutions, getProducts } from "@/lib/wordpress";
import type { Solution, Product } from "@/types/wordpress";
import Link from "next/link";
import Image from "next/image";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Solutions",
  description: "Tailored energy storage solutions for commercial, industrial, and utility-scale applications.",
};

export default async function SolutionsPage() {
  // Fetch data with error handling
  let solutions: Solution[] = [];
  let products: Product[] = [];
  
  try {
    const [solutionsRes, productsRes] = await Promise.all([
      getSolutions(),
      getProducts({ per_page: 100 }),
    ]);
    solutions = solutionsRes.data || [];
    products = productsRes.data || [];
  } catch (error) {
    console.log('API not available, showing placeholder content');
  }

  // Solution icons mapping
  const iconMap: Record<string, React.ReactNode> = {
    commercial: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    industrial: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    residential: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    utility: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    microgrid: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    telecom: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
            Solutions for Every Scenario
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Tailored energy storage solutions for commercial, industrial, and utility-scale applications
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const iconKey = solution.icon || solution.slug.split("-")[0];
              const icon = iconMap[iconKey] || iconMap.commercial;

              return (
                <div
                  key={solution.id}
                  id={solution.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto bg-primary/5">
                      {solution.thumbnail ? (
                        <Image
                          src={solution.thumbnail}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                          {icon}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                        {icon}
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
                        {solution.title}
                      </h2>
                      <p className="text-neutral-600 mb-6 leading-relaxed">
                        {solution.excerpt}
                      </p>
                      <Link
                        href={`/products?application=${solution.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:text-primary-600"
                      >
                        View Related Products
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your requirements and constraints" },
              { step: "02", title: "Design", desc: "Custom solution design and engineering" },
              { step: "03", title: "Manufacturing", desc: "Production with strict quality control" },
              { step: "04", title: "Support", desc: "Installation guidance and after-sales support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Our engineering team is ready to design a solution tailored to your specific requirements.
            </p>
            <Link
              href="/about#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
