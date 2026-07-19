/**
 * ErosVerse wordmark — pure SVG/CSS, no raster images needed.
 *
 * "Eros" in violet · "Verse" in amber
 * Three-Cs motif below: Connect · Collaborate · Celebrate
 */
type Size = "sm" | "md" | "lg";

const cfg: Record<Size, { text: string; dot: number; gap: number; mt: number }> = {
  sm: { text: "text-xl",  dot: 6,  gap: 4,  mt: 2 },
  md: { text: "text-2xl", dot: 8,  gap: 5,  mt: 3 },
  lg: { text: "text-5xl", dot: 13, gap: 7,  mt: 6 },
};

export default function Logo({ size = "md" }: { size?: Size }) {
  const s = cfg[size] ?? cfg.md;

  return (
    <div className="flex flex-col items-start leading-none select-none">
      {/* Wordmark */}
      <span className={`${s.text} font-black tracking-tight`}>
        <span style={{ color: "#7C3AED" }}>Eros</span>
        <span style={{ color: "#D97706" }}>Verse</span>
      </span>

      {/* Three-Cs dots */}
      <span
        className="flex items-center"
        style={{ gap: s.gap, marginTop: s.mt }}
        aria-label="Connect · Collaborate · Celebrate"
      >
        <Dot color="#7C3AED" size={s.dot} label="Connect" />
        <Dot color="#D97706" size={s.dot} label="Collaborate" />
        <Dot color="#E11D48" size={s.dot} label="Celebrate" />
      </span>
    </div>
  );
}

function Dot({ color, size, label }: { color: string; size: number; label: string }) {
  return (
    <span
      title={label}
      style={{ width: size, height: size, background: color, borderRadius: "50%", display: "inline-block" }}
    />
  );
}
