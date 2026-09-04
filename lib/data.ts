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
  { label: "Resources", href: "/resources", hasDropdown: true, megaMenu: "resources" },
  { label: "Contact Us", href: "/contact-us" },
];

export const megaMenus: Record<"who-we-are" | "what-we-do" | "resources", MegaMenuConfig> = {
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
            iconColor: "#008fdb",
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
        ],
      },
      {
        id: "solutions",
        label: "Solutions",
        items: [
          {
            id: "brands",
            title: "For Outcome Driven Marketers & Agencies",
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
            id: "demand-partners",
            title: "For Demand Partners",
            description: "CTV + Cross Screen Activation",
            href: "/solutions/demand-partners",
          },
          {
            id: "publishers",
            title: "For Publishers",
            description: "Programmatic monetization",
            href: "/solutions/publishers",
          },
          // {
          //   id: "operators",
          //   title: "For Network Operators",
          //   description: "DOOH control plane",
          //   href: "/solutions/network-operators",
          // },
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
  resources: {
    id: "resources",
    columns: [
      {
        id: "explore",
        label: "Explore",
        items: [
          {
            id: "newsroom",
            title: "Newsroom",
            description: "News & announcements",
            href: "/newsroom",
          },
          {
            id: "case-studies",
            title: "Case Studies",
            description: "Campaigns that performed",
            href: "/case-studies",
          },
          {
            id: "blogs",
            title: "Blogs",
            description: "Expert insights & analysis",
            href: "/resources/blogs",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Selected work",
      title: "Campaigns that turned outdoor into outcomes.",
      description: "Explore how brands activate and measure across DOOH, CTV, and beyond with Lemma.",
      ctaLabel: "View case studies",
      ctaHref: "/case-studies",
      image: "/images/case-studies/etihad-new-year-sale.jpg",
    },
  },
};

export const heroStats: Stat[] = [
  { value: "3.5M", numericValue: 3.5, decimals: 1, suffix: "M", label: "SCREENS GLOBALLY" },
  { value: "40+", numericValue: 40, suffix: "+", label: "Markets worldwide" },
  { value: "4", numericValue: 4, label: "Native products" },
];

export const products: Product[] = [
  {
    id: "integral",
    name: "Integral",
    description:
      "Connect real-world visibility to measurable digital results (ROI) with full-funnel activation, retargeting, and attribution.",
    logo: "/images/products/integral.svg",
    logoColor: "/images/products/integral-hero-logo.svg",
    href: "/products/integral",
  },
  {
    id: "delta",
    name: "Delta",
    description:
      "Scale programmatic advertising across DOOH and CTV with real-time bidding, automated performance controls, and maximum reach.",
    logo: "/images/products/delta.svg",
    logoColor: "/images/products/delta-color.svg",
    href: "/products/delta",
  },
  {
    id: "sigma",
    name: "Sigma",
    description:
      "Connect outdoor and CTV inventory to global buyers and optimize monetization with transparent, real-time reporting.",
    logo: "/images/products/sigma.svg",
    logoColor: "/images/products/sigma-color.svg",
    href: "/products/sigma",
  },
  {
    id: "phi",
    name: "Phi",
    description:
      "Effortlessly plan, schedule, and deliver dynamic DOOH content across all screens, networks, and formats from one central platform.",
    logo: "/images/products/phi.svg",
    logoColor: "/images/products/phi-hero-logo.svg",
    href: "/products/phi",
  },
];

export const solutions: Solution[] = [
  {
    id: "brands",
    number: "01",
    eyebrow: "Mass media, measured",
    title: "For Outcome Driven Marketers & Agencies",
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
    features: ["Yield optimization", "Global demand access", "Media Inventory Management"],
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
    id: "planning",
    title: "AI-Powered Planning",
    description: "Smarter planning with Adtech AI for maximum impact.",
    highlight: "Adtech AI",
    bullets: [
      "Audience & market intelligence",
      "Budget allocation across channels",
      "Scenario modeling & forecasting",
    ],
    icon: "/icons/ai-audience.svg",
    accent: "#008FDB",
    accentSoft: "#E8F4FC",
  },
  {
    id: "activation",
    title: "Intelligent Activation",
    description: "Programmatic AI to deliver the right ads to the right audience.",
    highlight: "Programmatic AI",
    bullets: [
      "AI in media buying",
      "Real-time bidding & optimization",
      "Omnichannel AI reach across DOOH, CTV, Web, Mobile & Social",
    ],
    icon: "/icons/ai-creative.svg",
    accent: "#7C6FFF",
    accentSoft: "#F0ECFF",
  },
  {
    id: "optimization",
    title: "AI-Driven Optimization",
    description: "Continuous learning to improve ads with AI performance.",
    highlight: "ads with AI",
    bullets: [
      "Predictive performance models",
      "Creative & audience optimization",
      "Automated bid & budget controls",
    ],
    icon: "/icons/ai-bidding.svg",
    accent: "#E84A8C",
    accentSoft: "#FDE8F2",
  },
  {
    id: "measurement",
    title: "Measurement & Growth",
    description: "Full-funnel measurement to prove impact and drive growth.",
    highlight: "Full-funnel",
    bullets: [
      "Incrementality & attribution",
      "Cross-channel insights",
      "ROI & outcome optimization",
    ],
    icon: "/icons/ai-measurement.svg",
    accent: "#00B4C4",
    accentSoft: "#E5F8FA",
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
    href: "/resources/blogs/iab-tech-lab-summit-2026",
  },
  {
    id: "performance",
    title: "Why Most Performance Campaigns Fail to Scale",
    date: "May 18, 2026",
    readTime: "8 Min read",
    views: "124 Views",
    image: "/images/blog/performance.png",
    href: "/resources/blogs/why-performance-campaigns-fail-to-scale",
  },
  {
    id: "ooh",
    title: 'OOH Media Conference 2026: What the "Human Medium" Means',
    date: "May 8, 2026",
    readTime: "6 Min read",
    views: "204 Views",
    image: "/images/blog/ooh.png",
    href: "/resources/blogs/ooh-media-conference-2026",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "what-is-lemma",
    question: "What is Lemma?",
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
  {
    id: "lemma-cms",
    question: "How Lemma CMS helps screen owners?",
    answer:
      "Lemma CMS (Phi) gives screen owners a free content management system to plan, schedule, and deliver creatives across screens, locations, and formats from one platform with full control over what goes live.",
  },
];

export const channels = [
  "Programmatic Digital OOH",
  "CTV",
  "Mobile",
  "Audio",
  "In game",
  "Web",
  "Retail",
] as const;

export const clientLogos: ClientLogo[] = [
  { id: "burger-king", name: "Burger King", src: "/images/logos/burger-king.svg", width: 33, height: 36 },
  { id: "azorte", name: "AZORTE", src: "/images/logos/azorte.svg", width: 120, height: 36 },
  { id: "hsbc", name: "HSBC", src: "/images/logos/hsbc.svg", width: 100, height: 36 },
  { id: "oneplus", name: "OnePlus", src: "/images/logos/oneplus.svg", width: 110, height: 36 },
  { id: "schwarzkopf", name: "Schwarzkopf", src: "/images/logos/schwarzkopf.svg", width: 120, height: 36 },
  { id: "etihad", name: "Etihad", src: "/images/logos/etihad.svg", width: 120, height: 36 },
  { id: "pepsi", name: "Pepsi", src: "/images/logos/pepsi.svg", width: 90, height: 36 },
  { id: "samsung", name: "Samsung", src: "/images/logos/samsung.svg", width: 140, height: 26 },
  { id: "nestle", name: "Nestlé", src: "/images/logos/nestle.svg", width: 125, height: 36 },
  { id: "dabur", name: "Dabur", src: "/images/logos/dabur.svg", width: 40, height: 36 },
  { id: "amazon-prime-video", name: "Amazon Prime Video", src: "/images/logos/amazon-prime-video.svg", width: 112, height: 36 },
];

export const footerLinks = {
  products: [
    { label: "Integral", href: "/products/integral" },
    { label: "Delta", href: "/products/delta" },
    { label: "Sigma", href: "/#products" },
    { label: "Phi", href: "/products/phi" },
  ],
  solutions: [
    { label: "For Outcome Driven Marketers & Agencies", href: "/solutions/brands-advertisers" },
    { label: "For Media Owners", href: "/solutions/media-owners" },
    { label: "For Demand Partners", href: "/solutions/demand-partners" },
    { label: "For Publishers", href: "/solutions/publishers" },
    // { label: "For Network Operators", href: "/solutions/network-operators" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Cookies", href: "#" },
  ],
} as const;
