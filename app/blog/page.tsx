import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Dream Rentals Chicago",
  description: "Chicago travel guides, corporate housing tips, and short-term rental insights from the Dream Rentals team.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      {/* Hero */}
      <section className="bg-dr-black pt-32 pb-16 section-pad">
        <div className="max-w-container mx-auto">
          <p className="label-tag mb-4">The Blog</p>
          <h1 className="font-display text-display-lg text-white mb-4">Stories & Guides</h1>
          <p className="text-white/50 font-body max-w-lg">
            Chicago travel tips, corporate housing insights, and everything in between.
          </p>
        </div>
      </section>

      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 border border-dr-border hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-dr-cream min-h-[280px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${featured.image}')` }} />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="label-tag">{featured.category}</span>
                <span className="text-dr-gray text-xs font-body">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-display-sm text-dr-black mb-4 leading-snug group-hover:text-dr-gold transition-colors duration-200">{featured.title}</h2>
              <p className="text-dr-muted font-body leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-dr-gray font-body">{featured.date}</span>
                <span className="text-sm font-body text-dr-gold">Read More →</span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group flex flex-col border border-dr-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[16/9] overflow-hidden bg-dr-cream">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.image}')` }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label-tag">{post.category}</span>
                    <span className="text-dr-gray text-xs font-body">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg text-dr-black mb-3 leading-snug group-hover:text-dr-gold transition-colors duration-200">{post.title}</h3>
                  <p className="text-dr-muted font-body text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <span className="text-xs text-dr-gray font-body mt-auto">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
