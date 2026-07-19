import Link from "next/link";
import type { ErosEvent } from "@/src/data/events";

const GRADIENTS: Record<string, string> = {
  Cultural: "linear-gradient(135deg, #E83E8C, #7B2CBF)",
  Sports:   "linear-gradient(135deg, #10B981, #0D9488)",
  Kids:     "linear-gradient(135deg, #FF914D, #E83E8C)",
  Social:   "linear-gradient(135deg, #D4AF37, #FF914D)",
};

const BADGE: Record<string, { bg: string; color: string }> = {
  Cultural: { bg: "rgba(232,62,140,0.9)", color: "#fff" },
  Sports:   { bg: "rgba(16,185,129,0.9)",  color: "#fff" },
  Kids:     { bg: "rgba(255,145,77,0.9)",  color: "#fff" },
  Social:   { bg: "rgba(212,175,55,0.9)",  color: "#111" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });
}

export default function EventCard({
  event,
  featured = false,
}: {
  event: ErosEvent;
  featured?: boolean;
}) {
  const { id, title, date, category, description, cover, images } = event;
  const gradient = GRADIENTS[category] ?? GRADIENTS.Social;
  const badge    = BADGE[category]     ?? { bg: "rgba(0,0,0,0.7)", color: "#fff" };

  return (
    <Link
      href={`/events/${id}`}
      className="group relative block overflow-hidden rounded-2xl"
      style={{ aspectRatio: featured ? "16/9" : "3/4" }}
    >
      {/* Full-bleed background: gradient fallback + image */}
      <div className="absolute inset-0" style={{ background: gradient }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/events/${cover}`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </div>

      {/* Dark vignette overlay — deepens on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.05) 75%, transparent 100%)",
        }}
      />

      {/* Top row: category badge + photo count */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ background: badge.bg, color: badge.color }}
        >
          {category}
        </span>
        <span
          className="flex items-center gap-1 text-xs text-white rounded-full px-2.5 py-1 backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.55)" }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          {images.length}
        </span>
      </div>

      {/* Bottom text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
        <p className="text-xs font-medium mb-1.5 opacity-60">{formatDate(date)}</p>

        <h3
          className="font-bold leading-snug mb-0 group-hover:text-pink-300 transition-colors duration-300"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: featured ? "clamp(1.5rem, 2.5vw, 2.2rem)" : "1.1rem",
          }}
        >
          {title}
        </h3>

        {/* Description — hidden by default, revealed on hover */}
        <p
          className="text-sm leading-relaxed mt-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out clamp-3"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          {description}
        </p>

        {/* CTA arrow */}
        <div
          className="flex items-center gap-1.5 text-xs font-semibold mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          style={{ color: "#F9A8D4" }}
        >
          View Gallery
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
