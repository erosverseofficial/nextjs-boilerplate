"use client";

import Link from "next/link";
import { events } from "@/src/data/events";

export default function Hero() {
  const eventCount = events.length;

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(160deg, #E83E8C 0%, #FF914D 25%, #7B2CBF 65%, #1D4EDB 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Subtle noise texture for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.025, mixBlendMode: "overlay" }}
      />

      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-25"
          style={{ background: "#E83E8C" }}
        />
        <div
          className="absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#1D4EDB" }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: "#D4AF37" }}
        />
      </div>

      {/* Main 2-column layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-24 pb-20 min-h-[100svh]">

        {/* ── Left column — editorial text ───────────────── */}
        <div className="flex-1 lg:max-w-[56%] z-10 text-center lg:text-left">

          {/* Community pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-10"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="w-5 h-5 rounded-full object-cover" aria-hidden="true" />
            Eros Sampoornam Community
          </div>

          {/* Giant editorial heading */}
          <h1
            className="font-extrabold italic leading-none mb-2"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              color: "#FFF9C4",
            }}
          >
            Uniting
          </h1>
          <h1
            className="font-extrabold leading-none mb-8"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              background: "linear-gradient(90deg, #FFF9C4 0%, #fff 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sampoornam.
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            ErosVerse is the cultural and social heartbeat of Eros Sampoornam —
            organising events, nurturing talent, and creating spaces where every
            voice counts.
          </p>

          {/* Three Cs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-10">
            <Pill bg="rgba(232,62,140,0.45)" color="#FFE4EF" label="Connect" />
            <Sep />
            <Pill bg="rgba(255,145,77,0.45)" color="#FFF0E4" label="Collaborate" />
            <Sep />
            <Pill bg="rgba(29,78,219,0.45)" color="#E0EAFF" label="Celebrate" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/gallery"
              className="px-8 py-3.5 rounded-full font-bold text-base text-center inline-block hover:scale-105 transition-transform shadow-2xl"
              style={{ background: "#D4AF37", color: "#1F2937" }}
            >
              Explore Our Events →
            </Link>
            <a
              href="#mission"
              className="px-8 py-3.5 rounded-full font-semibold text-base text-center inline-block transition-all hover:bg-white/20"
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

        {/* ── Right column — stacked photo collage (desktop only) ──── */}
        <div
          className="relative hidden lg:block w-[42%] flex-shrink-0 z-10"
          style={{ height: 500 }}
        >
          {/* Event counter badge */}
          <div
            className="absolute z-20 font-bold text-xs rounded-full px-4 py-2"
            style={{
              top: -12,
              left: 40,
              background: "#D4AF37",
              color: "#1F2937",
              boxShadow: "0 8px 24px rgba(212,175,55,0.55)",
            }}
          >
            {eventCount} Events & Counting ✨
          </div>

          {/* Main photo — tilted left */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              width: 275,
              height: 355,
              borderRadius: 20,
              overflow: "hidden",
              transform: "rotate(-3deg)",
              boxShadow: "0 32px 72px rgba(0,0,0,0.5)",
              border: "3px solid rgba(255,255,255,0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/events/diwali-2025-cover.jpg"
              alt="Diwali 2025"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Secondary photo — tilted right */}
          <div
            style={{
              position: "absolute",
              top: 100,
              left: 0,
              width: 195,
              height: 240,
              borderRadius: 16,
              overflow: "hidden",
              transform: "rotate(3deg)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
              border: "3px solid rgba(255,255,255,0.14)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/events/diwali-2025-1.jpg"
              alt="Diwali 2025"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>

          {/* Tertiary photo — bottom right */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 10,
              width: 165,
              height: 200,
              borderRadius: 16,
              overflow: "hidden",
              transform: "rotate(-1.5deg)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
              border: "3px solid rgba(255,255,255,0.13)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/events/diwali-2025-5.jpg"
              alt="Diwali 2025"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0";
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none">
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function Pill({ bg, color, label }: { bg: string; color: string; label: string }) {
  return (
    <span
      className="text-sm font-semibold px-4 py-1.5 rounded-full"
      style={{ background: bg, color }}
    >
      {label}
    </span>
  );
}

function Sep() {
  return (
    <span className="text-lg" style={{ color: "rgba(255,255,255,0.35)" }}>
      •
    </span>
  );
}
