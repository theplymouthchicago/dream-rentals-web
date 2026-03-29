import Link from "next/link";

export const metadata = {
  title: "All Properties — Dream Rentals Chicago",
  description: "Browse 125+ premium furnished apartments and corporate housing across Chicago's finest neighborhoods.",
};

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dr-black pt-28 pb-16 section-pad">
        <div className="max-w-container mx-auto">
          <p className="label-tag mb-4">Chicago · 125+ Properties</p>
          <h1 className="font-display text-display-lg text-white mb-4">All Properties</h1>
          <p className="text-white/50 font-body max-w-lg">
            Fully furnished apartments and corporate housing across Chicago&apos;s finest neighborhoods. Select dates to check availability and book instantly.
          </p>
        </div>
      </section>

      {/* Dream Rentals Portfolio */}
      <section className="bg-dr-cream pt-12 section-pad">
        <div className="max-w-container mx-auto mb-6">
          <p className="label-tag mb-2">Dream Rentals Portfolio</p>
          <h2 className="font-display text-display-sm text-dr-black">Chicago Furnished Apartments</h2>
        </div>
        <iframe
          src="https://dreamchicagorentals.guestybookings.com"
          width="100%"
          style={{ minHeight: "75vh", border: "none", display: "block" }}
          title="Dream Rentals — Browse & Book Properties"
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Plymouth Collection */}
      <section className="bg-white py-12 section-pad">
        <div className="max-w-container mx-auto mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="label-tag mb-2">Featured Collection</p>
            <h2 className="font-display text-display-sm text-dr-black">The Plymouth Chicago</h2>
            <p className="text-dr-muted font-body mt-2 max-w-lg">
              Premium suites in a historic 1899 landmark at the heart of the Loop. 2, 3 &amp; 4 bedroom layouts — floors 2 through 11.
            </p>
          </div>
          <Link href="https://www.theplymouthchicago.com" target="_blank" rel="noopener noreferrer"
            className="btn-outline shrink-0">
            View Plymouth Site →
          </Link>
        </div>
        <iframe
          src="https://theplymouthchicago.guestybookings.com"
          width="100%"
          style={{ minHeight: "75vh", border: "none", display: "block" }}
          title="The Plymouth Chicago — Browse & Book Suites"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </>
  );
}
