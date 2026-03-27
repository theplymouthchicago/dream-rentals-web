"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/properties", label: "All Properties" },
  { href: "/services",   label: "Services" },
  { href: "/about",      label: "About" },
  { href: "/contact",    label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white border-b border-dr-border" : "bg-transparent"
    }`}>
      <nav className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className={`font-display text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-dr-black" : "text-white"}`}>
          Dream Rentals
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-label uppercase tracking-[0.15em] font-body transition-colors duration-300 hover:text-dr-gold ${
                scrolled ? "text-dr-muted" : "text-white/75"
              }`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact"
            className={`text-label uppercase tracking-[0.15em] font-body border px-5 py-3 transition-all duration-300 ${
              scrolled
                ? "border-dr-black text-dr-black hover:bg-dr-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-dr-black"
            }`}>
            Book Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className={`w-6 flex flex-col gap-1.5 transition-all ${open ? "opacity-0" : ""}`}>
            <span className={`h-px w-full ${scrolled ? "bg-dr-black" : "bg-white"}`} />
            <span className={`h-px w-4 ${scrolled ? "bg-dr-black" : "bg-white"}`} />
            <span className={`h-px w-full ${scrolled ? "bg-dr-black" : "bg-white"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dr-black px-6 py-8 flex flex-col gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 text-label uppercase tracking-[0.15em] font-body hover:text-dr-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="btn-gold self-start mt-2">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
