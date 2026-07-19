"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "./Lightbox";
import type { ErosEvent } from "@/src/data/events";

const GRADIENTS: Record<string, string> = {
  Cultural: "linear-gradient(135deg, #8B5CF6, #6366F1)",
  Sports:   "linear-gradient(135deg, #10B981, #0D9488)",
  Kids:     "linear-gradient(135deg, #F472B6, #FB7185)",
  Social:   "linear-gradient(135deg, #FBBF24, #F97316)",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventGallery({ event }: { event: ErosEvent }) {
  const { title, date, category, description, images } = event;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gradient = GRADIENTS[category] ?? GRADIENTS.Social;

  const prev = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="text-white py-16" style={{ background: gradient }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1 text-sm mb-6 transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Events
          </Link>

          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            {category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            {title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)" }}>{formatDate(date)}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-12">{description}</p>

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Photos{" "}
          <span className="text-gray-400 font-normal text-base">
            ({images.length})
          </span>
        </h2>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              style={{ aspectRatio: "1", background: gradient }}
              aria-label={`Open photo ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/events/${img}`}
                alt={`${title} — photo ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
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
