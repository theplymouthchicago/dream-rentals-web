import Link from "next/link";
import { fetchListing, fetchListings, PLACEHOLDER_LISTINGS, GuestyListing } from "@/lib/guesty";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const listings = await fetchListings(25, 0);
  if (!listings) return PLACEHOLDER_LISTINGS.map(l => ({ id: l._id! }));
  return listings.map((l: GuestyListing) => ({ id: l._id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const listing = await fetchListing(params.id);
  return {
    title: listing ? `${listing.title} — Dream Rentals` : "Property — Dream Rentals",
    description: listing?.publicDescription?.summary ?? "Premium furnished apartment in Chicago.",
  };
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  let listing: Partial<GuestyListing> | null = await fetchListing(params.id);
  if (!listing) {
    listing = PLACEHOLDER_LISTINGS.find(l => l._id === params.id) ?? null;
  }
  if (!listing) notFound();

  const photos = listing.pictures?.slice(0, 6) ?? [];
  const hood   = listing.address?.neighborhood || listing.address?.city || "Chicago";
  const bookingUrl = `https://app.guesty.com/direct-booking/listing/${listing._id}`;

  return (
    <>
      {/* Photo grid */}
      <section className="pt-16 bg-dr-black">
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 max-h-[65vh] overflow-hidden">
            {photos.map((pic, i) => (
              <div key={i} className={`relative bg-dr-cream ${i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}`}
                style={{ minHeight: i === 0 ? "40vh" : "20vh" }}>
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${pic.original}')` }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-64 bg-dr-cream" />
        )}
      </section>

      {/* Content */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left — details */}
            <div className="lg:col-span-2">
              <p className="label-tag mb-3">{hood}</p>
              <h1 className="font-display text-display-lg text-dr-black mb-4">{listing.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm font-body text-dr-gray mb-8 pb-8 border-b border-dr-border">
                {listing.bedrooms    != null && <span>{listing.bedrooms} Bedroom{listing.bedrooms !== 1 ? "s" : ""}</span>}
                {listing.bathrooms   != null && <span>{listing.bathrooms} Bathroom{listing.bathrooms !== 1 ? "s" : ""}</span>}
                {listing.accommodates != null && <span>Up to {listing.accommodates} Guests</span>}
              </div>

              {listing.publicDescription?.summary && (
                <div className="mb-10">
                  <h2 className="font-display text-xl text-dr-black mb-4">About this space</h2>
                  <p className="text-dr-muted font-body leading-relaxed">
                    {listing.publicDescription.summary}
                  </p>
                </div>
              )}

              {listing.amenities && listing.amenities.length > 0 && (
                <div>
                  <h2 className="font-display text-xl text-dr-black mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {listing.amenities.slice(0, 18).map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm font-body text-dr-muted">
                        <span className="w-1 h-1 rounded-full bg-dr-gold shrink-0" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-dr-border p-8">
                <p className="label-tag mb-2">Book This Property</p>
                <h3 className="font-display text-xl text-dr-black mb-6">{listing.title}</h3>
                <div className="space-y-3 mb-8 text-sm font-body text-dr-muted">
                  {listing.bedrooms    != null && <div className="flex justify-between border-b border-dr-border pb-2"><span>Bedrooms</span><span className="text-dr-black font-medium">{listing.bedrooms}</span></div>}
                  {listing.bathrooms   != null && <div className="flex justify-between border-b border-dr-border pb-2"><span>Bathrooms</span><span className="text-dr-black font-medium">{listing.bathrooms}</span></div>}
                  {listing.accommodates != null && <div className="flex justify-between border-b border-dr-border pb-2"><span>Max Guests</span><span className="text-dr-black font-medium">{listing.accommodates}</span></div>}
                </div>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-gold w-full justify-center mb-4">
                  Book Now
                </a>
                <Link href="/contact" className="btn-outline w-full justify-center text-center">
                  Send Inquiry
                </Link>
                <p className="text-xs text-dr-gray font-body text-center mt-4">
                  Free cancellation · No hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 section-pad bg-dr-cream border-t border-dr-border">
        <div className="max-w-container mx-auto flex items-center justify-between">
          <div>
            <p className="font-display text-xl text-dr-black mb-1">Have questions?</p>
            <p className="text-dr-gray font-body text-sm">Our team responds within the hour.</p>
          </div>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
