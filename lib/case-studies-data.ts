import type { FaqItem } from "@/types";
import { faqs } from "@/lib/data";

export type CaseStudyArticle = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  href: string;
};

export const caseStudyArticles: CaseStudyArticle[] = [
  {
    id: "etihad-new-year-sale",
    title: "Etihad Airways Runs Multi Country ‘New Year Sale’…",
    date: "January 9, 2025",
    readTime: "1 Min read",
    views: "3168 Views",
    image: "/images/case-studies/etihad-new-year-sale.jpg",
    href: "/case-studies/etihad-new-year-sale",
  },
  {
    id: "mg-motors",
    title: "MG Motors Amplifies Brand Presence with It’s…",
    date: "December 29, 2024",
    readTime: "1 Min read",
    views: "3053 Views",
    image: "/images/case-studies/mg-motors.jpg",
    href: "/case-studies/mg-motors",
  },
  {
    id: "lenovo-smarter-ai",
    title: "Lenovo promoted their “Smarter AI for you campaign…",
    date: "October 22, 2024",
    readTime: "2 Min read",
    views: "3100 Views",
    image: "/images/case-studies/lenovo-smarter-ai.jpg",
    href: "/case-studies/lenovo-smarter-ai",
  },
  {
    id: "otrivin",
    title: "Otrivin launches “Superior Mist Spray” leveraging…",
    date: "October 11, 2024",
    readTime: "1 Min read",
    views: "3168 Views",
    image: "/images/case-studies/otrivin.jpg",
    href: "/case-studies/otrivin",
  },
  {
    id: "amazon-fresh",
    title: "Amazon Fresh effectively engages with frequent…",
    date: "August 22, 2024",
    readTime: "1 Min read",
    views: "2946 Views",
    image: "/images/case-studies/amazon-fresh.jpg",
    href: "/case-studies/amazon-fresh",
  },
  {
    id: "etihad-flight-deals",
    title: "Etihad Presents their Flight Deals programmatically…",
    date: "August 21, 2024",
    readTime: "1 Min read",
    views: "2779 Views",
    image: "/images/case-studies/etihad-flight-deals.jpg",
    href: "/case-studies/etihad-flight-deals",
  },
  {
    id: "etihad-contextual",
    title: "Etihad’s Contextual DOOH Campaign reaches audience…",
    date: "June 10, 2024",
    readTime: "3 Min read",
    views: "2723 Views",
    image: "/images/case-studies/etihad-contextual.jpg",
    href: "/case-studies/etihad-contextual",
  },
  {
    id: "skp-bonacure",
    title: "SKP Bonacure blends Real Time data and Dynamic…",
    date: "May 22, 2024",
    readTime: "4 Min read",
    views: "1988 Views",
    image: "/images/case-studies/skp-bonacure.jpg",
    href: "/case-studies/skp-bonacure",
  },
  {
    id: "myntra",
    title: "Myntra programmatically Launches their ‘Tren…",
    date: "May 8, 2024",
    readTime: "2 Min read",
    views: "1842 Views",
    image: "/images/case-studies/myntra.jpg",
    href: "/case-studies/myntra",
  },
];

export const caseStudyFaqs: FaqItem[] = faqs;
