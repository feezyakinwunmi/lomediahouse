import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/id/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Keep optimised images cached for 31 days instead of re-optimising
    // remote (Unsplash) images every few hours, which caused slow cold LCPs.
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
