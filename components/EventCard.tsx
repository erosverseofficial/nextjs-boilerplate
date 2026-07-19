import Link from "next/link";
import type { ErosEvent } from "@/src/data/events";

// Gradient shown behind the cover image (visible before load / if image missing)
const GRADIENTS: Record<string, string> = {
  Cultural: "linear-gradient(135deg, #E83E8C, #7B2CBF)",
  Sports:   "linear-gradient(135deg, #10B981, #0D9488)",
  Kids:     "linear-gradient(135deg, #FF914D, #E83E8C)",
  Social:   "linear-gradient(135deg, #D4AF37, #FF914D)",
};

const BADGES: Record<string, { bg: string; color: string }> = {
  Cultural: { bg: "#FFF0F6", color: "#9D174D" },
  Sports:   { bg: "#D1FAE5", color: "#065F46" },
  Kids:     { bg: "#FFF7ED", color: "#C2410C" },
  Social:   { bg: "#FEFCE8", color: "#854D0E" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventCard({ event }: { event: ErosEvent }) {
  const { id, title, date, category, description, cover, images } = event;
  const gradient = GRADIENTS[category] ?? GRADIENTS.Social;
  const badge = BADGES[category] ?? { bg: "#F3F4F6", color: "#374151" };

  return (
    <Link
      href={`/events/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/9", background: gradient }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/events/${cover}`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Photo count */}
        <div
          className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-white backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          {images.length}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3 gap-2">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0"
            style={{ background: badge.bg, color: badge.color }}
          >
            {category}
          </span>
          <span className="text-xs text-gray-400 text-right truncate">
            {formatDate(date)}
          </span>
        </div>

        <h3
          className="font-bold text-gray-900 text-lg mb-2 leading-snug clamp-2 group-hover:text-pink-600 transition-colors"
        >
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed clamp-3">
          {description}
        </p>

        <div
          className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
          style={{ color: "#E83E8C" }}
        >
          View Gallery
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
