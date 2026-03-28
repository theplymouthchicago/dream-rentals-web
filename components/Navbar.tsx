"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";


export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [blogOpen, setBlogOpen]   = useState(false);
  const blogRef                   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (blogRef.current && !blogRef.current.contains(e.target as Node)) {
        setBlogOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const textColor = scrolled ? "text-dr-muted" : "text-white/75";
  const hoverColor = "hover:text-dr-gold";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white border-b border-dr-border" : "bg-transparent"
    }`}>
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[70px]">

        {/* Logo */}
        <Link href="/"
          className={`font-display text-xl tracking-tight transition-colors duration-300 shrink-0 ${
            scrolled ? "text-dr-black" : "text-white"
          }`}>
          Dream Rentals
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[
            { href: "/",                    label: "Home" },
            { href: "/properties",          label: "All Properties" },
            { href: "/property-management", label: "Property Management" },
            { href: "/services",            label: "Services" },
            { href: "/our-team",            label: "Our Team" },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className={`text-[11px] uppercase tracking-[0.13em] font-body transition-colors duration-200 ${textColor} ${hoverColor}`}>
              {l.label}
            </Link>
          ))}

          {/* Blog dropdown */}
          <div className="relative" ref={blogRef}>
            <button
              onClick={() => setBlogOpen(v => !v)}
              className={`flex items-center gap-1 text-[11px] uppercase tracking-[0.13em] font-body transition-colors duration-200 ${textColor} ${hoverColor}`}>
              Blog
              <svg className={`w-3 h-3 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {blogOpen && (
              <div className="absolute top-full left-0 mt-3 w-36 bg-white border border-dr-border shadow-lg z-50">
                <Link href="/blog" onClick={() => setBlogOpen(false)}
                  className="block px-4 py-3 text-[11px] uppercase tracking-[0.13em] font-body text-dr-muted hover:text-dr-gold hover:bg-dr-cream transition-colors duration-150">
                  All Posts
                </Link>
                <Link href="/case-study" onClick={() => setBlogOpen(false)}
                  className="block px-4 py-3 text-[11px] uppercase tracking-[0.13em] font-body text-dr-muted hover:text-dr-gold hover:bg-dr-cream transition-colors duration-150 border-t border-dr-border">
                  Case Study
                </Link>
              </div>
            )}
          </div>

          <Link href="/case-study"
            className={`text-[11px] uppercase tracking-[0.13em] font-body transition-colors duration-200 ${textColor} ${hoverColor}`}>
            Case Study
          </Link>

          <Link href="/contact"
            className={`text-[11px] uppercase tracking-[0.13em] font-body border px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? "border-dr-black text-dr-black hover:bg-dr-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-dr-black"
            }`}>
            Contact Us
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px w-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            } ${scrolled ? "bg-dr-black" : "bg-white"}`} />
            <span className={`h-px transition-all duration-300 ${
              open ? "opacity-0 w-0" : "w-4"
            } ${scrolled ? "bg-dr-black" : "bg-white"}`} />
            <span className={`h-px w-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            } ${scrolled ? "bg-dr-black" : "bg-white"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dr-black border-t border-white/10 px-6 py-8 flex flex-col gap-5">
          {[
            { href: "/",                    label: "Home" },
            { href: "/properties",          label: "All Properties" },
            { href: "/property-management", label: "Property Management" },
            { href: "/services",            label: "Services" },
            { href: "/our-team",            label: "Our Team" },
            { href: "/blog",                label: "Blog" },
            { href: "/case-study",          label: "Case Study" },
            { href: "/contact",             label: "Contact Us" },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/65 text-[11px] uppercase tracking-[0.15em] font-body hover:text-dr-gold transition-colors duration-150">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
