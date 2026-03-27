import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen bg-dr-black flex flex-col items-center justify-center text-center px-6">
      <p className="text-dr-gold text-xs uppercase tracking-[0.18em] font-body mb-4">Dream Rentals</p>
      <h1 className="font-display text-4xl text-white mb-6">Coming Soon</h1>
      <Link href="/" className="border border-white text-white text-xs uppercase tracking-[0.15em] px-6 py-3 font-body hover:bg-white hover:text-black transition-all">Back Home</Link>
    </div>
  );
}
