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

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: "#7C3AED" }}
          >
            Our Events
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Event Gallery
          </h1>
          <p className="text-gray-500 mt-2 text-base">
            Relive the moments that bring Sampoornam together.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-10">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-24 text-lg">
            No events in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
