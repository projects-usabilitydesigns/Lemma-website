import type {
  AiFeature,
  BlogPost,
  CaseStudy,
  ClientLogo,
  FaqItem,
  Product,
  Solution,
  Stat,
} from "@/types";
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
    }>>("case-studies", { revalidate: REVALIDATE });
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

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetchCollection<W<{
      title: string;
      date: string;
      readTime: string;
      views: string;
      image: unknown;
      href: string;
    }>>("blog-posts", { revalidate: REVALIDATE, sort: "date:desc" });
    return res.data.map((item) => ({
      id: String(item.id),
      title: item.title,
      date: item.date,
      readTime: item.readTime,
      views: item.views,
      image: getStrapiMediaUrl(item.image as Parameters<typeof getStrapiMediaUrl>[0]),
      href: item.href,
    }));
  } catch {
    return [];
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
