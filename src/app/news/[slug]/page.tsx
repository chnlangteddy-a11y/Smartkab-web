import { getPostBySlug } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-neutral-100 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-500 hover:text-primary">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/news" className="text-neutral-500 hover:text-primary">News</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-800">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="text-sm text-neutral-500 mb-4">{post.date}</div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 mb-6">
                {post.title}
              </h1>
              {post.featured_image?.full && (
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={post.featured_image.full}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-neutral-600">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <Link
                href="/news"
                className="inline-flex items-center text-primary font-medium hover:text-primary-600"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
