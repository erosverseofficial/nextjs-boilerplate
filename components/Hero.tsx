import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(160deg, #E83E8C 0%, #FF914D 25%, #7B2CBF 65%, #1D4EDB 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "#E83E8C" }}
        />
        <div
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#1D4EDB" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: "#D4AF37" }}
        />
      </div>

      {/* Logo — centered, prominent */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="ErosVerse — Uniting Sampoornam"
        className="relative z-10 mx-auto block mt-10 mb-2"
        style={{
          width: 600,
          height: 600,
          objectFit: "contain",
          filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.3))",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 text-center">
        {/* Community badge */}
        <span
          className="inline-block px-4 py-1.5 mb-8 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.22)",
          }}
        >
          Eros Sampoornam Community
        </span>

        {/* Tagline */}
        <p
          className="text-3xl sm:text-4xl font-bold italic mb-5"
          style={{ fontFamily: "var(--font-playfair), serif", color: "#FFF9C4" }}
        >
          Uniting Sampoornam
        </p>

        {/* Three Cs */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-5 mb-12">
          <CTag bg="rgba(232,62,140,0.45)" color="#FFE4EF" label="Connect" />
          <span style={{ color: "rgba(255,255,255,0.35)" }} className="text-lg">
            •
          </span>
          <CTag bg="rgba(255,145,77,0.45)" color="#FFF0E4" label="Collaborate" />
          <span style={{ color: "rgba(255,255,255,0.35)" }} className="text-lg">
            •
          </span>
          <CTag bg="rgba(29,78,219,0.45)" color="#E0EAFF" label="Celebrate" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg inline-block"
            style={{ background: "#D4AF37", color: "#1F2937" }}
          >
            Explore Our Events →
          </Link>
          <a
            href="#mission"
            className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:bg-white/20 inline-block"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
            }}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

function CTag({
  bg,
  color,
  label,
}: {
  bg: string;
  color: string;
  label: string;
}) {
  return (
    <span
      className="px-4 py-1.5 rounded-full text-sm font-semibold"
      style={{ background: bg, color }}
    >
      {label}
    </span>
  );
}
