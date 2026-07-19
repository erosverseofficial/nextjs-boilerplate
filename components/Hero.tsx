import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #5B21B6 0%, #4F46E5 60%, #3730A3 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "#7C3AED" }}
        />
        <div
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#818CF8" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: "#FCD34D" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-28 sm:py-40 text-center">
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

        {/* Wordmark */}
        <h1
          className="font-black tracking-tight leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 12vw, 7rem)" }}
        >
          <span className="text-white">Eros</span>
          <span style={{ color: "#FCD34D" }}>Verse</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-2xl sm:text-3xl font-bold mb-5"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Uniting Sampoornam
        </p>

        {/* Three Cs */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-5 mb-12">
          <CTag bg="rgba(124,58,237,0.55)" color="#E0E7FF" label="Connect" />
          <span style={{ color: "rgba(255,255,255,0.35)" }} className="text-lg">
            •
          </span>
          <CTag bg="rgba(217,119,6,0.40)" color="#FDE68A" label="Collaborate" />
          <span style={{ color: "rgba(255,255,255,0.35)" }} className="text-lg">
            •
          </span>
          <CTag bg="rgba(225,29,72,0.40)" color="#FECDD3" label="Celebrate" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="px-8 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg inline-block"
            style={{ background: "#FCD34D", color: "#1F2937" }}
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
