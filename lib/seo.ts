import type { Metadata } from "next";
import { getStrapiMediaUrl } from "./strapi";

/** Raw shape of the shared.seo Strapi component (all fields optional). */
export type StrapiSeoTag = {
  word?: string | null;
  name?: string | null;
  value?: string | null;
  label?: string | null;
  title?: string | null;
};

export type StrapiSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string | null;
  canonicalURL?: string | null;
  noIndex?: boolean | null;
  SocialImage?: unknown;
  Tags?: string | StrapiSeoTag[] | null;
} | null | undefined;

export type SeoFallback = {
  title: string;
  description?: string;
  image?: string;
};

function asNonEmptyString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

/**
 * Builds Next.js page metadata from a Strapi shared.seo component,
 * falling back to the entry's own title/description/image so pages
 * without filled SEO data keep rendering exactly as before.
 */
export function buildMetadataFromSeo(seo: StrapiSeo, fallback: SeoFallback): Metadata {
  const title = asNonEmptyString(seo?.metaTitle) ?? fallback.title;
  const description = asNonEmptyString(seo?.metaDescription) ?? fallback.description ?? "";
  const keywords = asNonEmptyString(seo?.keywords);
  const canonical = asNonEmptyString(seo?.canonicalURL);

  const seoImage = seo?.SocialImage
    ? getStrapiMediaUrl(seo.SocialImage as Parameters<typeof getStrapiMediaUrl>[0])
    : "";
  const image = seoImage || fallback.image || "";

  const metadata: Metadata = {
    title,
    description,
  };

  if (keywords) metadata.keywords = keywords;
  if (canonical) metadata.alternates = { canonical };
  if (seo?.noIndex === true) metadata.robots = { index: false, follow: false };

  metadata.openGraph = {
    title,
    description,
    images: image ? [image] : [],
  };

  metadata.twitter = {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : [],
  };

  return metadata;
}
