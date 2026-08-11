export type Stat = {
  value: string;
  numericValue: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  logo: string;
  href: string;
};

export type Solution = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
};

export type CaseStudy = {
  id: string;
  brand: string;
  category: string;
  year: string;
  index: string;
  description: string;
  image: string;
  href: string;
  videoUrl?: string;
};

export type AiFeature = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  accent: string;
  accentSoft: string;
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  href: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type MegaMenuId = "who-we-are" | "what-we-do" | "resources";

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  megaMenu?: MegaMenuId;
};

export type MegaMenuLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  iconColor?: string;
  iconSymbol?: string;
};

export type MegaMenuColumn = {
  id: string;
  label: string;
  items: MegaMenuLink[];
};

export type MegaMenuFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type MegaMenuConfig = {
  id: MegaMenuId;
  columns: MegaMenuColumn[];
  featured: MegaMenuFeatured;
};

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};
