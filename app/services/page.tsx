import Link from "next/link";

export const metadata = {
  title: "Services — Dream Rentals Chicago",
  description: "From birthday parties to corporate retreats — Dream Rentals offers premium services for every type of stay in Chicago.",
};

const services = [
  {
    num: "01",
    title: "Birthday & Bachelorette Packages",
    body: "Celebrate in style. We coordinate venue selection, custom decorations, catering, entertainment, and full event logistics so you can focus on making memories.",
    features: ["Custom décor & setup", "Catering & cocktail menus", "DJ or live entertainment options", "Dedicated event coordinator"],
  },
  {
    num: "02",
    title: "Corporate & Relocation Housing",
    body: "Fully furnished, flexible-term apartments for business travelers, relocating professionals, and corporate teams. Hotel comfort with the space of a real home.",
    features: ["Flexible 30–365 day stays", "High-speed WiFi & workspace", "Weekly housekeeping available", "Invoicing & corporate billing"],
  },
  {
    num: "03",
    title: "Vacation & Short-Term Rentals",
    body: "Premium furnished apartments across Chicago's best neighborhoods. Every property is hotel-quality clean, fully stocked, and ready for your arrival.",
    features: ["125+ properties citywide", "Instant booking available", "24/7 guest support", "Contactless check-in"],
  },
  {
    num: "04",
    title: "Property Management",
    body: "Own property in Chicago? We handle everything — listings, guests, pricing, cleaning, and reporting. You collect the check.",
    features: ["Multi-platform listing (Airbnb, VRBO, etc.)", "Dynamic pricing optimization", "Professional photography", "Monthly financial reporting"],
    cta: { label: "Learn More", href: "/property-management" },
  },
  {
    num: "05",
    title: "Group & Event Stays",
    body: "Traveling with a group? We specialize in coordinating multi-unit bookings for family reunions, sports teams, wedding parties, and large corporate groups.",
    features: ["Multi-unit coordination", "Custom welcome packages", "Group catering referrals", "Dedicated group concierge"],
  },
  {
    num: "06",
    title: "Concierge & Add-Ons",
    body: "Elevate your stay with our à la carte concierge services. From grocery pre-stocking to restaurant reservations, we handle the details.",
    features: ["Grocery pre-stocking", "Airport transportation", "Restaurant reservations", "City experience recommendations"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dr-black pt-32 pb-24 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dr-black to-transparent" />
        <div className="relative z-10 max-w-container mx-auto">
          <p className="label-tag mb-4">What We Offer</p>
          <h1 className="font-display text-display-xl text-white mb-6 max-w-2xl">
            Every Stay,<br />
            <em className="not-italic text-dr-gold">Every Occasion</em>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-lg leading-relaxed mb-10">
            From a bachelorette weekend to a 6-month corporate relocation — Dream Rentals has the property and the services to make it exceptional.
          </p>
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-dr-border">
            {services.map(s => (
              <div key={s.num} className="bg-white p-10 md:p-12 flex flex-col group hover:bg-dr-cream transition-colors duration-300">
                <span className="font-display text-dr-gold/40 text-sm group-hover:text-dr-gold transition-colors duration-300 block mb-4">{s.num}</span>
                <h2 className="font-display text-display-sm text-dr-black mb-4">{s.title}</h2>
                <p className="text-dr-muted font-body leading-relaxed mb-6">{s.body}</p>
                <ul className="space-y-2 mt-auto mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-dr-muted">
                      <span className="w-1 h-1 rounded-full bg-dr-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {s.cta && (
                  <Link href={s.cta.href} className="text-sm font-body text-dr-gold hover:underline mt-auto self-start">
                    {s.cta.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section section-pad bg-dr-black">
        <div className="max-w-container-sm mx-auto text-center">
          <p className="label-tag mb-4">Ready to Book?</p>
          <h2 className="font-display text-display-lg text-white mb-4">
            Let&apos;s Plan Your<br />
            <em className="not-italic text-dr-gold">Perfect Stay</em>
          </h2>
          <p className="text-white/50 font-body mb-8 max-w-md mx-auto">
            Tell us what you need and we&apos;ll match you with the right property and services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/properties" className="btn-gold">Browse Properties</Link>
            <Link href="/contact" className="btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
