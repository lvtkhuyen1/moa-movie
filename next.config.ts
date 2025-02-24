import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [''], // Add your allowed domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS images
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP images
      },
    ],
  },
}

export default nextConfig;
