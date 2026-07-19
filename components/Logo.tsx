/**
 * ErosVerse logo — uses the brand logo image (public/logo.png).
 * Place the 128×128 (or larger) PNG at public/logo.png.
 */
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { h: number; w: number }> = {
  sm: { h: 128, w: 128 },   // navbar
  md: { h: 160, w: 160 },   // general use
  lg: { h: 240, w: 240 },   // hero / large display
};

export default function Logo({ size = "md" }: { size?: Size }) {
  const { h, w } = SIZES[size] ?? SIZES.md;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="ErosVerse — Uniting Sampoornam"
      width={w}
      height={h}
      style={{
        width: w,
        height: h,
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
