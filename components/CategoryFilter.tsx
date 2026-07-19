"use client";

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={
            active === cat
              ? { background: "#E83E8C", color: "#fff", boxShadow: "0 0 16px rgba(232,62,140,0.45)" }
              : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.12)" }
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
