import type { NextConfig } from "next";
import path from "path";

// Derive the allowed image host from STRAPI_URL so the same code works on
// localhost and production (https://strapi.lemmatechnologies.com).
const strapi = new URL(
  process.env.STRAPI_URL ?? "https://strapi.lemmatechnologies.com",
);

const nextConfig: NextConfig = {
  // Pin the tracing root: nested packages (cms/, mailer/) have their own lockfiles.
  outputFileTracingRoot: path.join(__dirname),
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
      // Always allow production CMS media (covers builds where STRAPI_URL is unset)
      {
        protocol: "https",
        hostname: "strapi.lemmatechnologies.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solutions/agencies",
        destination: "/solutions/demand-partners",
        permanent: true,
      },
      {
        source: "/newsroom",
        destination: "/resources/newsroom",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/resources/case-studies",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/resources/blogs",
        permanent: true,
      },
      {
        source: "/resources/newsroom/:slug",
        destination: "/newsroom/:slug",
        permanent: true,
      },
      {
        source: "/resources/case-studies/:slug",
        destination: "/case-studies/:slug",
        permanent: true,
      },
      {
        source: "/resources/blogs/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
