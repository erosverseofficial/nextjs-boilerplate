"use client";

const pillars = [
  {
    icon: "🤝",
    title: "Connect",
    accent: "#E83E8C",
    glow: "rgba(232,62,140,0.2)",
    border: "rgba(232,62,140,0.25)",
    desc: "Bringing every resident together across generations, interests, and backgrounds — building bonds that make Sampoornam feel like home.",
  },
  {
    icon: "💡",
    title: "Collaborate",
    accent: "#D4AF37",
    glow: "rgba(212,175,55,0.2)",
    border: "rgba(212,175,55,0.25)",
    desc: "Pooling skills, ideas, and energy to co-create initiatives — from volunteering drives to cultural productions — where everyone contributes.",
  },
  {
    icon: "🎉",
    title: "Celebrate",
    accent: "#1D4EDB",
    glow: "rgba(29,78,219,0.2)",
    border: "rgba(29,78,219,0.25)",
    desc: "Honouring our festivals, milestones, and everyday joys with events that leave memories for a lifetime.",
  },
];

export default function BrandValues() {
  return (
    <>
      {/* ── Mission ──────────────────────────────────────────────── */}
      <section id="mission" style={{ background: "#0D0D0D" }} className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#E83E8C" }}
          >
            Who We Are
          </p>

          <h2
            className="font-extrabold leading-tight mb-6 text-white"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
            }}
          >
            More than a community —{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E83E8C, #FF914D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              a family
            </span>
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            <strong className="text-white font-semibold">ErosVerse</strong> is the
            cultural and social heartbeat of{" "}
            <strong className="text-white font-semibold">Eros Sampoornam</strong>. We
            organise events, nurture talent, and create spaces where every voice
            counts — so that residents don&apos;t just live beside each other,
            they truly <em style={{ color: "#FFF9C4" }}>live together</em>.
          </p>

          {/* Subtle divider */}
          <div className="flex items-center gap-4 justify-center mt-12">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="flex gap-2">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E83E8C", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", display: "inline-block" }} />
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#93C5FD", display: "inline-block" }} />
            </div>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
        </div>
      </section>

      {/* ── Three Cs ─────────────────────────────────────────────── */}
      <section style={{ background: "#111" }} className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#E83E8C" }}
            >
              Our Pillars
            </p>
            <h2
              className="font-extrabold text-white"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
              }}
            >
              The Three C&apos;s
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map(({ icon, title, accent, glow, border, desc }) => (
              <article
                key={title}
                className="rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#1a1a1a",
                  border: `1px solid ${border}`,
                  boxShadow: `0 0 0 0 ${glow}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${glow}`;
                }}
              >
                <div className="text-4xl">{icon}</div>
                <h3
                  className="text-xl font-extrabold"
                  style={{ color: accent }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────────────── */}
      <section
        className="py-24 text-white"
        style={{
          background: "linear-gradient(135deg, #1D4EDB 0%, #7B2CBF 50%, #E83E8C 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
            style={{ color: "#D4AF37" }}
          >
            Our Vision
          </p>

          <blockquote
            className="font-bold leading-snug text-white mb-6"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
              fontStyle: "italic",
            }}
          >
            &ldquo;A Sampoornam where every resident feels seen, heard, and
            celebrated — every single day.&rdquo;
          </blockquote>

          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            We measure success not in event counts, but in the smiles,
            friendships, and memories created across our community.
          </p>

          {/* CTA from vision section */}
          <a
            href="/gallery"
            className="inline-block mt-10 px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform"
            style={{ background: "#D4AF37", color: "#1F2937", boxShadow: "0 8px 24px rgba(212,175,55,0.4)" }}
          >
            See Our Memories →
          </a>
        </div>
      </section>
    </>
  );
}
