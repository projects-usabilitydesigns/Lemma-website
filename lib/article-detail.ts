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
