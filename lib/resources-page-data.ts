export type ResourceArticle = {
  id: string;
  slug: string;
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
    slug: "ai-ctv-advertising-2026",
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
    slug: "lemma-continuum-partnership",
    category: "Newsroom",
    title: "Lemma and Continuum Media Expand Partnership",
    date: "May 11, 2025",
    readTime: "6 Min read",
    views: "1059 Views",
    image: "/images/resources/lemma-continuum-partnership.png",
    accent: "#f82d89",
    tone: "light",
    href: "/newsroom/continuum",
  },
  {
    id: "tt-3",
    slug: "ctv-2025-beyond-the-screen",
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
    slug: "festive-dooh-touchpoint-cluster",
    category: "Blogs",
    title: "Strategic Placement: The Top 5 Festive DOOH Touchpoint Cluster",
    date: "August 5, 2025",
    readTime: "7 Min read",
    views: "56 Views",
    image: "/images/resources/dooh-festive-placement.png",
    accent: "#f05a27",
    tone: "dark",
    href: "/resources/blogs/festive-dooh-touchpoint-cluster",
  },
  {
    id: "blog-2",
    slug: "oac-2026-new-metrics-ooh",
    category: "Blogs",
    title: "OAC 2026: Beyond Impressions — The New Metrics for OOH Success",
    date: "July 23, 2025",
    readTime: "4 Min read",
    views: "564 Views",
    image: "/images/resources/ooh-new-metrics.png",
    accent: "#008fdb",
    tone: "light",
    href: "/resources/blogs/oac-2026-new-metrics-ooh",
  },
  {
    id: "blog-3",
    slug: "investing-in-context",
    category: "Blogs",
    title: "Stop Buying Real Estate, Start Investing in Context",
    date: "June 24, 2025",
    readTime: "5 Min read",
    views: "440 Views",
    image: "/images/resources/investing-in-context.png",
    accent: "#a684ff",
    tone: "dark",
    href: "/resources/blogs/investing-in-context",
  },
];

export const allBlogs: ResourceArticle[] = [
  ...blogs,
  {
    id: "blog-4",
    slug: "infocomm-2026-av-innovation",
    category: "Blogs",
    title: "InfoComm 2026 | The Global Stage for Professional AV Innovation",
    date: "June 10, 2025",
    readTime: "6 Min read",
    views: "312 Views",
    image: "/images/resources/ai-ctv-advertising.png",
    accent: "#008fdb",
    tone: "dark",
    href: "/resources/blogs/infocomm-2026-av-innovation",
  },
  {
    id: "blog-5",
    slug: "dooh-creative-rules",
    category: "Blogs",
    title: "DOOH Creative Rules: What Brands Need to Know",
    date: "May 28, 2025",
    readTime: "5 Min read",
    views: "189 Views",
    image: "/images/resources/ctv-beyond-screen.png",
    accent: "#f82d89",
    tone: "dark",
    href: "/resources/blogs/dooh-creative-rules",
  },
  {
    id: "blog-6",
    slug: "programmatic-dooh-battle-the-blast",
    category: "Blogs",
    title: "Why Programmatic DOOH Could Battle the Blast",
    date: "May 15, 2025",
    readTime: "8 Min read",
    views: "725 Views",
    image: "/images/resources/lemma-continuum-partnership.png",
    accent: "#009352",
    tone: "light",
    href: "/resources/blogs/programmatic-dooh-battle-the-blast",
  },
  {
    id: "blog-7",
    slug: "compliance-to-scale-playbook",
    category: "Blogs",
    title: "Playbook: From Compliance to Scale",
    date: "April 20, 2025",
    readTime: "7 Min read",
    views: "410 Views",
    image: "/images/resources/mixi-programmatic-dooh.png",
    accent: "#f05a27",
    tone: "dark",
    href: "/resources/blogs/compliance-to-scale-playbook",
  },
  {
    id: "blog-8",
    slug: "iab-tech-lab-summit-2026",
    category: "Blogs",
    title: "IAB Tech Lab Summit 2026: Signals a New Era of Agentic Advertising",
    date: "March 15, 2025",
    readTime: "7 Min read",
    views: "72 Views",
    image: "/images/blog/iab.png",
    accent: "#008fdb",
    tone: "dark",
    href: "/resources/blogs/iab-tech-lab-summit-2026",
  },
  {
    id: "blog-9",
    slug: "why-performance-campaigns-fail-to-scale",
    category: "Blogs",
    title: "WHY MOST PERFORMANCE CAMPAIGNS FAIL TO SCALE",
    date: "February 28, 2025",
    readTime: "8 Min read",
    views: "124 Views",
    image: "/images/blog/performance.png",
    accent: "#a684ff",
    tone: "dark",
    href: "/resources/blogs/why-performance-campaigns-fail-to-scale",
  },
];

export const newsroom: ResourceArticle[] = [
  {
    id: "nr-1",
    slug: "doceree-lemma-supply-partnership",
    category: "Newsroom",
    title: "Doceree and Lemma Forge Exclusive Supply Partnership",
    date: "August 1, 2025",
    readTime: "1 Min read",
    views: "63 Views",
    image: "/images/resources/doceree-lemma-partnership.png",
    accent: "#f82d89",
    tone: "light",
    href: "/newsroom/doceree",
  },
  {
    id: "nr-2",
    slug: "mixi-programmatic-dooh",
    category: "Newsroom",
    title: "MIXI Inc. Taps Programmatic DOOH to Reach Audiences",
    date: "June 3, 2025",
    readTime: "4 Min read",
    views: "5075 Views",
    image: "/images/resources/mixi-programmatic-dooh.png",
    accent: "#008fdb",
    tone: "dark",
    href: "/newsroom/mixi",
  },
  {
    id: "nr-3",
    slug: "lemma-continuum-expand-partnership",
    category: "Newsroom",
    title: "Lemma and Continuum Media Expand Partnership",
    date: "May 11, 2025",
    readTime: "6 Min read",
    views: "1059 Views",
    image: "/images/resources/lemma-continuum-expand.png",
    accent: "#009352",
    tone: "light",
    href: "/newsroom/continuum",
  },
];

export const caseStudiesList: ResourceArticle[] = [
  {
    id: "cs-1",
    slug: "etihad-new-year-sale",
    category: "Case Study",
    title: "Etihad Airways Runs Multi-Country New Year Sale",
    date: "January 8, 2025",
    readTime: "1 Min read",
    views: "2310 Views",
    image: "/images/resources/etihad-new-year-sale.png",
    accent: "#f05a27",
    tone: "dark",
    href: "/case-studies/etihad-new-year-sale",
  },
  {
    id: "cs-2",
    slug: "mg-motors-ev-campaign",
    category: "Case Study",
    title: "MG Motors Amplifies Brand Presence with Its EV Campaign",
    date: "December 29, 2024",
    readTime: "1 Min read",
    views: "2022 Views",
    image: "/images/resources/mg-motors-ev.png",
    accent: "#008fdb",
    tone: "light",
    href: "/case-studies/mg-motors",
  },
  {
    id: "cs-3",
    slug: "lenovo-smarter-ai-campaign",
    category: "Case Study",
    title: "Lenovo Promoted Their 'Smarter AI for You' Campaign",
    date: "October 22, 2024",
    readTime: "2 Min read",
    views: "3100 Views",
    image: "/images/resources/lenovo-smarter-ai.png",
    accent: "#a684ff",
    tone: "dark",
    href: "/case-studies/lenovo-smarter-ai",
  },
];

export type BlogBodySection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "blockquote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPostDetail = {
  slug: string;
  category: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  accent: string;
  tags: string[];
  body: BlogBodySection[];
};

export const blogDetails: Record<string, BlogPostDetail> = {
  "festive-dooh-touchpoint-cluster": {
    slug: "festive-dooh-touchpoint-cluster",
    category: "Blogs",
    title: "Strategic Placement: The Top 5 Festive DOOH Touchpoint Cluster",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "August 5, 2025",
    readTime: "7 Min read",
    views: "56 Views",
    image: "/images/resources/dooh-festive-placement.png",
    accent: "#f05a27",
    tags: ["DOOH", "Festive Marketing", "Strategy"],
    body: [
      {
        type: "paragraph",
        text: "Festive seasons are the biggest revenue windows for brands — and the most competitive. With shopper footfall concentrating into key districts, malls, and transit hubs, the difference between a campaign that converts and one that gets ignored often comes down to where and when your message appears.",
      },
      {
        type: "heading",
        text: "Why DOOH Became the Festive Backbone",
      },
      {
        type: "paragraph",
        text: "Digital out-of-home offers something static billboards never could: the ability to change creative by time of day, weather, and audience density. During festivals, screens near high-footfall retail clusters can rotate between promotional urgency in the morning, gifting moments in the afternoon, and last-minute offers at night.",
      },
      {
        type: "paragraph",
        text: "The result is a channel that behaves less like media and more like a live retail assistant — showing the right brand message at the exact moment a shopper is making a purchase decision.",
      },
      {
        type: "blockquote",
        text: "The winning festive campaigns of the last two years treated DOOH as a real-time channel, not a static display. Frequency and placement mattered less than relevance by the hour.",
      },
      {
        type: "heading",
        text: "The Top 5 Festive Touchpoint Clusters",
      },
      {
        type: "list",
        items: [
          "High-street retail corridors built for impact and size",
          "Premium malls and entertainment centres for dwell time",
          "Metro and airport transit hubs for frequency and guidance",
          "QSR and food courts for impulse and gifting moments",
          "Residential gateway screens for evening relevance",
        ],
      },
      {
        type: "paragraph",
        text: "Our analysis across earlier festive campaigns points to five recurring clusters. Each cluster needs a distinct creative strategy and flight plan.",
      },
      {
        type: "paragraph",
        text: "Retail corridors favour impact and size, transit hubs favour frequency and guidance, while residential gateways favour relevance and evening-driven messaging. Brands that mapped their festive funnel across these clusters consistently beat single-format festive plans.",
      },
      {
        type: "heading",
        text: "Making Placement a Strategy, Not an Afterthought",
      },
      {
        type: "paragraph",
        text: "Placement should be decided before creative is finalised, not after. Medium, format, and screen density determine what creative can say. Start with the journey you want shoppers to take, pick the touchpoints that surround it, and then design the message for each environment.",
      },
    ],
  },
  "oac-2026-new-metrics-ooh": {
    slug: "oac-2026-new-metrics-ooh",
    category: "Blogs",
    title: "OAC 2026: Beyond Impressions — The New Metrics for OOH Success",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "July 23, 2025",
    readTime: "4 Min read",
    views: "564 Views",
    image: "/images/resources/ooh-new-metrics.png",
    accent: "#008fdb",
    tags: ["OOH", "Attribution", "Measurement"],
    body: [
      {
        type: "paragraph",
        text: "For decades, out-of-home advertising was measured in opportunities to see. Impressions told you how many people could have noticed a billboard — not whether the message moved anyone. At OAC 2026, the conversation shifted decisively toward outcome-based measurement.",
      },
      {
        type: "heading",
        text: "Impressions Are a Starting Point, Not a KPI",
      },
      {
        type: "paragraph",
        text: "Exposure data remains the foundation, but modern OOH success is being defined by downstream actions: footfall visits, app opens, search lifts, and attributable conversions. Linking screen exposure to signed-in devices and visit data has turned OOH from a reach channel into a measurable performance channel.",
      },
      {
        type: "blockquote",
        text: "The question is no longer 'how many people saw it?' but 'how many people acted because of it?'",
      },
      {
        type: "heading",
        text: "The Metrics Now in Focus",
      },
      {
        type: "list",
        items: [
          "Footfall uplift versus a clean baseline",
          "Exposure-to-visit lift by screen and daypart",
          "Search and social conversation spikes after flights",
          "Incremental store visits inside a defined window",
        ],
      },
      {
        type: "paragraph",
        text: "Progressive measurement partners now offer continuous validation against brand-lift baselines rather than one-off studies.",
      },
      {
        type: "paragraph",
        text: "The practical implication for brands: request measurement-ready creative flights, structured data feeds, and conversion windows aligned with actual dwell behaviour. The channel is ready to be held accountable — plan it accordingly.",
      },
    ],
  },
  "investing-in-context": {
    slug: "investing-in-context",
    category: "Blogs",
    title: "Stop Buying Real Estate, Start Investing in Context",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "June 24, 2025",
    readTime: "5 Min read",
    views: "440 Views",
    image: "/images/resources/investing-in-context.png",
    accent: "#a684ff",
    tags: ["Contextual Advertising", "DOOH", "Strategy"],
    body: [
      {
        type: "paragraph",
        text: "Out-of-home media has traditionally been bought like real estate: location, size, and visibility. But audiences no longer pass a single screen at a single moment — they move through environments, each with its own mood, purpose, and receptivity to messaging.",
      },
      {
        type: "heading",
        text: "Context Is the New Location",
      },
      {
        type: "paragraph",
        text: "A coffee-hungry commuter at a railway station, a family entertaining the kids at a mall food court, a decision-maker at a business district — the same screen can mean very different things to each. Contextual DOOH pairs screen data with audience behaviour signals to serve creative that matches the moment.",
      },
      {
        type: "blockquote",
        text: "A screen is a medium. Surroundings are the message.",
      },
      {
        type: "heading",
        text: "What Smart Buyers Do Differently",
      },
      {
        type: "paragraph",
        text: "They buy by audience journey and intent moments, not just by physical footprint. They automate creative so the message matches time-of-day, weather, and live events. And they treat context as a targeting signal with its own budget line — not a bonus.",
      },
      {
        type: "paragraph",
        text: "Investing in context means investing in relevance. And relevance remains the cheapest attention you can buy.",
      },
    ],
  },
  "infocomm-2026-av-innovation": {
    slug: "infocomm-2026-av-innovation",
    category: "Blogs",
    title: "InfoComm 2026 | The Global Stage for Professional AV Innovation",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "June 10, 2025",
    readTime: "6 Min read",
    views: "312 Views",
    image: "/images/resources/ai-ctv-advertising.png",
    accent: "#008fdb",
    tags: ["InfoComm", "AV", "Digital Signage"],
    body: [
      {
        type: "paragraph",
        text: "InfoComm is the world's largest professional AV showcase, and 2026 arrived with a clear signal: screens have stopped being delivery vehicles and started being intelligent surfaces.",
      },
      {
        type: "heading",
        text: "Digital Signage Becomes Media Infrastructure",
      },
      {
        type: "paragraph",
        text: "The show floor made it obvious that display hardware has become commoditised. The differentiation now lives in software: audience detection, dynamic content engines, remote orchestration, and programmatic connectivity that turns any screen into addressable media inventory.",
      },
      {
        type: "paragraph",
        text: "For media owners, this is the moment to evaluate whether their signage estate can participate in programmatic demand — not just scheduled playback.",
      },
      {
        type: "blockquote",
        text: "The AV industry's next growth curve isn't in brighter displays. It's in connected, measurable, addressable screens.",
      },
      {
        type: "heading",
        text: "What to Watch Next",
      },
      {
        type: "paragraph",
        text: "Keep an eye on unified platform adoptions, AI-driven creative generation for signage, and connectivity standards that make onboarding a new screen into a media network a matter of minutes.",
      },
    ],
  },
  "dooh-creative-rules": {
    slug: "dooh-creative-rules",
    category: "Blogs",
    title: "DOOH Creative Rules: What Brands Need to Know",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "May 28, 2025",
    readTime: "5 Min read",
    views: "189 Views",
    image: "/images/resources/ctv-beyond-screen.png",
    accent: "#f82d89",
    tags: ["DOOH", "Creative", "Best Practices"],
    body: [
      {
        type: "paragraph",
        text: "DOOH creative fails differently than digital creative. At a glance time of three to eight seconds, there is no room for a slow build. If a passerby can't understand your message in one glance, the impression is wasted.",
      },
      {
        type: "heading",
        text: "The 3-Second Rule",
      },
      {
        type: "list",
        items: [
          "One idea per screen — no slow build",
          "Headlines under ten words",
          "Brand marks in a corner, not the centre",
          "Contrast that survives glare, rain, and bright sunlight",
        ],
      },
      {
        type: "paragraph",
        text: "One idea per screen, one visual per message, and headlines under ten words perform consistently. Brand marks belong in a corner, not the center, and contrast must survive glare, rain, and bright sunlight.",
      },
      {
        type: "heading",
        text: "Designing for Live Context",
      },
      {
        type: "paragraph",
        text: "The medium's real advantage is variance. Creative rules for DOOH increasingly include dynamic logic: weather-triggered copy, time-based offers, countdowns, and contextual swaps that keep a single placement feeling fresh for weeks.",
      },
      {
        type: "blockquote",
        text: "A DOOH campaign should be treated as a system of creative variants, not a single artwork.",
      },
      {
        type: "paragraph",
        text: "Build a master concept, define the variable inputs, and let automation handle the thousands of permutations. That is how brands win DOOH at scale.",
      },
    ],
  },
  "programmatic-dooh-battle-the-blast": {
    slug: "programmatic-dooh-battle-the-blast",
    category: "Blogs",
    title: "Why Programmatic DOOH Could Battle the Blast",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "May 15, 2025",
    readTime: "8 Min read",
    views: "725 Views",
    image: "/images/resources/lemma-continuum-partnership.png",
    accent: "#009352",
    tags: ["Programmatic", "DOOH", "AdTech"],
    body: [
      {
        type: "paragraph",
        text: "Broadcast-style 'blast' campaigns — one creative, everywhere, all at once — are the historical default of outdoor advertising. Programmatic DOOH is engineered to replace that playbook with precision, and the shift is accelerating.",
      },
      {
        type: "heading",
        text: "From Blast to Build",
      },
      {
        type: "paragraph",
        text: "With programmatic supply, buyers transact on DOOH inventory through the same demand-side infrastructure they use for mobile and CTV. Frequency, pacing, and creative rotation are automated; audiences and geofences define inventory instead of lists of screens.",
      },
      {
        type: "heading",
        text: "Where Blast Still Wins — and Where It Loses",
      },
      {
        type: "paragraph",
        text: "Blast campaigns still dominate for pure mass-reach moments like product launches and sponsorship flares. But they leak budget on low-receptivity impressions and cannot react to performance data mid-flight.",
      },
      {
        type: "blockquote",
        text: "Programmatic DOOH doesn't kill the blast. It makes blast one button among many in a responsive media plan.",
      },
      {
        type: "paragraph",
        text: "The brands that switch to programmatic DOOH gain daily optimization, measurable outcomes, and the ability to scale winning screens while pausing losers — in real time.",
      },
    ],
  },
  "compliance-to-scale-playbook": {
    slug: "compliance-to-scale-playbook",
    category: "Blogs",
    title: "Playbook: From Compliance to Scale",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "April 20, 2025",
    readTime: "7 Min read",
    views: "410 Views",
    image: "/images/resources/mixi-programmatic-dooh.png",
    accent: "#f05a27",
    tags: ["Playbook", "Growth", "Advertising Ops"],
    body: [
      {
        type: "paragraph",
        text: "Most advertising growth initiatives die in compliance. Before you can scale a channel, you must clear the barriers of brand safety, data governance, and contract-level operational review. This playbook is about moving through that gate quickly — not fighting it.",
      },
      {
        type: "heading",
        text: "Phase 1: Build a Compliance Baseline",
      },
      {
        type: "paragraph",
        text: "Document where every impression can appear, what data flows are permitted, and who approves creative variations. A clean baseline converts future approvals from a negotiation into a formality.",
      },
      {
        type: "heading",
        text: "Phase 2: Pilot With a Limited Flight",
      },
      {
        type: "paragraph",
        text: "Run a small, fully instrumented campaign whose sole purpose is evidence: measurable lift, clean attribution, and a post-mortem nobody is embarrassed by. This phase buys you internal confidence more than external reach.",
      },
      {
        type: "blockquote",
        text: "Scale is what happens after trust is earned, not before.",
      },
      {
        type: "heading",
        text: "Phase 3: Systematise and Scale",
      },
      {
        type: "paragraph",
        text: "Turn the pilot into templates: creative specs, measurement dashboards, approval checklists, and inventory shortlists. Once the system exists, scaling a new market is a repeatable operation rather than a one-off project.",
      },
    ],
  },
  "iab-tech-lab-summit-2026": {
    slug: "iab-tech-lab-summit-2026",
    category: "Blogs",
    title: "IAB Tech Lab Summit 2026: Signals a New Era of Agentic Advertising",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "March 15, 2025",
    readTime: "7 Min read",
    views: "72 Views",
    image: "/images/blog/iab.png",
    accent: "#008fdb",
    tags: ["IAB", "AI", "Agentic Advertising"],
    body: [
      {
        type: "paragraph",
        text: "At the IAB Tech Lab Summit 2026, the industry consensus was hard to miss: advertising is entering an agentic era, where AI systems negotiate, assemble, and optimise campaigns with minimal human intervention at the tactical level.",
      },
      {
        type: "heading",
        text: "Interoperability Becomes the Bottleneck",
      },
      {
        type: "paragraph",
        text: "Agents can only transact where machine-readable standards exist. The summit's most pivotal discussions centred on shared identity, creative metadata, and measurement interoperability — the plumbing that lets one brand's AI manage inventory across dozens of platforms.",
      },
      {
        type: "blockquote",
        text: "The winning platform of the next decade is the one that makes itself the most agent-friendly.",
      },
      {
        type: "heading",
        text: "What Brands Should Prepare For",
      },
      {
        type: "paragraph",
        text: "Expect procurement of media to become conversational: campaigns described as outcomes, with AI handling routing and optimisation. Tactical roles shift from manual execution to strategy, governance, and exception-handling.",
      },
      {
        type: "paragraph",
        text: "Early movers that structure their data and creative metadata today will be the ones their agents can actually work with tomorrow.",
      },
    ],
  },
  "ooh-media-conference-2026": {
    slug: "ooh-media-conference-2026",
    category: "Blogs",
    title: "OOH Media Conference 2026: What the \"Human Medium\" Means",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "May 8, 2026",
    readTime: "6 Min read",
    views: "204 Views",
    image: "/images/blog/ooh.png",
    accent: "#008fdb",
    tags: ["OOH", "Human Medium", "DOOH"],
    body: [
      {
        type: "paragraph",
        text: "At the OOH Media Conference 2026, one idea kept resurfacing across every keynote and panel: out-of-home is being rediscovered as the human medium. In a world saturated with scrollable feeds and skippable ads, OOH stands apart because it lives in the physical world — where people actually are.",
      },
      {
        type: "heading",
        text: "Why OOH Feels Different Again",
      },
      {
        type: "paragraph",
        text: "Digital channels chase attention through devices; OOH earns it through context. A screen on a high street catches a commuter mid-morning, a transit ad travels with a daily route, and a mall placement arrives exactly when a family is deciding what to do next. That physical presence gives OOH a trust premium no feed can replicate.",
      },
      {
        type: "blockquote",
        text: "Out-of-home is the last channel that meets people as people — not as users, sessions, or cookies.",
      },
      {
        type: "heading",
        text: "The Human Medium, Measured",
      },
      {
        type: "paragraph",
        text: "The conference made clear that 'human' no longer means unmeasurable. Mobility data, footfall analytics, and exposure-to-action studies now connect outdoor moments to real-world behaviour — proving that a medium built on humanity can still be held accountable to outcomes.",
      },
      {
        type: "paragraph",
        text: "For brands, the message was simple: bring storytelling, context, and measurement together, and OOH stops being an awareness play and becomes a full-funnel medium that moves people — literally and figuratively.",
      },
    ],
  },
  "why-performance-campaigns-fail-to-scale": {
    slug: "why-performance-campaigns-fail-to-scale",
    category: "Blogs",
    title: "Why Most Performance Campaigns Fail to Scale",
    author: "Lemma Editorial Team",
    authorRole: "Content Team, Lemma Technologies",
    date: "February 28, 2025",
    readTime: "8 Min read",
    views: "124 Views",
    image: "/images/blog/performance.png",
    accent: "#a684ff",
    tags: ["Performance Marketing", "Scale", "Attribution"],
    body: [
      {
        type: "paragraph",
        text: "Performance campaigns love to win small and lose big. Plenty of campaigns prove they can acquire at a target cost in a narrow set of segments — and then fail the moment you try to spend double. The failure isn't in the creative. It's in the mechanics of scale.",
      },
      {
        type: "heading",
        text: "The Ceiling of Narrow Re-Evaluation",
      },
      {
        type: "paragraph",
        text: "When every optimisation decision favours yesterday's winners, spend concentrates into a shrinking pool of inventory and audience. Costs rise, delivery stalls, and the 'scalability wall' appears exactly as budgets increase.",
      },
      {
        type: "heading",
        text: "Attribution That Can't See the Upper Funnel",
      },
      {
        type: "paragraph",
        text: "Performance media also struggles to scale when measurement only credits last-click digital touches. Out-of-home, CTV, and awareness layers get no credit, budgets stay skewed, and the mix can never be rebalanced toward the channels actually driving demand.",
      },
      {
        type: "blockquote",
        text: "A campaign that can only prove its value in one attribution window cannot justify itself in any other.",
      },
      {
        type: "heading",
        text: "The Fix: Build Scale Into the Plan",
      },
      {
        type: "paragraph",
        text: "Audience expansion paths, inventory diversification, cross-channel attribution, and creative systems with real headroom — these need to be engineered before the campaign begins. Scale is a planning discipline, not an optimisation afterthought.",
      },
    ],
  },
};

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