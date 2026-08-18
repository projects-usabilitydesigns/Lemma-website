import { DEMO_MODAL_HREF } from "@/lib/demo-cta";

export type ArticleKind = "blog" | "newsroom" | "case-study";

export type ArticleBodySection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "takeaway"; text: string }
  | { type: "list"; items: string[] };

export type ArticleCta = {
  title: string;
  description: string;
  buttonLabel: string;
};

export type RelatedArticle = {
  title: string;
  href: string;
  image: string;
};

export type ArticleDetail = {
  slug: string;
  kind: ArticleKind;
  category: string;
  categories: string[];
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  views?: string;
  image: string;
  tags: string[];
  body: ArticleBodySection[];
  cta: ArticleCta;
};

export const articleListing = {
  blog: { href: "/resources/blogs", label: "Blogs" },
  newsroom: { href: "/newsroom", label: "Newsroom" },
  "case-study": { href: "/case-studies", label: "Case Studies" },
} as const;

export const defaultArticleCtas: Record<ArticleKind, ArticleCta> = {
  blog: {
    title: "Ready to turn these insights into outcomes?",
    description:
      "See how Lemma helps brands plan, activate, and measure omnichannel campaigns across DOOH, CTV, and digital.",
    buttonLabel: "Book a Demo",
  },
  newsroom: {
    title: "Partner with Lemma",
    description:
      "Work with us to reach audiences across DOOH, CTV, and digital — with measurement built in from day one.",
    buttonLabel: "Book a Demo",
  },
  "case-study": {
    title: "Want results like this for your brand?",
    description:
      "Talk to our team about running a measurable omnichannel campaign with Lemma.",
    buttonLabel: "Book a Demo",
  },
};

export const articleCtaHref = DEMO_MODAL_HREF;

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function articleHeadings(body: ArticleBodySection[]) {
  return body
    .filter((section): section is { type: "heading"; text: string } => section.type === "heading")
    .map((section) => ({
      id: slugifyHeading(section.text),
      text: section.text,
    }));
}

const WORDS_PER_MINUTE = 200;

type ReadableSection =
  | { type: "list"; items?: readonly string[]; text?: string }
  | { type: string; text?: string; items?: readonly string[] };

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function sectionPlainText(section: ReadableSection) {
  if (section.type === "list" && section.items?.length) {
    return section.items.join(" ");
  }
  return section.text ?? "";
}

/** Average adult reading pace, rounded up — never less than 1 minute. */
export function formatReadTime(text: string) {
  const minutes = Math.max(1, Math.ceil(wordCount(text) / WORDS_PER_MINUTE));
  return `${minutes} Min read`;
}

export function readingTimeFromText(text: string) {
  return formatReadTime(text);
}

export function readingTimeFromArticle(article: {
  title?: string;
  excerpt?: string;
  body?: readonly ReadableSection[];
}) {
  const parts = [article.title ?? "", article.excerpt ?? ""];
  for (const section of article.body ?? []) {
    parts.push(sectionPlainText(section));
  }
  return formatReadTime(parts.join(" "));
}

/** Horizontal rules / dash-only blocks used as separators in CMS copy. */
export function isDashSeparator(text: string) {
  return /^[-–—*_]{1,}$/.test(text.trim());
}

/** Turns clause dashes into commas; leaves hyphenated words like "DOOH" compounds intact. */
export function cleanArticleText(text: string) {
  return text
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/\s+-\s+/g, ", ")
    .replace(/,\s*,/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim();
}
