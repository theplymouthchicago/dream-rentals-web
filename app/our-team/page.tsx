import Link from "next/link";

export const metadata = {
  title: "Our Team — Dream Rentals Chicago",
  description: "Meet Sebastian Mysliwiec and Josh Arnold, co-founders of Dream Rentals — Chicago's premier short-term rental company.",
};

const team = [
  {
    name: "Sebastian Mysliwiec",
    role: "Co-Founder",
    bio: "Sebastian brings a passion for hospitality and an eye for design to every property in the Dream Rentals portfolio. Since co-founding the company in 2019, he has led the charge on guest experience, brand standards, and property acquisition across Chicago.",
    img: "https://thedreamrentals.com/wp-content/uploads/2024/04/pasted-image-0.png",
  },
  {
    name: "Josh Arnold",
    role: "Co-Founder",
    bio: "Josh oversees operations, revenue strategy, and owner relations at Dream Rentals. His background in real estate and finance has been the engine behind the company's rapid growth to 94 properties and over $5M in annual revenue.",
    img: "https://thedreamrentals.com/wp-content/uploads/2025/01/Josh-head-shot.png",
  },
];

const values = [
  { title: "Guest First",        body: "Every decision we make starts with the guest experience. Comfort, cleanliness, and responsiveness are non-negotiable." },
  { title: "Premium Standards",  body: "We hold every property to hotel-level standards. Professional photography, premium linens, fully stocked kitchens — always." },
  { title: "Chicago Experts",    body: "We live and operate in Chicago. We know the neighborhoods, the seasons, the events, and what guests are looking for." },
];

export default function OurTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dr-black pt-32 pb-20 section-pad">
        <div className="max-w-container mx-auto max-w-container-sm text-center">
          <p className="label-tag mb-4">Our Team</p>
          <h1 className="font-display text-display-xl text-white mb-6">
            The People Behind<br />
            <em className="not-italic text-dr-gold">Your Experience</em>
          </h1>
          <p className="text-white/50 font-body text-lg leading-relaxed">
            Founded in 2019, Dream Rentals was built on a simple belief: travelers deserve more than a hotel room. We set out to create a portfolio of premium Chicago apartments that feel like home from the moment you walk in.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {team.map(member => (
              <div key={member.name} className="flex flex-col">
                <div className="aspect-[3/4] bg-dr-cream overflow-hidden mb-8 max-w-xs">
                  <div className="w-full h-full bg-cover bg-center bg-top"
                    style={{ backgroundImage: `url('${member.img}')` }} />
                </div>
                <p className="label-tag mb-2">{member.role}</p>
                <h2 className="font-display text-display-sm text-dr-black mb-4">{member.name}</h2>
                <p className="text-dr-muted font-body leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 section-pad bg-dr-cream border-y border-dr-border">
        <div className="max-w-container mx-auto grid grid-cols-3 gap-8">
          {[
            { value: "94+",    label: "Properties" },
            { value: "4,000+", label: "5-Star Reviews" },
            { value: "5+",     label: "Years in Chicago" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-display-lg text-dr-black mb-1">{s.value}</div>
              <div className="text-label uppercase tracking-[0.15em] text-dr-gray font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section section-pad bg-white">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-tag mb-4">Our Story</p>
            <h2 className="font-display text-display-lg text-dr-black mb-6">
              Built on a Belief That<br />
              <em className="not-italic text-dr-gold">Stays Should Be Better</em>
            </h2>
            <div className="space-y-4 text-dr-muted font-body leading-relaxed">
              <p>Dream Rentals was founded in 2019 by Sebastian Mysliwiec and Josh Arnold with a single property in Chicago&apos;s South Loop. The vision was simple: create short-term rentals that actually feel like a home — not a beige hotel room.</p>
              <p>Today, we manage 125 properties across Chicago&apos;s finest neighborhoods, from The Loop to Uptown, with a portfolio that generates over $5M annually and consistently earns five-star reviews.</p>
              <p>Every property is personally vetted by our founders. If we wouldn&apos;t be proud to stay there ourselves, it doesn&apos;t make the cut.</p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-dr-cream overflow-hidden">
            <div className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80')" }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section section-pad bg-dr-black">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <p className="label-tag mb-3">What We Stand For</p>
            <h2 className="font-display text-display-lg text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {values.map(v => (
              <div key={v.title} className="bg-dr-black p-10">
                <h3 className="font-display text-xl text-dr-gold mb-4">{v.title}</h3>
                <p className="text-white/45 font-body text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-pad bg-dr-cream border-t border-dr-border">
        <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl text-dr-black mb-1">Work With Us</h3>
            <p className="text-dr-muted font-body text-sm">Own property in Chicago? Let&apos;s talk.</p>
          </div>
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
