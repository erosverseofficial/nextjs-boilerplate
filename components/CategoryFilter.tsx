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
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={
            active === cat
              ? {
                  background: "#7C3AED",
                  color: "#fff",
                  boxShadow: "0 1px 4px rgba(124,58,237,0.35)",
                }
              : { background: "#F3F4F6", color: "#4B5563" }
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
