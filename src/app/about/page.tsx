import { getSiteOptions, getCaseStudies } from "@/lib/wordpress";
import type { SiteOptions, CaseStudy } from "@/types/wordpress";
import Image from "next/image";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "About Us",
  description: "Learn about SmartKAB - your trusted partner for smart energy storage cabinet solutions.",
};

export default async function AboutPage() {
  let options: SiteOptions | null = null;
  let caseStudies: CaseStudy[] = [];
  
  try {
    const [optionsRes, casesRes] = await Promise.all([
      getSiteOptions(),
      getCaseStudies(),
    ]);
    options = optionsRes.data;
    caseStudies = casesRes.data || [];
  } catch (error) {
    console.log('API not available, showing placeholder content');
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
            About SmartKAB
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Your trusted partner for customized and pre-integrated outdoor ESS cabinets
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6">
                Who We Are
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                SmartKAB is a leading supplier of smart energy storage cabinets, specializing in 
                customized and pre-integrated outdoor ESS (Energy Storage System) solutions. With 
                years of experience in the energy storage industry, we provide high-quality, 
                reliable cabinet solutions for various applications.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our products are designed to meet the highest industry standards, ensuring safety, 
                durability, and optimal performance. We work closely with our clients to understand 
                their specific requirements and deliver tailored solutions that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Global Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Expert Team</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
              <div className="absolute inset-4 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-primary mb-2">SmartKAB</div>
                  <div className="text-neutral-500">Smart Energy Storage Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(options?.stats || [
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Countries Served" },
              { number: "15+", label: "Years Experience" },
              { number: "100+", label: "Product Models" },
            ]).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We maintain strict quality control throughout the production process to ensure every product meets the highest standards.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "Innovation Driven",
                desc: "We continuously invest in R&D to develop innovative solutions that address the evolving needs of the energy storage industry.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Customer Focus",
                desc: "We prioritize customer satisfaction and work closely with clients to deliver solutions that meet their specific requirements.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      {caseStudies.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    {study.thumbnail ? (
                      <Image
                        src={study.thumbnail}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                        <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-neutral-800 mb-2">
                      {study.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-neutral-500">
                      {study.location && <span>{study.location}</span>}
                      {study.capacity && <span>• {study.capacity}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-neutral-800 text-center mb-12">
            Get in Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Address</h3>
                <p className="text-neutral-600 text-sm">
                  {options?.company_info?.address || "China Smart Cabinet Supplier"}
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Email</h3>
                <a
                  href={`mailto:${options?.company_info?.email || "info@smartkab.com"}`}
                  className="text-primary hover:text-primary-600"
                >
                  {options?.company_info?.email || "info@smartkab.com"}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center p-6 bg-neutral-50 rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Phone</h3>
                <a
                  href={`tel:${options?.company_info?.phone || "+8612345678900"}`}
                  className="text-primary hover:text-primary-600"
                >
                  {options?.company_info?.phone || "+86 123 4567 8900"}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              {options?.company_info?.social?.linkedin && (
                <a
                  href={options.company_info.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {options?.company_info?.social?.twitter && (
                <a
                  href={options.company_info.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
