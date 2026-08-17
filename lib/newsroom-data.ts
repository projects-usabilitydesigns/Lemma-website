import type { FaqItem } from "@/types";
import { faqs } from "@/lib/data";

export type NewsroomArticle = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  href: string;
};

export const newsroomArticles: NewsroomArticle[] = [
  {
    id: "doceree",
    title: "Doceree and Lemma Forge Exclusive Supply Partnership…",
    date: "August 3, 2026",
    readTime: "7 Min read",
    views: "165 Views",
    image: "/images/newsroom/doceree.jpg",
    href: "/newsroom/doceree",
  },
  {
    id: "mixi",
    title: "MIXI Inc. Taps Programmatic DOOH to..",
    date: "June 3, 2026",
    readTime: "6 Min read",
    views: "1675 Views",
    image: "/images/newsroom/mixi-strike-world.jpg",
    href: "/newsroom/mixi",
  },
  {
    id: "continuum",
    title: "Lemma and Continuum Media Expand Partnership to Br…",
    date: "May 11, 2026",
    readTime: "6 Min read",
    views: "1088 Views",
    image: "/images/newsroom/continuum.jpg",
    href: "/newsroom/continuum",
  },
  {
    id: "social-beat",
    title: "Social Beat Delivers Context-Aware pDOOH Ads for",
    date: "May 27, 2026",
    readTime: "8 Min read",
    views: "752 Views",
    image: "/images/newsroom/social-beat.jpg",
    href: "/newsroom/social-beat",
  },
  {
    id: "integral-launch",
    title: "Lemma Launches AI-Powered Platform",
    date: "May 22, 2026",
    readTime: "7 Min read",
    views: "888 Views",
    image: "/images/newsroom/integral-launch.jpg",
    href: "/newsroom/integral-launch",
  },
  {
    id: "bill-nolte",
    title: "Lemma Continues US Team Expansion; Onboards Bill Nolte",
    date: "May 18, 2026",
    readTime: "8 Min read",
    views: "633 Views",
    image: "/images/newsroom/bill-nolte.jpg",
    href: "/newsroom/bill-nolte",
  },
  {
    id: "cannes",
    title: "Stop Buying Real Estate, Start Investing in Context",
    date: "May 8, 2026",
    readTime: "5 Min read",
    views: "421 Views",
    image: "/images/newsroom/cannes.jpg",
    href: "/newsroom/cannes",
  },
  {
    id: "outdoor-to-outcomes",
    title: "Outdoor to Outcomes: Lemma’s Vision for Omnichannel Growth",
    date: "April 30, 2026",
    readTime: "4 Min read",
    views: "912 Views",
    image: "/images/newsroom/outdoor-to-outcomes.jpg",
    href: "/newsroom/outdoor-to-outcomes",
  },
  {
    id: "key-hires",
    title: "Lemma Announces Key Hires Across Delhi, Bengaluru & Mumbai",
    date: "April 16, 2026",
    readTime: "3 Min read",
    views: "540 Views",
    image: "/images/newsroom/key-hires.jpg",
    href: "/newsroom/key-hires",
  },
];

export const newsroomFaqs: FaqItem[] = faqs;
