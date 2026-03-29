import Link from "next/link";
import { posts, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return {
    title: post ? `${post.title} — Dream Rentals` : "Blog — Dream Rentals",
    description: post?.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter(p => p.slug !== post.slug).slice(0, 3);

  // Simple markdown-ish renderer for **bold** and paragraphs
  const renderBody = (text: string) => {
    return text.split("\n\n").map((para, i) => {
      if (para.startsWith("**") && para.includes("**\n")) {
        const [heading, ...rest] = para.split("\n");
        const h = heading.replace(/\*\*/g, "");
        return (
          <div key={i} className="mb-4">
            <h3 className="font-display text-xl text-dr-black mb-2">{h}</h3>
            <p className="text-dr-muted font-body leading-relaxed">{rest.join(" ")}</p>
          </div>
        );
      }
      return <p key={i} className="text-dr-muted font-body leading-relaxed mb-4">{para}</p>;
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dr-black pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${post.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dr-black via-dr-black/60 to-dr-black/40" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-10 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-white/50 text-xs font-body hover:text-white transition-colors">Blog</Link>
            <span className="text-white/30">·</span>
            <span className="label-tag">{post.category}</span>
          </div>
          <h1 className="font-display text-display-lg text-white mb-6 max-w-3xl leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm font-body text-white/40">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose-lg max-w-none">
                {renderBody(post.body)}
              </div>
              <div className="mt-12 pt-8 border-t border-dr-border flex items-center justify-between">
                <Link href="/blog" className="text-sm font-body text-dr-gray hover:text-dr-black transition-colors">← Back to Blog</Link>
                <Link href="/contact" className="btn-gold">Book a Property</Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="border border-dr-border p-6">
                  <p className="label-tag mb-4">Ready to Book?</p>
                  <p className="text-sm text-dr-muted font-body mb-4 leading-relaxed">Browse our 125+ properties across Chicago and find the perfect stay.</p>
                  <Link href="/properties" className="btn-gold w-full justify-center">View Properties</Link>
                </div>
                <div>
                  <p className="label-tag mb-4">More Posts</p>
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 group">
                        <div className="w-16 h-16 shrink-0 bg-cover bg-center bg-dr-cream"
                          style={{ backgroundImage: `url('${r.image}')` }} />
                        <p className="text-sm font-body text-dr-black group-hover:text-dr-gold transition-colors duration-200 leading-snug">{r.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
