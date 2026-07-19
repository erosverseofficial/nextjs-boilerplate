const pillars = [
  {
    icon: "🤝",
    title: "Connect",
    accent: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    desc: "Bringing every resident together across generations, interests, and backgrounds — building bonds that make Sampoornam feel like home.",
  },
  {
    icon: "💡",
    title: "Collaborate",
    accent: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    desc: "Pooling skills, ideas, and energy to co-create initiatives — from volunteering drives to cultural productions — where everyone contributes.",
  },
  {
    icon: "🎉",
    title: "Celebrate",
    accent: "#E11D48",
    bg: "#FFF1F2",
    border: "#FECDD3",
    desc: "Honouring our festivals, milestones, and everyday joys with events that leave memories for a lifetime.",
  },
];

export default function BrandValues() {
  return (
    <>
      {/* ── Mission ─────────────────────────────────────────────────────── */}
      <section id="mission" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#7C3AED" }}
          >
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            More than a community —{" "}
            <span style={{ color: "#7C3AED" }}>a family</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-gray-800">ErosVerse</strong> is the cultural
            and social heartbeat of{" "}
            <strong className="text-gray-800">Eros Sampoornam</strong>. We
            organise events, nurture talent, and create spaces where every voice
            counts — so that residents don&apos;t just live beside each other,
            they truly <em>live together</em>.
          </p>
        </div>
      </section>

      {/* ── Three Cs ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p
            className="text-xs font-bold tracking-widest uppercase text-center mb-3"
            style={{ color: "#7C3AED" }}
          >
            Our Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-14">
            The Three C&apos;s
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pillars.map(({ icon, title, accent, bg, border, desc }) => (
              <article
                key={title}
                className="rounded-2xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-xl"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="text-xl font-extrabold" style={{ color: accent }}>
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white"
        style={{
          background: "linear-gradient(135deg, #5B21B6 0%, #4338CA 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#FCD34D" }}
          >
            Our Vision
          </p>
          <blockquote className="text-2xl sm:text-3xl font-bold leading-snug text-white mb-6">
            &ldquo;A Sampoornam where every resident feels seen, heard, and
            celebrated — every single day.&rdquo;
          </blockquote>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            We measure success not in event counts, but in the smiles,
            friendships, and memories created across our community.
          </p>
        </div>
      </section>
    </>
  );
}
