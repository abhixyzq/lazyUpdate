import type { NextConfig } from "next";

// When building on Vercel, omit 'export' so API routes (/api/notices) deploy as Serverless Functions.
// For local Capacitor Android builds, use 'export' so static assets are exported to out/.
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: 'export' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
