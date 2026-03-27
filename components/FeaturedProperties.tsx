import Link from "next/link";

const properties = [
  {
    name: "The Loop Penthouse",
    neighborhood: "The Loop",
    beds: 3, baths: 2, guests: 6,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    tag: "Most Popular",
  },
  {
    name: "Uptown Executive Suite",
    neighborhood: "Uptown",
    beds: 2, baths: 1, guests: 4,
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    tag: "New",
  },
  {
    name: "South Loop Retreat",
    neighborhood: "South Loop",
    beds: 4, baths: 2, guests: 8,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    tag: "Superhost",
  },
  {
    name: "Millennium Park View",
    neighborhood: "Streeterville",
    beds: 2, baths: 2, guests: 4,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    tag: null,
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-section section-pad bg-white">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-tag mb-3">Our Properties</p>
            <h2 className="font-display text-display-lg text-dr-black">
              Find Your<br /><em className="not-italic text-dr-gold">Chicago Home</em>
            </h2>
          </div>
          <Link href="/properties" className="btn-outline hidden md:inline-flex">
            View All 94
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grid — Wander style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dr-border">
          {properties.map((p) => (
            <Link key={p.name} href="/properties"
              className="group bg-white flex flex-col overflow-hidden hover:z-10 transition-shadow duration-300 hover:shadow-2xl">
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {p.tag && (
                  <span className="absolute top-3 left-3 z-10 bg-dr-black text-white text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-body">
                    {p.tag}
                  </span>
                )}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
              </div>
              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-dr-gold text-[10px] uppercase tracking-[0.15em] font-body mb-1">{p.neighborhood}</p>
                <h3 className="font-display text-base text-dr-black mb-3 leading-snug">{p.name}</h3>
                <div className="mt-auto flex items-center gap-4 text-dr-gray text-xs font-body pt-3 border-t border-dr-border">
                  <span>{p.beds} bed</span>
                  <span>{p.baths} bath</span>
                  <span>Up to {p.guests} guests</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/properties" className="btn-outline mt-10 md:hidden inline-flex">
          View All 94 Properties
        </Link>
      </div>
    </section>
  );
}
