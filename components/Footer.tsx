import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#111827", color: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none select-none mb-3">
              <span className="text-2xl font-black tracking-tight">
                <span style={{ color: "#A78BFA" }}>Eros</span>
                <span style={{ color: "#FCD34D" }}>Verse</span>
              </span>
              <span className="flex gap-1.5 mt-1.5">
                <span style={{ width: 8, height: 8, background: "#A78BFA", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ width: 8, height: 8, background: "#FCD34D", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ width: 8, height: 8, background: "#FB7185", borderRadius: "50%", display: "inline-block" }} />
              </span>
            </div>
            <p className="text-sm max-w-xs" style={{ color: "#9CA3AF" }}>
              The community brand of Eros Sampoornam. Uniting residents through
              events, culture, and shared memories.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            {/* Nav links */}
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#6B7280" }}>
                Navigate
              </p>
              <Link href="/" className="transition-colors hover:text-white" style={{ color: "#9CA3AF" }}>
                Home
              </Link>
              <Link href="/gallery" className="transition-colors hover:text-white" style={{ color: "#9CA3AF" }}>
                Events Gallery
              </Link>
            </nav>

            {/* Social links */}
            <SocialLinks />
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-xs"
          style={{ borderTop: "1px solid #1F2937", color: "#6B7280" }}
        >
          © {year} ErosVerse · Eros Sampoornam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

