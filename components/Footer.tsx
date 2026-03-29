import Link from "next/link";

const nav = [
  { label: "Properties", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Leave a Review", href: "https://g.page/r/CY4CcGFjAoiQEAE/review" },
];

export function Footer() {
  return (
    <footer className="bg-dr-black border-t border-white/5">
      <div className="max-w-container mx-auto section-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-white mb-4">Dream Rentals</div>
            <p className="text-white/35 font-body text-sm leading-relaxed max-w-xs">
              Premium furnished apartments and corporate housing across Chicago.
            </p>
            <p className="text-dr-gold font-body text-sm mt-4">Igniting Dreams, One Stay at a Time.</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-label uppercase tracking-[0.18em] text-white/25 font-body mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {nav.map(l => (
                <Link key={l.href} href={l.href}
                  className="text-white/45 hover:text-white text-sm font-body transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-label uppercase tracking-[0.18em] text-white/25 font-body mb-5">Contact</h4>
            <div className="flex flex-col gap-2 text-white/45 text-sm font-body">
              <p>323 E Wacker Dr.</p>
              <p>Chicago, IL 60601</p>
              <a href="mailto:info@dreamchi.org" className="hover:text-white transition-colors duration-200 mt-2">
                info@dreamchi.org
              </a>
              <a href="tel:+13124710454" className="hover:text-white transition-colors duration-200">
                (312) 471-0454
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              {["facebook","instagram","tiktok"].map(s => (
                <a key={s} href="#" aria-label={s}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-white/30 hover:text-white/60 transition-all duration-200">
                  <span className="text-[10px] uppercase font-body">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body">© Dream Rentals, LLC 2024. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms & Conditions"].map(l => (
              <Link key={l} href="#" className="text-white/20 hover:text-white/50 text-xs font-body transition-colors duration-200">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
