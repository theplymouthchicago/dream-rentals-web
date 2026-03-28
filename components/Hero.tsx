"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden bg-dr-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80')" }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dr-black via-dr-black/50 to-dr-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-dr-black/60 to-transparent" />

      {/* Content — bottom left, Wander-style */}
      <div className="relative z-10 max-w-container mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-2xl">
          <p className="label-tag text-dr-gold mb-6">Chicago · 94 Properties</p>
          <h1 className="font-display text-display-xl text-white mb-6 leading-[1.05]">
            Luxury Stays.<br />
            <em className="not-italic text-white/80">Unlimited Comfort.</em>
          </h1>
          <p className="text-white/60 font-body text-lg font-light leading-relaxed mb-10 max-w-md">
            Fully furnished apartments and corporate housing across Chicago&apos;s finest neighborhoods.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="btn-gold">
              Browse Properties
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-sm">
          {[["94+","Properties"],["5★","Avg Rating"],["24/7","Support"]].map(([num,label]) => (
            <div key={label}>
              <div className="font-display text-2xl text-white">{num}</div>
              <div className="text-label text-white/40 uppercase tracking-[0.15em] mt-1 font-body">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes subtleZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
}
