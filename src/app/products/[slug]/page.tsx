import { getProducts, getProductBySlug } from "@/lib/wordpress";
import { ProductCard } from "@/components/products/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all products
export async function generateStaticParams() {
  const productsRes = await getProducts({ per_page: 100 });
  return productsRes.data.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productRes = await getProductBySlug(slug);
  
  if (!productRes.success) {
    return { title: "Product Not Found" };
  }

  return {
    title: productRes.data.title,
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
      {/* Breadcrumb */}
      <section className="bg-neutral-100 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-500 hover:text-primary">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/products" className="text-neutral-500 hover:text-primary">Products</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-800">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div>
              <div className="relative aspect-square bg-neutral-100 rounded-xl overflow-hidden mb-4">
                {product.thumbnail_large ? (
                  <Image
                    src={product.thumbnail_large}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery.slice(0, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary">
                      <Image src={img} alt={`${product.title} ${index + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {product.categories && product.categories.length > 0 && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {product.categories[0]}
                </span>
              )}
              
              {product.model && (
                <div className="text-primary font-medium mb-2">Model: {product.model}</div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-4">
                {product.title}
              </h1>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                {product.excerpt}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-600">{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span key={index} className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                {product.pdf && (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Datasheet
                  </a>
                )}
                <Link
                  href="/about#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-6">Technical Specifications</h2>
              <div className="bg-neutral-50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-6 py-4 font-medium text-neutral-800 w-1/3">{spec.name}</td>
                        <td className="px-6 py-4 text-neutral-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Description */}
          {product.content && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-6">Product Description</h2>
              <div className="prose prose-lg max-w-none text-neutral-600">
                <div dangerouslySetInnerHTML={{ __html: product.content }} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-8">Related Products</h2>
          <RelatedProducts currentProductId={product.id} category={product.categories?.[0]} />
        </div>
      </section>
    </>
  );
}

async function RelatedProducts({ currentProductId, category }: { currentProductId: number; category?: string }) {
  const productsRes = await getProducts({ per_page: 4, category });
  const relatedProducts = productsRes.data.filter(p => p.id !== currentProductId).slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
