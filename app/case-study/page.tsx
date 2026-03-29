import Link from "next/link";

export const metadata = {
  title: "Case Study — Dream Rentals Chicago",
  description: "How Dream Rentals turned a vacant Lincoln Park condo into a top-performing short-term rental generating $48,000 annually.",
};

const timeline = [
  { month: "Month 1", title: "Onboarding",       body: "Professional photography, listing creation across Airbnb, VRBO, and direct booking. Dynamic pricing configured. Unit deep-cleaned and fully furnished to Dream Rentals standards." },
  { month: "Month 2", title: "First Bookings",   body: "27 nights booked at an average of $189/night. Occupancy rate: 87%. First guest reviews averaging 4.9 stars, primarily praising cleanliness and location." },
  { month: "Month 4", title: "Superhost Status", body: "Listing achieves Airbnb Superhost status. Search ranking improves significantly. Average nightly rate increases to $210 as listing gains review velocity." },
  { month: "Month 8", title: "Peak Season",      body: "Lollapalooza weekend: $495/night. Average August rate: $265/night. Monthly revenue hits $7,200 — the property's highest month on record." },
  { month: "Month 12", title: "Year in Review",  body: "Total annual revenue: $48,400. After Dream Rentals management fee: owner net $38,720. Previous rental income (long-term tenant): $22,800/year." },
];

const metrics = [
  { value: "$48,400",  label: "Annual Revenue",        sub: "Year 1" },
  { value: "82%",      label: "Avg Occupancy",         sub: "12-month average" },
  { value: "4.93 ★",   label: "Guest Rating",          sub: "Across all platforms" },
  { value: "+69%",     label: "Income Increase",       sub: "vs. long-term rental" },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dr-black pt-32 pb-24 section-pad overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-dr-black to-transparent" />
        <div className="relative z-10 max-w-container mx-auto">
          <p className="label-tag mb-4">Case Study</p>
          <h1 className="font-display text-display-xl text-white mb-6 max-w-3xl leading-tight">
            From Vacant Condo to<br />
            <em className="not-italic text-dr-gold">$48K Annual Revenue</em>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-xl leading-relaxed">
            How a Lincoln Park owner went from $22,800/year in rental income to $48,400 — in 12 months with Dream Rentals.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 section-pad bg-dr-cream border-y border-dr-border">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map(m => (
            <div key={m.label} className="text-center">
              <div className="font-display text-display-lg text-dr-black mb-1">{m.value}</div>
              <div className="text-label uppercase tracking-[0.12em] text-dr-black font-body">{m.label}</div>
              <div className="text-xs text-dr-gray font-body mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-10">

            <div>
              <p className="label-tag mb-3">The Situation</p>
              <h2 className="font-display text-display-sm text-dr-black mb-4">A Good Property in the Wrong Model</h2>
              <p className="text-dr-muted font-body leading-relaxed mb-4">
                In early 2024, a Lincoln Park property owner came to us with a 2-bedroom, 2-bathroom condo sitting vacant between long-term tenants. The unit was well-located, well-maintained, and consistently renting for $1,900/month — $22,800 annually.
              </p>
              <p className="text-dr-muted font-body leading-relaxed">
                The owner was skeptical about short-term rentals. They&apos;d heard the horror stories: difficult guests, property damage, constant management headaches. What they hadn&apos;t considered was what a professionally managed short-term rental actually looks like.
              </p>
            </div>

            <div>
              <p className="label-tag mb-3">The Approach</p>
              <h2 className="font-display text-display-sm text-dr-black mb-4">Professional Management From Day One</h2>
              <p className="text-dr-muted font-body leading-relaxed mb-4">
                We started with what we always start with: the listing. Professional photography, a compelling description, and pricing calibrated to Lincoln Park demand patterns. The unit was furnished to our standard — quality linens, fully stocked kitchen, premium toiletries.
              </p>
              <p className="text-dr-muted font-body leading-relaxed">
                Dynamic pricing was configured from day one. Chicago has extreme demand variability — Lollapalooza, Cubs playoffs, convention season, and summer weekends can all 2–3x standard rates. Capturing that upside requires real-time pricing, not a flat nightly rate.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <p className="label-tag mb-6">The Timeline</p>
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <div key={t.month} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-dr-gold shrink-0 mt-1.5" />
                      {i < timeline.length - 1 && <div className="w-px bg-dr-border flex-1 mt-2" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-dr-gold text-xs uppercase tracking-[0.12em] font-body">{t.month}</span>
                      <h3 className="font-display text-lg text-dr-black mt-1 mb-2">{t.title}</h3>
                      <p className="text-dr-muted font-body text-sm leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="label-tag mb-3">The Result</p>
              <h2 className="font-display text-display-sm text-dr-black mb-4">$38,720 Net — Without Lifting a Finger</h2>
              <p className="text-dr-muted font-body leading-relaxed mb-4">
                After our management fee, the owner netted $38,720 in year one — a 69% increase over their long-term rental income, with zero day-to-day involvement. No guest communications, no cleaning coordination, no maintenance calls. Just a monthly statement and a direct deposit.
              </p>
              <p className="text-dr-muted font-body leading-relaxed">
                The property has since been enrolled for a second year. Based on year-one review velocity and the Superhost status, we&apos;re projecting $54,000–$58,000 in year two as the listing matures and repeat guests return.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-dr-black p-8">
                <p className="label-tag mb-4">The Property</p>
                <div className="space-y-3 text-sm font-body">
                  {[
                    ["Location",    "Lincoln Park, Chicago"],
                    ["Type",        "2BR / 2BA Condo"],
                    ["Size",        "1,100 sq ft"],
                    ["Prior Model", "Long-term rental"],
                    ["Prior Income","$22,800/yr"],
                    ["New Income",  "$48,400/yr"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/40">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-dr-border p-6">
                <p className="font-display text-lg text-dr-black mb-3">Get Your Free Estimate</p>
                <p className="text-sm text-dr-muted font-body mb-4 leading-relaxed">See what your Chicago property could earn with Dream Rentals management.</p>
                <Link href="/contact" className="btn-gold w-full justify-center">Talk to Our Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section section-pad bg-dr-black">
        <div className="max-w-container-sm mx-auto text-center">
          <p className="label-tag mb-4">Your Property Could Be Next</p>
          <h2 className="font-display text-display-lg text-white mb-4">
            Ready to See What Your<br />
            <em className="not-italic text-dr-gold">Property Can Earn?</em>
          </h2>
          <p className="text-white/50 font-body mb-8 max-w-md mx-auto">
            Free consultation. No commitment. We&apos;ll show you a revenue projection based on real comparable data.
          </p>
          <Link href="/contact" className="btn-gold">Get a Free Revenue Estimate</Link>
        </div>
      </section>
    </>
  );
}
