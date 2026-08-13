export type ResourceArticle = {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  accent: string;
  tone: "dark" | "light" | "brand";
  href: string;
};

export const resourcesHero = {
  label: "Resources",
  title: "LEMMA is making news everywhere",
  description:
    "Stay informed with the latest from Lemma Tech. Expert analysis, behind-the-scenes culture, industry events, and expert insights shaping the future of digital advertising.",
  primaryCta: { label: "Read Our Stories", href: "#top-trending" },
  orbit: {
    centerLabel: "LEMMA",
    newsroom: {
      label: "Newsroom",
      description: "Breaking stories from our world to yours.",
      accent: "#f82d89",
    },
    blogs: {
      label: "Blogs",
      description: "Insights drive growth.",
      accent: "#008fdb",
    },
    caseStudies: {
      label: "Case Studies",
      description: "Strategic intelligence and analytics.",
      accent: "#009352",
    },
  },
} as const;

export const topTrending: ResourceArticle[] = [
  {
    id: "tt-1",
    category: "Blogs",
    title: "How AI is Transforming CTV Advertising in 2026",
    date: "January 28, 2025",
    readTime: "5 Min read",
    views: "2000 Views",
    image: "/images/resources/ai-ctv-advertising.png",
    accent: "#008fdb",
    tone: "dark",
    href: "#",
  },
  {
    id: "tt-2",
    category: "Newsroom",
    title: "Lemma and Continuum Media Expand Partnership",
    date: "May 11, 2025",
    readTime: "6 Min read",
    views: "1059 Views",
    image: "/images/resources/lemma-continuum-partnership.png",
    accent: "#f82d89",
    tone: "light",
    href: "#",
  },
  {
    id: "tt-3",
    category: "Blogs",
    title: "CTV in 2025: What Awaits Beyond the Screen",
    date: "November 25, 2024",
    readTime: "7 Min read",
    views: "278 Views",
    image: "/images/resources/ctv-beyond-screen.png",
    accent: "#009352",
    tone: "dark",
    href: "#",
  },
];

export const blogs: ResourceArticle[] = [
  {
    id: "blog-1",
    category: "Blogs",
    title: "Strategic Placement: The Top 5 Festive DOOH Touchpoint Cluster",
    date: "August 5, 2025",
    readTime: "7 Min read",
    views: "56 Views",
    image: "/images/resources/dooh-festive-placement.png",
    accent: "#f05a27",
    tone: "dark",
    href: "#",
  },
  {
    id: "blog-2",
    category: "Blogs",
    title: "OAC 2026: Beyond Impressions — The New Metrics for OOH Success",
    date: "July 23, 2025",
    readTime: "4 Min read",
    views: "564 Views",
    image: "/images/resources/ooh-new-metrics.png",
    accent: "#008fdb",
    tone: "light",
    href: "#",
  },
  {
    id: "blog-3",
    category: "Blogs",
    title: "Stop Buying Real Estate, Start Investing in Context",
    date: "June 24, 2025",
    readTime: "5 Min read",
    views: "440 Views",
    image: "/images/resources/investing-in-context.png",
    accent: "#a684ff",
    tone: "dark",
    href: "#",
  },
];

export const allBlogs: ResourceArticle[] = [
  ...blogs,
  {
    id: "blog-4",
    category: "Blogs",
    title: "InfoComm 2026 | The Global Stage for Professional AV Innovation",
    date: "June 10, 2025",
    readTime: "6 Min read",
    views: "312 Views",
    image: "/images/resources/ai-ctv-advertising.png",
    accent: "#008fdb",
    tone: "dark",
    href: "#",
  },
  {
    id: "blog-5",
    category: "Blogs",
    title: "DOOH Creative Rules: What Brands Need to Know",
    date: "May 28, 2025",
    readTime: "5 Min read",
    views: "189 Views",
    image: "/images/resources/ctv-beyond-screen.png",
    accent: "#f82d89",
    tone: "dark",
    href: "#",
  },
  {
    id: "blog-6",
    category: "Blogs",
    title: "Why Programmatic DOOH Could Battle the Blast",
    date: "May 15, 2025",
    readTime: "8 Min read",
    views: "725 Views",
    image: "/images/resources/lemma-continuum-partnership.png",
    accent: "#009352",
    tone: "light",
    href: "#",
  },
  {
    id: "blog-7",
    category: "Blogs",
    title: "Playbook: From Compliance to Scale",
    date: "April 20, 2025",
    readTime: "7 Min read",
    views: "410 Views",
    image: "/images/resources/mixi-programmatic-dooh.png",
    accent: "#f05a27",
    tone: "dark",
    href: "#",
  },
  {
    id: "blog-8",
    category: "Blogs",
    title: "IAB Tech Lab Summit 2026: Signals a New Era of Agentic Advertising",
    date: "March 15, 2025",
    readTime: "7 Min read",
    views: "72 Views",
    image: "/images/blog/iab.png",
    accent: "#008fdb",
    tone: "dark",
    href: "#",
  },
  {
    id: "blog-9",
    category: "Blogs",
    title: "WHY MOST PERFORMANCE CAMPAIGNS FAIL TO SCALE",
    date: "February 28, 2025",
    readTime: "8 Min read",
    views: "124 Views",
    image: "/images/blog/performance.png",
    accent: "#a684ff",
    tone: "dark",
    href: "#",
  },
];

export const newsroom: ResourceArticle[] = [
  {
    id: "nr-1",
    category: "Newsroom",
    title: "Doceree and Lemma Forge Exclusive Supply Partnership",
    date: "August 1, 2025",
    readTime: "1 Min read",
    views: "63 Views",
    image: "/images/resources/doceree-lemma-partnership.png",
    accent: "#f82d89",
    tone: "light",
    href: "#",
  },
  {
    id: "nr-2",
    category: "Newsroom",
    title: "MIXI Inc. Taps Programmatic DOOH to Reach Audiences",
    date: "June 3, 2025",
    readTime: "4 Min read",
    views: "5075 Views",
    image: "/images/resources/mixi-programmatic-dooh.png",
    accent: "#008fdb",
    tone: "dark",
    href: "#",
  },
  {
    id: "nr-3",
    category: "Newsroom",
    title: "Lemma and Continuum Media Expand Partnership",
    date: "May 11, 2025",
    readTime: "6 Min read",
    views: "1059 Views",
    image: "/images/resources/lemma-continuum-expand.png",
    accent: "#009352",
    tone: "light",
    href: "#",
  },
];

export const caseStudiesList: ResourceArticle[] = [
  {
    id: "cs-1",
    category: "Case Study",
    title: "Etihad Airways Runs Multi-Country New Year Sale",
    date: "January 8, 2025",
    readTime: "1 Min read",
    views: "2310 Views",
    image: "/images/resources/etihad-new-year-sale.png",
    accent: "#f05a27",
    tone: "dark",
    href: "#",
  },
  {
    id: "cs-2",
    category: "Case Study",
    title: "MG Motors Amplifies Brand Presence with Its EV Campaign",
    date: "December 29, 2024",
    readTime: "1 Min read",
    views: "2022 Views",
    image: "/images/resources/mg-motors-ev.png",
    accent: "#008fdb",
    tone: "light",
    href: "#",
  },
  {
    id: "cs-3",
    category: "Case Study",
    title: "Lenovo Promoted Their 'Smarter AI for You' Campaign",
    date: "October 22, 2024",
    readTime: "2 Min read",
    views: "3100 Views",
    image: "/images/resources/lenovo-smarter-ai.png",
    accent: "#a684ff",
    tone: "dark",
    href: "#",
  },
];

export const resourcesFaqs = [
  {
    id: "r1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, Mobile, and Audio channels.",
  },
  {
    id: "r2",
    question: "Who can use Lemma's platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns — from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "r3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "r4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "r5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent Supply Side Platform (SSP) that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "r6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi is Lemma's media owner platform that streamlines inventory management, pricing, and yield optimization — giving publishers full control over their ad supply.",
  },
] as const;

export const resourcesFaqTitle = "Helpful Answers Before You Get Started";