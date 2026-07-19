"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "./Lightbox";
import type { ErosEvent } from "@/src/data/events";

const ACCENT: Record<string, string> = {
  Cultural: "#E83E8C",
  Sports:   "#10B981",
  Kids:     "#FF914D",
  Social:   "#D4AF37",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function EventGallery({ event }: { event: ErosEvent }) {
  const { title, date, category, description, images } = event;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const accent = ACCENT[category] ?? "#E83E8C";

  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", color: "#fff" }}>

      {/* ── Cinematic header ─────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "min(70vh, 640px)" }}>
        {/* Hero image (first photo) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/events/${images[0]}`}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.65) 40%, rgba(13,13,13,0.2) 100%)",
          }}
        />

        {/* Header content */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-4 sm:px-6 pb-10">
          {/* Back link */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm mb-6 w-fit transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Events
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: accent, color: "#fff" }}
            >
              {category}
            </span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {formatDate(date)}
            </span>
          </div>

          <h1
            className="font-extrabold leading-tight"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* ── Description ──────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          {description}
        </p>
      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-semibold" style={{ color: accent }}>
            {images.length} Photos
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Click to enlarge
          </span>
        </div>
      </div>

      {/* ── Masonry photo grid ───────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="photo-masonry">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setLightboxIndex(i)}
              className="photo-masonry-item group relative overflow-hidden focus:outline-none"
              style={{ background: ACCENT[category] ?? "#1a1a1a" }}
              aria-label={`Open photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/events/${img}`}
                alt={`${title} — photo ${i + 1}`}
                loading="lazy"
                className="w-full block group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.35)" }}
              >
                <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
