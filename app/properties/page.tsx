import Link from "next/link";
import { fetchListings, PLACEHOLDER_LISTINGS, GuestyListing } from "@/lib/guesty";

export const revalidate = 3600;

export const metadata = {
  title: "All Properties — Dream Rentals Chicago",
  description: "Browse 94 premium furnished apartments and corporate housing across Chicago&apos;s finest neighborhoods.",
};

function PropertyCard({ listing }: { listing: Partial<GuestyListing> }) {
  const photo = listing.pictures?.[0]?.original ?? "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80";
  const hood  = listing.address?.neighborhood || listing.address?.city || "Chicago";
  return (
    <Link href={`/properties/${listing._id}`}
      className="group flex flex-col overflow-hidden bg-white border border-dr-border hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-dr-cream">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${photo}')` }} />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-dr-gold text-[10px] uppercase tracking-[0.15em] font-body mb-1">{hood}</p>
        <h3 className="font-display text-base text-dr-black mb-3 leading-snug">{listing.title}</h3>
        <div className="mt-auto flex items-center gap-4 text-dr-gray text-xs font-body pt-3 border-t border-dr-border">
          {listing.bedrooms   != null && <span>{listing.bedrooms} bed</span>}
          {listing.bathrooms  != null && <span>{listing.bathrooms} bath</span>}
          {listing.accommodates != null && <span>Up to {listing.accommodates} guests</span>}
        </div>
      </div>
    </Link>
  );
}

export default async function PropertiesPage() {
  const results = await fetchListings(50, 0);
  const listings: Partial<GuestyListing>[] = results ?? PLACEHOLDER_LISTINGS;

  return (
    <>
      {/* Hero */}
      <section className="bg-dr-black pt-28 pb-16 section-pad">
        <div className="max-w-container mx-auto">
          <p className="label-tag mb-4">Chicago · {listings.length}+ Properties</p>
          <h1 className="font-display text-display-lg text-white mb-4">All Properties</h1>
          <p className="text-white/50 font-body max-w-lg">
            Fully furnished apartments and corporate housing across Chicago&apos;s finest neighborhoods.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-section section-pad bg-dr-cream">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {listings.map((l) => (
              <PropertyCard key={l._id} listing={l} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
