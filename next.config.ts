import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` — deploy to Netlify / Vercel / S3 / GitHub Pages
  output: 'export',
  // next/image optimizer is not available in static export; mark images unoptimized
  images: { unoptimized: true },
};

export default nextConfig;
