import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Main Footer - Megarevo Style */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-heading font-bold text-white block">
                  SmartKAB
                </span>
                <span className="text-sm text-neutral-400">Energy Storage Solutions</span>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Leading provider of customized and pre-integrated outdoor ESS cabinets. 
              Delivering reliable energy storage solutions for commercial, industrial, 
              and utility-scale applications worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products?category=commercial" className="text-neutral-400 hover:text-primary transition-colors">Commercial ESS</Link></li>
              <li><Link href="/products?category=industrial" className="text-neutral-400 hover:text-primary transition-colors">Industrial ESS</Link></li>
              <li><Link href="/products?category=utility" className="text-neutral-400 hover:text-primary transition-colors">Utility Scale</Link></li>
              <li><Link href="/products?category=residential" className="text-neutral-400 hover:text-primary transition-colors">Residential ESS</Link></li>
              <li><Link href="/products" className="text-primary font-medium hover:text-accent transition-colors">View All →</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions#commercial" className="text-neutral-400 hover:text-primary transition-colors">Commercial Building</Link></li>
              <li><Link href="/solutions#industrial" className="text-neutral-400 hover:text-primary transition-colors">Industrial Plant</Link></li>
              <li><Link href="/solutions#datacenter" className="text-neutral-400 hover:text-primary transition-colors">Data Center</Link></li>
              <li><Link href="/solutions#microgrid" className="text-neutral-400 hover:text-primary transition-colors">Microgrid</Link></li>
              <li><Link href="/case-studies" className="text-primary font-medium hover:text-accent transition-colors">Case Studies →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-400">China Smart Cabinet Supplier</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@smartkab.com" className="text-neutral-400 hover:text-primary transition-colors">
                  info@smartkab.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+8612345678900" className="text-neutral-400 hover:text-primary transition-colors">
                  +86 123 4567 8900
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {currentYear} SmartKAB. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-neutral-500 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}