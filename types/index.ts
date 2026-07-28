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

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};
