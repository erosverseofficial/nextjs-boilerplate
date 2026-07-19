"use client";

import { useState } from "react";
import { events, categories } from "@/src/data/events";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", color: "#fff" }}>
      {/* ── Page header ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <p
          className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
          style={{ color: "#E83E8C" }}
        >
          Eros Sampoornam
        </p>
        <h1
          className="font-extrabold leading-none mb-4"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            color: "#fff",
          }}
        >
          Event Gallery
        </h1>
        <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
          Relive every moment — browse by category or scroll through our memories.
        </p>

        {/* Divider */}
        <div className="mt-8 mb-10 h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />

        {/* Filter */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {filtered.length === 0 ? (
          <p className="text-center py-32 text-lg" style={{ color: "rgba(255,255,255,0.3)" }}>
            No events in this category yet.
          </p>
        ) : (
          <>
            {/* Featured event — full-width */}
            {featured && (
              <div className="mb-4">
                <EventCard event={featured} featured />
              </div>
            )}

            {/* Rest — 2 cols mobile / 3 desktop */}
            {rest.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {rest.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
