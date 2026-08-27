import type { NextConfig } from "next";

// Derive the allowed image host from STRAPI_URL so the same code works on
// localhost (http://localhost:1337) and in production (https://cms.example.com).
const strapi = new URL(process.env.STRAPI_URL ?? "http://localhost:1337");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: strapi.protocol.replace(":", "") as "http" | "https",
        hostname: strapi.hostname,
        ...(strapi.port ? { port: strapi.port } : {}),
        pathname: "/uploads/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
