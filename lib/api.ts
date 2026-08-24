import type {
  AiFeature,
  CaseStudy,
  ClientLogo,
  FaqItem,
  Product,
  Solution,
  Stat,
} from "@/types";
import type { BlogBodySection, BlogPostDetail, ResourceArticle } from "./resources-page-data";
import { defaultArticleCtas, readingTimeFromText, type ArticleDetail } from "./article-detail";
import { fetchCollection, getStrapiMediaUrl } from "./strapi";

const REVALIDATE = 60;

type W<T> = T & { id: number; documentId?: string };

export async function getHeroStats(): Promise<Stat[]> {
  try {
    const res = await fetchCollection<W<{
      value: string;
      numericValue: number;
      decimals: number;
      suffix: string;
      label: string;
    }>>("hero-stats", { revalidate: REVALIDATE });
    return res.data.map((item) => ({
      value: item.value,
      numericValue: item.numericValue,
      decimals: item.decimals ?? 0,
      suffix: item.suffix ?? "",
      label: item.label,
    }));
  } catch {
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetchCollection<W<{
      name: string;
      description: string;
      logo: unknown;
      href: string;
    }>>("products", { revalidate: REVALIDATE });
    return res.data.map((item) => ({
      id: String(item.id),
      name: item.name,
      description: item.description,
      logo: getStrapiMediaUrl(item.logo as Parameters<typeof getStrapiMediaUrl>[0]),
      href: item.href,
    }));
  } catch {
    return [];
  }
}

export async function getSolutions(): Promise<Solution[]> {
  try {
    const res = await fetchCollection<W<{
      number: string;
      eyebrow: string;
      title: string;
      description: string;
      features: string;
      image: unknown;
      href: string;
    }>>("solutions", { revalidate: REVALIDATE });
    return res.data.map((item) => {
      let features: string[] = [];
      try {
        features =
          typeof item.features === "string"
            ? JSON.parse(item.features)
            : (item.features as unknown as string[]);
      } catch {
        features = [];
      }
      return {
        id: String(item.id),
        number: item.number,
        eyebrow: item.eyebrow,
        title: item.title,
        description: item.description,
        features,
        image: getStrapiMediaUrl(item.image as Parameters<typeof getStrapiMediaUrl>[0]),
        href: item.href,
      };
    });
  } catch {
    return [];
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const res = await fetchCollection<W<{
      brand: string;
      category: string;
      year: string;
      index: string;
      description: string;
      image: unknown;
      href: string;
      videoUrl: string;
    }>>("video-case-studies", { revalidate: REVALIDATE });
    return res.data.map((item) => ({
      id: String(item.id),
      brand: item.brand,
      category: item.category,
      year: item.year,
      index: item.index,
      description: item.description,
      image: getStrapiMediaUrl(item.image as Parameters<typeof getStrapiMediaUrl>[0]),
      href: item.href,
      videoUrl: item.videoUrl ?? undefined,
    }));
  } catch {
    return [];
  }
}

export async function getAiFeatures(): Promise<AiFeature[]> {
  try {
    const res = await fetchCollection<W<{
      title: string;
      description: string;
      bullets: string;
      icon: unknown;
      accent: string;
      accentSoft: string;
    }>>("ai-features", { revalidate: REVALIDATE });
    return res.data.map((item) => {
      let bullets: string[] = [];
      try {
        bullets =
          typeof item.bullets === "string"
            ? JSON.parse(item.bullets)
            : (item.bullets as unknown as string[]);
      } catch {
        bullets = [];
      }
      return {
        id: String(item.id),
        title: item.title,
        description: item.description,
        bullets,
        icon: getStrapiMediaUrl(item.icon as Parameters<typeof getStrapiMediaUrl>[0]),
        accent: item.accent,
        accentSoft: item.accentSoft,
      };
    });
  } catch {
    return [];
  }
}

function blocksToSections(raw: unknown): BlogBodySection[] {
  if (!Array.isArray(raw)) return [];
  const sections: BlogBodySection[] = [];
  for (const block of raw) {
    if (!block || typeof block !== "object") continue;
    const b = block as {
      type?: string;
      children?: { type?: string; text?: string }[];
    };
    const text = (b.children ?? []).map((child) => child.text ?? "").join("");
    if (b.type === "heading") {
      sections.push({ type: "heading", text });
    } else if (b.type === "paragraph") {
      sections.push({ type: "paragraph", text });
    } else if (b.type === "quote") {
      sections.push({ type: "blockquote", text });
    } else if (b.type === "list") {
      const items = (b.children ?? [])
        .filter((child) => child.type === "list-item")
        .map(
          (child) =>
            (child as { children?: { text?: string }[] }).children
              ?.map((c) => c.text ?? "")
              .join("") ?? "",
        )
        .filter(Boolean);
      if (items.length > 0) sections.push({ type: "list", items });
    } else if (b.type === "code" && text.trim()) {
      sections.push({ type: "paragraph", text });
    }
  }
  return sections;
}

function formatStrapiDate(raw: unknown): string {
  if (typeof raw !== "string" || !raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getFirstMedia(media: unknown) {
  return Array.isArray(media) ? media[0] : media;
}

export async function getBlogPosts(): Promise<ResourceArticle[]> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Categories: string;
      DateTime: string;
      Content: unknown;
      Thumbnail: unknown;
    }>>("blogs", { revalidate: REVALIDATE, sort: "publishedAt:desc" });
    return res.data.map((item) => ({
      id: String(item.id),
      slug: item.Slug,
      category: item.Categories ?? "Blogs",
      title: item.Title,
      date: formatStrapiDate(item.DateTime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      accent: "#008fdb",
      tone: "dark",
      href: `/resources/blogs/${item.Slug}`,
    }));
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Categories: string;
      Author: string;
      DateTime: string;
      Content: unknown;
      Thumbnail: unknown;
    }>>("blogs", {
      revalidate: REVALIDATE,
      filters: { Slug: { $eq: slug } },
    });
    const item = res.data[0];
    if (!item) return null;

    const body = blocksToSections(item.Content);
    const tags =
      typeof item.Categories === "string"
        ? item.Categories.split(",").map((t) => t.trim()).filter(Boolean)
        : [];

    return {
      slug: item.Slug,
      category: item.Categories ?? "Blogs",
      title: item.Title,
      author: item.Author ?? "",
      authorRole: "",
      date: formatStrapiDate(item.DateTime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      accent: "#008fdb",
      tags,
      body,
    };
  } catch {
    return null;
  }
}

function parseCsv(raw: unknown): string[] {
  if (typeof raw !== "string") return [];
  return raw.split(",").map((t) => t.trim()).filter(Boolean);
}

export async function getNewsroomPosts(): Promise<ResourceArticle[]> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Datetime: string;
      Content: unknown;
      Thumbnail: unknown;
    }>>("newsrooms", { revalidate: REVALIDATE, sort: "Datetime:desc" });
    return res.data.map((item) => ({
      id: String(item.id),
      slug: item.Slug,
      category: "Newsroom",
      title: item.Title,
      date: formatStrapiDate(item.Datetime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      accent: "#008fdb",
      tone: "dark",
      href: `/newsroom/${item.Slug}`,
    }));
  } catch {
    return [];
  }
}

export async function getCaseStudyArticles(): Promise<ResourceArticle[]> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Datetime: string;
      Thumbnail: unknown;
    }>>("case-studies", { revalidate: REVALIDATE, sort: "Datetime:desc" });
    return res.data.map((item) => ({
      id: String(item.id),
      slug: item.Slug,
      category: "Case Studies",
      title: item.Title,
      date: formatStrapiDate(item.Datetime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      accent: "#009352",
      tone: "dark",
      href: `/case-studies/${item.Slug}`,
    }));
  } catch {
    return [];
  }
}

export async function getNewsroomBySlug(slug: string): Promise<ArticleDetail | null> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Author: string;
      Datetime: string;
      Content: unknown;
      Thumbnail: unknown;
    }>>("newsrooms", {
      revalidate: REVALIDATE,
      filters: { Slug: { $eq: slug } },
    });
    const item = res.data[0];
    if (!item) return null;

    return {
      slug: item.Slug,
      kind: "newsroom",
      category: "Newsroom",
      categories: ["Newsroom"],
      title: item.Title,
      excerpt: "",
      author: item.Author ?? "",
      date: formatStrapiDate(item.Datetime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      tags: [],
      body: blocksToSections(item.Content).map((section) =>
        section.type === "blockquote"
          ? { type: "paragraph" as const, text: section.text }
          : section,
      ),
      cta: defaultArticleCtas.newsroom,
    };
  } catch {
    return null;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<ArticleDetail | null> {
  try {
    const res = await fetchCollection<W<{
      Title: string;
      Slug: string;
      Datetime: string;
      Content: unknown;
      Thumbnail: unknown;
    }>>("case-studies", {
      revalidate: REVALIDATE,
      filters: { Slug: { $eq: slug } },
    });
    const item = res.data[0];
    if (!item) return null;

    return {
      slug: item.Slug,
      kind: "case-study",
      category: "Case Studies",
      categories: ["Case Studies"],
      title: item.Title,
      excerpt: "",
      author: "",
      date: formatStrapiDate(item.Datetime),
      readTime: "",
      views: "",
      image: getStrapiMediaUrl(
        getFirstMedia(item.Thumbnail) as Parameters<typeof getStrapiMediaUrl>[0],
      ),
      tags: [],
      body: blocksToSections(item.Content).map((section) =>
        section.type === "blockquote"
          ? { type: "paragraph" as const, text: section.text }
          : section,
      ),
      cta: defaultArticleCtas["case-study"],
    };
  } catch {
    return null;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const res = await fetchCollection<W<{
      question: string;
      answer: string;
    }>>("faqs", { revalidate: REVALIDATE });
    return res.data.map((item) => ({
      id: String(item.id),
      question: item.question,
      answer: item.answer,
    }));
  } catch {
    return [];
  }
}

export async function getClientLogos(): Promise<ClientLogo[]> {
  try {
    const res = await fetchCollection<W<{
      name: string;
      src: unknown;
      width: number;
      height: number;
    }>>("client-logos", { revalidate: REVALIDATE });
    return res.data.map((item) => ({
      id: String(item.id),
      name: item.name,
      src: getStrapiMediaUrl(item.src as Parameters<typeof getStrapiMediaUrl>[0]),
      width: item.width ?? 120,
      height: item.height ?? 36,
    }));
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<
  { id: string; name: string; role: string; image: string }[]
> {
  try {
    const res = await fetchCollection<W<{
      name: string;
      role: string;
      image: unknown;
    }>>("team-members", { revalidate: REVALIDATE, pagination: { pageSize: 100 } });
    return res.data.map((item) => ({
      id: String(item.id),
      name: item.name,
      role: item.role,
      image: getStrapiMediaUrl(item.image as Parameters<typeof getStrapiMediaUrl>[0]),
    }));
  } catch {
    return [];
  }
}

export async function getAwards(): Promise<
  { id: string; year: string; title: string; image: string }[]
> {
  try {
    const res = await fetchCollection<W<{
      year: string;
      title: string;
      image: unknown;
    }>>("awards", { revalidate: REVALIDATE, sort: "year:desc" });
    return res.data.map((item) => ({
      id: String(item.id),
      year: item.year,
      title: item.title,
      image: getStrapiMediaUrl(item.image as Parameters<typeof getStrapiMediaUrl>[0]),
    }));
  } catch {
    return [];
  }
}
