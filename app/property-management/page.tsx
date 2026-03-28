import Link from "next/link";

export const metadata = {
  title: "Property Management — Dream Rentals Chicago",
  description: "Professional short-term rental management in Chicago. We handle everything — listings, guests, cleaning, pricing, and reporting.",
};

const services = [
  { num: "01", title: "Listing Optimization", body: "Professional photography, compelling copy, and SEO-optimized listings across Airbnb, VRBO, Booking.com, and our direct channel." },
  { num: "02", title: "Guest Management",     body: "24/7 guest communication, seamless check-in and check-out coordination, and swift issue resolution — all handled for you." },
  { num: "03", title: "Cleaning & Turnover",  body: "Certified cleaning teams, hotel-quality linen service, regular inspections, and a trusted maintenance network." },
  { num: "04", title: "Dynamic Pricing",      body: "Algorithm-driven pricing that responds to demand, seasonality, and local events to maximize your occupancy and revenue." },
  { num: "05", title: "Financial Reporting",  body: "Monthly statements, real-time performance dashboards, transparent expense tracking, and year-end tax summaries." },
  { num: "06", title: "Full Compliance",      body: "Chicago STR licensing, local tax remittance, insurance guidance, and HOA coordination — we keep you legal." },
];

const stats = [
  { value: "94",   label: "Properties Managed" },
  { value: "85%",  label: "Avg Occupancy Rate" },
  { value: "4,000+", label: "5-Star Guest Reviews" },
  { value: "24/7", label: "Owner Support" },
];

export default function PropertyManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dr-black pt-32 pb-24 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dr-black to-transparent" />
        <div className="relative z-10 max-w-container mx-auto">
          <p className="label-tag mb-4">Property Management</p>
          <h1 className="font-display text-display-xl text-white mb-6 max-w-2xl">
            Turn Your Property<br />
            <em className="not-italic text-dr-gold">Into Income</em>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-lg leading-relaxed mb-10">
            We handle everything. You collect the check. Professional short-term rental management across Chicago with transparent reporting and no surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">Get a Free Revenue Estimate</Link>
            <Link href="/contact" className="btn-outline-white">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-pad bg-dr-cream border-y border-dr-border">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-display-lg text-dr-black mb-1">{s.value}</div>
              <div className="text-label uppercase tracking-[0.15em] text-dr-gray font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="max-w-container-sm mx-auto text-center mb-14">
            <p className="label-tag mb-3">What We Do</p>
            <h2 className="font-display text-display-lg text-dr-black">
              Everything Your Property<br />
              <em className="not-italic text-dr-gold">Needs to Succeed</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dr-border">
            {services.map(s => (
              <div key={s.num} className="bg-white p-8 md:p-10 group hover:bg-dr-cream transition-colors duration-300">
                <span className="font-display text-dr-gold/40 text-sm group-hover:text-dr-gold transition-colors duration-300 block mb-4">{s.num}</span>
                <h3 className="font-display text-xl text-dr-black mb-3">{s.title}</h3>
                <p className="text-dr-muted font-body text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section section-pad bg-dr-black">
        <div className="max-w-container-sm mx-auto text-center">
          <svg className="w-8 h-8 text-dr-gold mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="font-display text-display-sm text-white italic leading-relaxed mb-8">
            &ldquo;Dream Rentals increased my property revenue by 40% in the first 6 months. I spend zero time managing guests and the monthly reports are incredibly transparent.&rdquo;
          </blockquote>
          <div>
            <div className="font-body font-semibold text-sm text-white">Michael T.</div>
            <div className="text-label text-dr-gold uppercase tracking-[0.12em] mt-1 font-body">Property Owner · Lincoln Park</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <p className="label-tag mb-3">The Process</p>
            <h2 className="font-display text-display-lg text-dr-black">Simple to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Consultation", body: "We evaluate your property and provide a revenue projection at no cost." },
              { step: "2", title: "Onboarding",        body: "Professional photos, listing setup, pricing configuration — ready in 7 days." },
              { step: "3", title: "We Go Live",        body: "Your property lists on all major platforms. Guests start booking immediately." },
              { step: "4", title: "You Get Paid",      body: "Monthly payouts, full transparency, zero hassle on your end." },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full border border-dr-gold text-dr-gold font-display text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-display text-lg text-dr-black mb-2">{s.title}</h3>
                <p className="text-dr-muted font-body text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section section-pad bg-dr-cream border-t border-dr-border">
        <div className="max-w-container-sm mx-auto text-center">
          <h2 className="font-display text-display-lg text-dr-black mb-4">
            Ready to Maximize<br />Your Property&apos;s Potential?
          </h2>
          <p className="text-dr-muted font-body mb-8 max-w-md mx-auto">
            Get a free revenue estimate and see what your property could earn with Dream Rentals.
          </p>
          <Link href="/contact" className="btn-gold">Get Your Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
