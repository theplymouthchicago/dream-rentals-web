const reviews = [
  {
    quote: "Hands down the best stay in Chicago. The space was immaculate, location was perfect, and the team responded within minutes. We'll be back.",
    author: "Sarah M.",
    location: "New York",
    stars: 5,
  },
  {
    quote: "We needed a furnished apartment for 6 weeks for a work project. Dream Rentals made it seamless. Felt like home from day one.",
    author: "James T.",
    location: "Corporate Traveler",
    stars: 5,
  },
  {
    quote: "Booked for a bachelorette weekend. The penthouse was gorgeous. Better than any hotel we've stayed in, period.",
    author: "Kayla R.",
    location: "Chicago",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-section section-pad bg-white">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-14">
          <p className="label-tag mb-3">Guest Reviews</p>
          <h2 className="font-display text-display-lg text-dr-black">
            What Guests Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dr-border">
          {reviews.map((r) => (
            <div key={r.author} className="bg-white p-8 md:p-10 border-t-2 border-t-dr-gold">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-dr-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display text-dr-black text-lg italic leading-relaxed mb-8">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-body font-semibold text-sm text-dr-black">{r.author}</div>
                <div className="text-label text-dr-gray uppercase tracking-[0.12em] mt-0.5 font-body">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
