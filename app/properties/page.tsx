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

      {/* Guesty Booking Engine — all real properties, live availability, fully bookable */}
      <section className="bg-dr-cream" style={{ minHeight: "80vh" }}>
        <iframe
          src="https://dreamchicagorentals.guestybookings.com"
          width="100%"
          style={{ minHeight: "80vh", border: "none", display: "block" }}
          title="Dream Rentals — Browse & Book Properties"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </>
  );
}
