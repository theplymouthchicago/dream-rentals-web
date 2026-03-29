import Link from "next/link";

const properties = [
  {
    name: "Loop Home with Theater & Two Decks",
    neighborhood: "The Loop",
    beds: 4, baths: 3, guests: 16,
    img: "https://assets.guesty.com/image/upload/w_800,h_600,c_fill/v1710451516/caisg807f3p2nv2kcprg.jpg",
    tag: "Most Popular",
    id: "6556ab4095fb6e0033d331a4",
  },
  {
    name: "Wicker Park: Sauna, Hot Tub & Rooftop",
    neighborhood: "Wicker Park",
    beds: 5, baths: 4, guests: 10,
    img: "https://assets.guesty.com/image/upload/w_800,h_600,c_fill/v1710451026/vetoysukubut8y1xeoey.jpg",
    tag: "Guest Favorite",
    id: "65a9f2c96083ad0010ed7334",
  },
  {
    name: "Loop Home — Private Deck & Game Room",
    neighborhood: "The Loop",
    beds: 4, baths: 3, guests: 16,
    img: "https://assets.guesty.com/image/upload/w_800,h_600,c_fill/v1710451516/k41hozrhvqvudkgakk1a.jpg",
    tag: null,
    id: "6556ab4095fb6e0033d331a4",
  },
  {
    name: "Wicker Park Luxury Home",
    neighborhood: "Wicker Park",
    beds: 5, baths: 4, guests: 10,
    img: "https://assets.guesty.com/image/upload/w_800,h_600,c_fill/v1738640536/production/6421ee060f19fa002b02d85a/taovarln2xwn0ctzy8dz.jpg",
    tag: "New",
    id: "65a9f2c96083ad0010ed7334",
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
            View All 125+
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-dr-border">
          {properties.map((p, i) => (
            <Link
              key={i}
              href={`https://dreamchicagorentals.guestybookings.com/listing/${p.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white flex flex-col overflow-hidden hover:z-10 transition-shadow duration-300 hover:shadow-2xl"
            >
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
          View All 125+ Properties
        </Link>
      </div>
    </section>
  );
}
