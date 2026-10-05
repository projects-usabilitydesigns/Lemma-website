import type { MetadataRoute } from "next";
import { fetchCollection } from "@/lib/strapi";

/** Canonical origin. Matches `metadataBase` in app/layout.tsx. */
const SITE_URL = "https://lemmamedia.com";

export const revalidate = 60;

/**
 * Public App Router pages. Listing indexes that permanently redirect
 * (`/blogs`, `/newsroom`, `/case-studies`) and `/solutions/agencies`
 * (redirects to `/solutions/demand-partners`) are omitted.
 */
const STATIC_PATHS = [
  "/",
  "/about",
  "/contact-us",
  "/careers",
  "/privacy-policy",
  "/request-demo",
  "/resources",
  "/resources/blogs",
  "/resources/newsroom",
  "/resources/case-studies",
  "/products/integral",
  "/products/delta",
  "/products/sigma",
  "/products/phi",
  "/solutions/brands-advertisers",
  "/solutions/media-owners",
  "/solutions/demand-partners",
  "/solutions/publishers",
  "/solutions/business-growth",
  "/solutions/network-operators",
] as const;

type CmsDoc = {
  id?: number;
  documentId?: string;
  Slug?: string | null;
  Title?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
};

const PAGE_SIZE = 100;

function absoluteUrl(pathname: string): string {
  const base = SITE_URL.replace(/\/+$/, "");
  if (pathname === "/") return base;
  const path = (pathname.startsWith("/") ? pathname : `/${pathname}`).replace(/\/{2,}/g, "/");
  return `${base}${path.replace(/\/+$/, "")}`;
}

function isPublicSegment(value: string): boolean {
  if (!value || value === "." || value === "..") return false;
  return !/[/?#\\\s]/.test(value);
}

function lastModified(doc: CmsDoc): Date | undefined {
  const raw = doc.updatedAt || doc.publishedAt;
  if (!raw) return undefined;
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function isPublished(doc: CmsDoc): boolean {
  if (!("publishedAt" in doc)) return true;
  return typeof doc.publishedAt === "string" && doc.publishedAt.length > 0;
}

async function fetchPublished(collection: string, fields: string[]): Promise<CmsDoc[]> {
  const items: CmsDoc[] = [];
  let page = 1;
  let pageCount = 1;

  while (page <= pageCount) {
    const res = await fetchCollection<CmsDoc>(collection, {
      fields,
      pagination: { page, pageSize: PAGE_SIZE },
      sort: "updatedAt:desc",
      revalidate,
    });
    items.push(...(res.data ?? []));
    pageCount = res.meta?.pagination?.pageCount ?? 1;
    page += 1;
    if (page > 100) break;
  }

  return items.filter(isPublished);
}

function addEntry(
  entries: MetadataRoute.Sitemap,
  seen: Set<string>,
  url: string,
  modified?: Date,
) {
  if (seen.has(url)) return;
  seen.add(url);
  entries.push(modified ? { url, lastModified: modified } : { url });
}

function addSlugged(
  entries: MetadataRoute.Sitemap,
  seen: Set<string>,
  docs: CmsDoc[],
  prefix: string,
) {
  for (const doc of docs) {
    const slug = doc.Slug?.trim() ?? "";
    if (!isPublicSegment(slug)) continue;
    addEntry(entries, seen, absoluteUrl(`${prefix}/${encodeURIComponent(slug)}`), lastModified(doc));
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  for (const path of STATIC_PATHS) {
    addEntry(entries, seen, absoluteUrl(path));
  }

  const contentFields = ["Slug", "Title", "publishedAt", "updatedAt"];
  const [blogs, newsroom, caseStudies, jobs] = await Promise.all([
    fetchPublished("blogs", contentFields).catch(() => [] as CmsDoc[]),
    fetchPublished("newsrooms", contentFields).catch(() => [] as CmsDoc[]),
    fetchPublished("case-studies", contentFields).catch(() => [] as CmsDoc[]),
    fetchPublished("jobs", ["Title", "publishedAt", "updatedAt"]).catch(() => [] as CmsDoc[]),
  ]);

  addSlugged(entries, seen, blogs, "/blogs");
  addSlugged(entries, seen, newsroom, "/newsroom");
  addSlugged(entries, seen, caseStudies, "/case-studies");

  for (const job of jobs) {
    if (!job.Title?.trim()) continue;
    const id = (job.documentId ?? (job.id != null ? String(job.id) : "")).trim();
    if (!isPublicSegment(id)) continue;
    addEntry(
      entries,
      seen,
      absoluteUrl(`/careers/jobs/${encodeURIComponent(id)}`),
      lastModified(job),
    );
  }

  return entries;
}
