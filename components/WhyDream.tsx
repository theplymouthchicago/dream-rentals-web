const pillars = [
  {
    num: "01",
    title: "Fully Furnished",
    body: "Every property is move-in ready with premium furniture, fully stocked kitchen, high-speed WiFi, and hotel-quality linens.",
  },
  {
    num: "02",
    title: "Flexible Stays",
    body: "From weekend getaways to month-long corporate stays. No rigid minimums. Terms built around your schedule.",
  },
  {
    num: "03",
    title: "Chicago Specialists",
    body: "94 properties across The Loop, Uptown, South Loop, and beyond. We know every neighborhood intimately.",
  },
  {
    num: "04",
    title: "24/7 Support",
    body: "A real person available around the clock. Fast responses, genuine hospitality, no corporate runaround.",
  },
];

export function WhyDream() {
  return (
    <section className="py-section section-pad bg-dr-black">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="label-tag mb-4">Why Dream Rentals</p>
            <h2 className="font-display text-display-lg text-white mb-6">
              Not a Hotel.<br />
              <em className="not-italic text-dr-gold">Better Than One.</em>
            </h2>
            <p className="text-white/50 font-body leading-relaxed max-w-sm">
              Hotels give you a room. We give you a home — with the space, privacy,
              and comforts you actually want when you travel.
            </p>
          </div>

          {/* Right — pillar list */}
          <div className="divide-y divide-white/10">
            {pillars.map((p) => (
              <div key={p.num} className="py-8 flex gap-6 group">
                <span className="font-display text-dr-gold/40 text-sm mt-1 shrink-0 group-hover:text-dr-gold transition-colors duration-300">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display text-white text-xl mb-2">{p.title}</h3>
                  <p className="text-white/45 font-body text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
