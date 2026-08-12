import type {
  AiFeature,
  BlogPost,
  CaseStudy,
  ClientLogo,
  FaqItem,
  MegaMenuConfig,
  NavItem,
  Product,
  Solution,
  Stat,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Who We Are?", href: "/about", hasDropdown: true, megaMenu: "who-we-are" },
  { label: "What We Do?", href: "#products", hasDropdown: true, megaMenu: "what-we-do" },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Contact Us", href: "/contact-us" },
];

export const megaMenus: Record<"who-we-are" | "what-we-do", MegaMenuConfig> = {
  "who-we-are": {
    id: "who-we-are",
    columns: [
      {
        id: "company",
        label: "Company",
        items: [
          {
            id: "about",
            title: "About Us",
            description: "Our story & mission",
            href: "/about",
          },
          {
            id: "company",
            title: "Company",
            description: "Leadership & values",
            href: "/about#values",
          },
          {
            id: "careers",
            title: "Careers",
            description: "Join the team",
            href: "/careers",
          },
        ],
      },
      {
        id: "connect",
        label: "Connect",
        items: [
          {
            id: "events",
            title: "Events",
            description: "Where to meet us",
            href: "/about#community",
          },
          {
            id: "contact",
            title: "Contact Us",
            description: "Get in touch",
            href: "/contact-us",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "See it live",
      title: "Meet the team behind Lemma.",
      description: "A global crew shaping the future of omnichannel ad-tech.",
      ctaLabel: "Request a Demo",
      ctaHref: "/request-demo",
      image: "/images/banner_homepage.png",
    },
  },
  "what-we-do": {
    id: "what-we-do",
    columns: [
      {
        id: "products",
        label: "Products",
        items: [
          {
            id: "integral",
            title: "Integral",
            description: "Full-funnel platform",
            href: "/products/integral",
            iconColor: "#009352",
            iconSymbol: "∫",
          },
          {
            id: "delta",
            title: "Delta",
            description: "Demand-side platform",
            href: "/products/delta",
            iconColor: "#f82d89",
            iconSymbol: "Δ",
          },
          {
            id: "sigma",
            title: "Sigma",
            description: "Supply-side platform",
            href: "/products/sigma",
            iconColor: "#008fdb",
            iconSymbol: "Σ",
          },
          {
            id: "phi",
            title: "Phi",
            description: "Content management",
            href: "/products/phi",
            iconColor: "#74be44",
            iconSymbol: "φ",
          },
          {
            id: "infibid",
            title: "Infibid",
            description: "Header bidding",
            href: "#products",
            iconColor: "#f05a27",
            iconSymbol: "∞",
          },
        ],
      },
      {
        id: "solutions",
        label: "Solutions",
        items: [
          {
            id: "brands",
            title: "For Brands & Advertisers",
            description: "Omnichannel activation",
            href: "/solutions/brands-advertisers",
          },
          {
            id: "owners",
            title: "For Media Owners",
            description: "Yield optimization",
            href: "/solutions/media-owners",
          },
          {
            id: "agencies",
            title: "For Agencies",
            description: "Cross-screen buying",
            href: "/solutions/agencies",
          },
          {
            id: "publishers",
            title: "For Publishers",
            description: "Programmatic monetization",
            href: "/solutions/publishers",
          },
          {
            id: "operators",
            title: "For Network Operators",
            description: "DOOH control plane",
            href: "/solutions/network-operators",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "See it live",
      title: "Turn impressions into outcomes.",
      description: "Get a tailored walkthrough of the Lemma stack with our team.",
      ctaLabel: "Request a Demo",
      ctaHref: "/request-demo",
      image: "/images/solutions/brands-color.png",
    },
  },
};

export const heroStats: Stat[] = [
  { value: "3.5M", numericValue: 3.5, decimals: 1, suffix: "M", label: "SCREENS GLOBALLY" },
  { value: "40+", numericValue: 40, suffix: "+", label: "Markets worldwide" },
  { value: "5", numericValue: 5, label: "Native products" },
];

export const products: Product[] = [
  {
    id: "integral",
    name: "Integral",
    description:
      "Activate, retarget, and measure every OOH impression with precision—backed by deep audience analytics and attribution.",
    logo: "/images/products/integral.svg",
    href: "/products/integral",
  },
  {
    id: "delta",
    name: "Delta",
    description:
      "Scale DOOH and CTV campaigns with automated bidding, real-time optimization, and maximum reach.",
    logo: "/images/products/delta.svg",
    href: "/products/delta",
  },
  {
    id: "sigma",
    name: "Sigma",
    description:
      "Transparent SSP designed to maximize inventory yield. Unlock greater revenue opportunities with real-time insights, demand access, and complete transparency.",
    logo: "/images/products/sigma.svg",
    href: "/products/sigma",
  },
  {
    id: "phi",
    name: "Phi",
    description:
      "Plan, schedule, and deliver DOOH content seamlessly. Manage content distribution across screens, locations, and formats from a single streamlined platform.",
    logo: "/images/products/phi.svg",
    href: "/products/phi",
  },
  {
    id: "infibid",
    name: "Infibid",
    description:
      "Maximize revenue through server-side header bidding. Increase fill rates and improve monetization performance with advanced auction management technology.",
    logo: "/images/products/infibid.svg",
    href: "#products",
  },
];

export const solutions: Solution[] = [
  {
    id: "brands",
    number: "01",
    eyebrow: "Mass media, measured",
    title: "For Brands & Advertisers",
    description:
      "Run campaigns that don't end at the impression. Retarget high-intent audiences across personal devices and close the loop with attribution.",
    features: ["Omnichannel activation", "Cross-screen retargeting", "Outcome attribution"],
    image: "/images/solutions/brands-color.png",
    href: "/solutions/brands-advertisers",
  },
  {
    id: "owners",
    number: "02",
    eyebrow: "Inventory, unlocked",
    title: "For Media Owners",
    description:
      "Open your inventory to global demand without losing control. Programmatic transparency, premium yield, and direct relationships at your fingertips.",
    features: ["Yield optimization", "Global demand access", "Inventory control"],
    image: "/images/solutions/owners-color.png",
    href: "/solutions/media-owners",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "azorte",
    brand: "Azorte",
    category: "Retail",
    year: "2025",
    index: "01 / 06",
    description: "Fashion moments that move footfall.",
    image: "/images/case-studies/azorte.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/xmAOz-ACaNA?si=vQU3dsmU8SgihXy1",
  },
  {
    id: "burger-king",
    brand: "Burger King",
    category: "QSR",
    year: "2025",
    index: "02 / 06",
    description: "15-minute express delivery, on every screen.",
    image: "/images/case-studies/burger-king.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/P2uxStZDZ_4?si=Zu9Gu_6nMQZfKfEb",
  },
  {
    id: "schwarzkopf",
    brand: "Schwarzkopf",
    category: "Beauty",
    year: "2024",
    index: "03 / 06",
    description: "Dynamic DOOH for Bonacure.",
    image: "/images/case-studies/schwarzkopf.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/aTrdGgKb0IA?si=bnUN3AUa3ag4OPlz",
  },
  {
    id: "oneplus",
    brand: "OnePlus",
    category: "Tech",
    year: "2024",
    index: "04 / 06",
    description: "Launch moments across premium screens.",
    image: "/images/case-studies/oneplus.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/cctyfmhFbbU?si=MqR7JPaK8nNpmoct",
  },
  {
    id: "etihad",
    brand: "Etihad Airways",
    category: "Travel",
    year: "2023",
    index: "05 / 06",
    description: "Airport-to-device journey orchestration.",
    image: "/images/case-studies/etihad.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/7Fi_UbKeKPo?si=lISBefuQtR5qE4_v",
  },
  {
    id: "burger-king-2",
    brand: "Burger King",
    category: "QSR",
    year: "2024",
    index: "06 / 06",
    description: "Omnichannel recall that converts to footfall.",
    image: "/images/case-studies/burger-king.png",
    href: "#case-studies",
    videoUrl: "https://youtu.be/P2uxStZDZ_4?si=Zu9Gu_6nMQZfKfEb",
  },
];

export const aiFeatures: AiFeature[] = [
  {
    id: "audience",
    title: "Predictive Audience AI",
    description:
      "Deep learning models that anticipate audience intent across DOOH, CTV, mobile and web for sharper targeting.",
    bullets: ["Look-alike Audience Engines", "Intent Probability Scoring"],
    icon: "/icons/ai-audience.svg",
    accent: "#1581c5",
    accentSoft: "rgba(21, 129, 197, 0.1)",
  },
  {
    id: "creative",
    title: "Generative Creative Studio",
    description:
      "On-the-fly creative variants tuned to context, weather, time-of-day and inventory — at campaign scale.",
    bullets: ["Dynamic Copy Generation", "Context-Aware Visual Assembly"],
    icon: "/icons/ai-creative.svg",
    accent: "#ed2e80",
    accentSoft: "rgba(237, 46, 128, 0.1)",
  },
  {
    id: "bidding",
    title: "Bidding Intelligence",
    description:
      "Reinforcement-learning bidders that balance reach, frequency and outcome KPIs in real time.",
    bullets: ["Real-time Bid Shading", "Outcome-Optimized Pacing"],
    icon: "/icons/ai-bidding.svg",
    accent: "#f05a27",
    accentSoft: "rgba(240, 90, 39, 0.1)",
  },
  {
    id: "attribution",
    title: "Attribution Intelligence",
    description:
      "Multi-touch attribution that connects outdoor exposure to digital actions and offline conversions.",
    bullets: ["Cross-channel Pathing", "Incrementality Modeling"],
    icon: "/icons/ai-audience.svg",
    accent: "#74be44",
    accentSoft: "rgba(116, 190, 68, 0.1)",
  },
  {
    id: "safety",
    title: "Brand Safety AI",
    description:
      "Automated brand suitability scoring across DOOH environments, CTV inventory and adjacent contexts.",
    bullets: ["Context Classification", "Suitability Guardrails"],
    icon: "/icons/ai-creative.svg",
    accent: "#a684ff",
    accentSoft: "rgba(142, 81, 255, 0.1)",
  },
  {
    id: "yield",
    title: "Yield Optimization",
    description:
      "Supply-side models that maximize fill rate and eCPM while protecting premium inventory floors.",
    bullets: ["Dynamic Floor Pricing", "Demand Prioritization"],
    icon: "/icons/ai-bidding.svg",
    accent: "#009352",
    accentSoft: "rgba(0, 147, 82, 0.1)",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "iab",
    title: "IAB Tech Lab Summit 2026 Signals a New Era of Agentic Advertising",
    date: "May 22, 2026",
    readTime: "7 Min read",
    views: "72 Views",
    image: "/images/blog/iab.png",
    href: "#blog",
  },
  {
    id: "performance",
    title: "Why Most Performance Campaigns Fail to Scale",
    date: "May 18, 2026",
    readTime: "8 Min read",
    views: "124 Views",
    image: "/images/blog/performance.png",
    href: "#blog",
  },
  {
    id: "ooh",
    title: 'OOH Media Conference 2026: What the "Human Medium" Means',
    date: "May 8, 2026",
    readTime: "6 Min read",
    views: "204 Views",
    image: "/images/blog/ooh.png",
    href: "#blog",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "what-is-lemma",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "who-can-use",
    question: "Who can use Lemma's platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "integral",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "delta",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "sigma",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent SSP that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "phi",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
];

export const channels = ["CTV", "Mobile", "Web", "Audio", "In-Game", "Programmatic"] as const;

export const clientLogos: ClientLogo[] = [
  { id: "burger-king", name: "Burger King", src: "/images/logos/burger-king.svg", width: 120, height: 36 },
  { id: "azorte", name: "AZORTE", src: "/images/logos/azorte.svg", width: 120, height: 36 },
  { id: "hsbc", name: "HSBC", src: "/images/logos/hsbc.svg", width: 100, height: 36 },
  { id: "oneplus", name: "OnePlus", src: "/images/logos/oneplus.svg", width: 110, height: 36 },
  { id: "schwarzkopf", name: "Schwarzkopf", src: "/images/logos/schwarzkopf.svg", width: 120, height: 36 },
  { id: "etihad", name: "Etihad", src: "/images/logos/etihad.svg", width: 120, height: 36 },
  { id: "pepsi", name: "Pepsi", src: "/images/logos/pepsi.svg", width: 90, height: 36 },
  { id: "samsung", name: "Samsung", src: "/images/logos/samsung.svg", width: 140, height: 26 },
  { id: "nestle", name: "Nestlé", src: "/images/logos/nestle.svg", width: 125, height: 36 },
  { id: "dabur", name: "Dabur", src: "/images/logos/dabur.svg", width: 110, height: 36 },
  { id: "amazon-prime-video", name: "Amazon Prime Video", src: "/images/logos/amazon-prime-video.svg", width: 150, height: 36 },
];

export const footerLinks = {
  products: [
    { label: "Integral", href: "/products/integral" },
    { label: "Delta", href: "/products/delta" },
    { label: "Sigma", href: "/#products" },
    { label: "Phi", href: "/products/phi" },
    { label: "Infibid", href: "/#products" },
  ],
  solutions: [
    { label: "For Brands & Advertisers", href: "/solutions/brands-advertisers" },
    { label: "For Media Owners", href: "/solutions/media-owners" },
    { label: "For Agencies", href: "/solutions/agencies" },
    { label: "For Publishers", href: "/solutions/publishers" },
    { label: "For Network Operators", href: "/solutions/network-operators" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact-us" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const;
