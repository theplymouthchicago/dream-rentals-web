import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-section section-pad overflow-hidden bg-dr-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dr-black via-dr-black/80 to-dr-black/60" />
      <div className="relative z-10 max-w-container-sm mx-auto text-center">
        <p className="label-tag mb-4">Ready to Book?</p>
        <h2 className="font-display text-display-lg text-white mb-6">
          Your Next Chicago Home<br />
          <em className="not-italic text-dr-gold">Is Waiting</em>
        </h2>
        <p className="text-white/50 font-body leading-relaxed mb-10 max-w-md mx-auto">
          Browse all 94 properties or reach out — our team will match you to the perfect space.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/properties" className="btn-gold">Browse All Properties</Link>
          <Link href="/contact" className="btn-outline-white">Talk to Us</Link>
        </div>
      </div>
    </section>
  );
}
