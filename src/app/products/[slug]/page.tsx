import { getProducts, getProductBySlug } from "@/lib/wordpress";
import { ProductCard } from "@/components/products/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const productsRes = await getProducts({ per_page: 100 });
    if (productsRes.success && productsRes.data) {
      return productsRes.data.map((product) => ({ slug: product.slug }));
    }
  } catch (error) {
    console.log('Skipping static generation - API not available');
  }
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productRes = await getProductBySlug(slug);
  
  if (!productRes.success) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${productRes.data.title} | SmartKAB Energy Storage`,
    description: productRes.data.excerpt,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productRes = await getProductBySlug(slug);

  if (!productRes.success) {
    notFound();
  }

  const product = productRes.data;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-8 text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700/50">
                {product.thumbnail_large ? (
                  <Image src={product.thumbnail_large} alt={product.title} fill className="object-cover" priority />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {product.model && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-white text-sm font-mono font-semibold rounded-lg">
                    {product.model}
                  </div>
                )}
              </div>
              
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.gallery.slice(0, 4).map((img, index) => (
                    <button key={index} className="relative aspect-square bg-neutral-800 rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all">
                      <Image src={img} alt={`${product.title} ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="text-white">
              {product.categories && product.categories.length > 0 && (
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-accent text-sm font-medium rounded-full mb-4 border border-primary/30">
                  {product.categories[0]}
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                {product.title}
              </h1>
              
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed border-l-4 border-primary pl-6">
                {product.excerpt}
              </p>

              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4 font-semibold">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-neutral-200">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4 font-semibold">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span key={index} className="px-4 py-2 bg-neutral-800/80 text-neutral-200 rounded-full text-sm border border-neutral-700/50">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-4">
                {product.pdf && (
                  <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3.5 bg-white text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 transition-all">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Datasheet
                  </a>
                )}
                <Link href="/about#contact" className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Request Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Megarevo Style Comparison Table */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
                Technical Specifications
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Professional-grade specifications for industrial applications
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-accent text-white">
                      <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                      <th className="px-6 py-4 text-left font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-neutral-200 last:border-0 transition-colors hover:bg-primary/5 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                        }`}
                      >
                        <td className="px-6 py-4 font-medium text-neutral-800 w-1/3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {spec.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-neutral-600 font-mono text-sm">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Description */}
      {product.content && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-8 text-center">
                Product Description
              </h2>
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-neutral-800 prose-p:text-neutral-600 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: product.content }} 
              />
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
              Related Products
            </h2>
            <p className="text-neutral-600">Explore more solutions for your energy storage needs</p>
          </div>
          <RelatedProducts currentProductId={product.id} category={product.categories?.[0]} />
        </div>
      </section>
    </>
  );
}

async function RelatedProducts({ currentProductId, category }: { currentProductId: number; category?: string }) {
  const productsRes = await getProducts({ per_page: 8, category });
  const relatedProducts = productsRes.data?.filter(p => p.id !== currentProductId).slice(0, 3) || [];

  if (relatedProducts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}