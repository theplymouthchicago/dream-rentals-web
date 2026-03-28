const stats = [
  { value: "94+",   label: "Properties" },
  { value: "4,000+", label: "5-Star Reviews" },
  { value: "$5.5M",  label: "2025 Revenue" },
  { value: "24/7",   label: "Guest Support" },
];

export function Stats() {
  return (
    <section className="py-20 section-pad bg-dr-cream border-y border-dr-border">
      <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-display-lg text-dr-black mb-1">{s.value}</div>
            <div className="text-label uppercase tracking-[0.15em] text-dr-gray font-body">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
