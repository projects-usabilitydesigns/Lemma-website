import {
  defaultArticleCtas,
  type ArticleDetail,
} from "@/lib/article-detail";
import { newsroomArticles } from "@/lib/newsroom-data";

export const newsroomDetails: Record<string, ArticleDetail> = {
  doceree: {
    slug: "doceree",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Partnerships"],
    title: "Doceree and Lemma Forge Exclusive Supply Partnership",
    excerpt:
      "Doceree and Lemma have formed an exclusive supply partnership to bring healthcare-grade audience intelligence into programmatic DOOH — connecting HCP-relevant environments with measurable outdoor inventory.",
    author: "Lemma Editorial Team",
    date: "August 3, 2026",
    readTime: "7 Min read",
    image: "/images/newsroom/doceree.jpg",
    tags: ["Partnerships", "Healthcare", "Programmatic DOOH"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "A new supply path for healthcare media",
      },
      {
        type: "paragraph",
        text: "The partnership gives Doceree buyers access to Lemma's omnichannel inventory with the same healthcare-safe controls they already use in digital. For Lemma, it opens a premium demand source that values context, compliance, and proof of exposure — not just cheap reach.",
      },
      {
        type: "takeaway",
        text: "Healthcare media only scales on outdoor when supply is exclusive enough to protect brand safety and open enough to measure. This deal is built around both.",
      },
      {
        type: "heading",
        text: "What buyers can activate",
      },
      {
        type: "paragraph",
        text: "Campaigns can now pair HCP and patient-journey signals with DOOH screens near clinics, pharmacies, and high-intent transit nodes. Creative can be sequenced by time of day and location type, then retargeted into CTV and mobile through Lemma Integral.",
      },
      {
        type: "list",
        items: [
          "Healthcare-safe inventory with exclusive supply terms",
          "Location and daypart targeting around care journeys",
          "Exposure data that can feed digital retargeting",
        ],
      },
      {
        type: "heading",
        text: "Why it matters now",
      },
      {
        type: "paragraph",
        text: "Point-of-care media is being asked to prove outcomes the same way paid social and CTV already do. Connecting Doceree's healthcare graph to Lemma's outdoor stack is a direct answer to that pressure — and a template for other vertical supply deals.",
      },
    ],
  },
  mixi: {
    slug: "mixi",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Campaigns"],
    title: "MIXI Inc. Taps Programmatic DOOH to Reach Live Audiences",
    excerpt:
      "MIXI Inc. is using programmatic DOOH to meet fans in the physical world — around stadiums, transit, and entertainment districts — with creative that can change as the live moment changes.",
    author: "Lemma Editorial Team",
    date: "June 3, 2026",
    readTime: "6 Min read",
    image: "/images/newsroom/mixi-strike-world.jpg",
    tags: ["Programmatic DOOH", "Entertainment", "Campaigns"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "Live culture, live inventory",
      },
      {
        type: "paragraph",
        text: "Entertainment brands used to lock outdoor creative weeks in advance. MIXI's programmatic approach lets screens around match days and fan districts rotate with scores, countdowns, and offer windows — without a new insertion order every time the story changes.",
      },
      {
        type: "takeaway",
        text: "Programmatic DOOH is how entertainment brands keep outdoor as current as the event itself.",
      },
      {
        type: "heading",
        text: "The activation model",
      },
      {
        type: "paragraph",
        text: "Inventory was bought against audience and proximity rather than a fixed list of panels. Frequency caps protected over-exposure near venues, while CTV extensions carried the same story into living rooms after the event.",
      },
      {
        type: "list",
        items: [
          "Proximity targeting around venues and fan corridors",
          "Dynamic creative tied to live moments",
          "CTV and mobile extensions after the event",
        ],
      },
      {
        type: "heading",
        text: "What other brands can copy",
      },
      {
        type: "paragraph",
        text: "The playbook is not limited to sports. Any brand with a live calendar — launches, festivals, travel peaks — can treat outdoor as a real-time channel instead of a static backdrop.",
      },
    ],
  },
  continuum: {
    slug: "continuum",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Partnerships"],
    title: "Lemma and Continuum Media Expand Partnership",
    excerpt:
      "Lemma and Continuum Media are expanding their partnership to bring more premium outdoor inventory into programmatic buying — with cleaner supply paths and shared measurement.",
    author: "Lemma Editorial Team",
    date: "May 11, 2026",
    readTime: "6 Min read",
    image: "/images/newsroom/continuum.jpg",
    tags: ["Partnerships", "Media Owners", "Programmatic"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "More inventory, fewer hops",
      },
      {
        type: "paragraph",
        text: "The expanded deal puts additional Continuum screens into Lemma's demand stack, reducing the number of intermediaries between buyer and panel. That means faster activation, clearer fee transparency, and a measurement feed both sides can trust.",
      },
      {
        type: "takeaway",
        text: "Premium outdoor only becomes programmatic when the supply path is short enough to protect both yield and accountability.",
      },
      {
        type: "heading",
        text: "What media owners gain",
      },
      {
        type: "paragraph",
        text: "Continuum keeps control over floor prices and brand suitability while opening Lemma's global demand. Buyers get packaged access to quality inventory instead of assembling it screen by screen.",
      },
      {
        type: "list",
        items: [
          "Direct supply into Lemma demand",
          "Shared exposure and delivery reporting",
          "Brand-suitability controls retained by the owner",
        ],
      },
      {
        type: "heading",
        text: "A pattern for the market",
      },
      {
        type: "paragraph",
        text: "Owner-platform partnerships like this are how OOH catches up to the rest of digital: not by flooding the open exchange, but by connecting premium supply to buyers who will pay for quality.",
      },
    ],
  },
  "social-beat": {
    slug: "social-beat",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Campaigns"],
    title: "Social Beat Delivers Context-Aware pDOOH Ads",
    excerpt:
      "Social Beat is running context-aware programmatic DOOH with Lemma — matching creative to place, time, and audience mood instead of blasting one film across every screen.",
    author: "Lemma Editorial Team",
    date: "May 27, 2026",
    readTime: "8 Min read",
    image: "/images/newsroom/social-beat.jpg",
    tags: ["Contextual", "Programmatic DOOH", "Creative"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "Context as the brief",
      },
      {
        type: "paragraph",
        text: "Rather than buying a city, Social Beat bought moments: commute screens with short claims, mall screens with longer product stories, and evening residential gateways with offer-led creative. Each variant was triggered by location type and daypart.",
      },
      {
        type: "takeaway",
        text: "Context-aware DOOH is not more creative for its own sake. It is how a single campaign stays relevant across a dozen environments.",
      },
      {
        type: "heading",
        text: "How the system ran",
      },
      {
        type: "paragraph",
        text: "Lemma's stack handled inventory selection, creative rotation, and exposure logging. Social Beat's team focused on the narrative system — a master idea with rules for how it should change by place.",
      },
      {
        type: "list",
        items: [
          "Creative variants mapped to environment types",
          "Daypart and location triggers, not manual swaps",
          "A single measurement view across all screens",
        ],
      },
      {
        type: "heading",
        text: "The agency takeaway",
      },
      {
        type: "paragraph",
        text: "Agencies that treat DOOH as a contextual product — not a print buy with a screen — can deliver the same intelligence their clients already expect from digital, without giving up the physical impact of outdoor.",
      },
    ],
  },
  "integral-launch": {
    slug: "integral-launch",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Product"],
    title: "Lemma Launches AI-Powered Platform",
    excerpt:
      "Lemma has launched Integral, an AI-powered full-funnel layer that measures, retargets, and attributes outdoor impressions with the same rigor as digital.",
    author: "Lemma Editorial Team",
    date: "May 22, 2026",
    readTime: "7 Min read",
    image: "/images/newsroom/integral-launch.jpg",
    tags: ["Product", "Integral", "Measurement"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "Outdoor, finally in the funnel",
      },
      {
        type: "paragraph",
        text: "Integral connects screen exposure to downstream action — visits, app activity, and conversions — so outdoor can be planned and optimized as a performance input, not only an awareness line.",
      },
      {
        type: "takeaway",
        text: "If you cannot retarget an outdoor impression, you cannot claim it as part of a modern funnel. Integral is built to close that gap.",
      },
      {
        type: "heading",
        text: "What teams can do on day one",
      },
      {
        type: "paragraph",
        text: "Buyers can log exposures, build audiences from those exposures, and activate them across CTV, mobile, and additional DOOH. Reporting sits in one place, so media, creative, and analytics teams argue from the same numbers.",
      },
      {
        type: "list",
        items: [
          "Exposure-based audience building from DOOH",
          "Cross-channel retargeting into CTV and mobile",
          "Attribution that includes outdoor, not just last click",
        ],
      },
      {
        type: "heading",
        text: "Why we built it",
      },
      {
        type: "paragraph",
        text: "Brands were already buying outdoor. They were not getting outdoor-quality data. Integral is Lemma's answer to that mismatch — AI-assisted, measurement-first, and designed for teams that have to defend every dollar.",
      },
    ],
  },
  "bill-nolte": {
    slug: "bill-nolte",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Company"],
    title: "Lemma Continues US Team Expansion; Onboards Bill Nolte",
    excerpt:
      "Lemma is expanding its US leadership team with the appointment of Bill Nolte, strengthening relationships with brands, agencies, and media owners across the market.",
    author: "Lemma Editorial Team",
    date: "May 18, 2026",
    readTime: "8 Min read",
    image: "/images/newsroom/bill-nolte.jpg",
    tags: ["Company", "Leadership", "United States"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "Building the US bench",
      },
      {
        type: "paragraph",
        text: "Lemma's US expansion is about proximity to buyers and owners who want outdoor to behave like the rest of their stack. Bill Nolte joins to help those conversations move from pilots to always-on programs.",
      },
      {
        type: "takeaway",
        text: "Product only scales in a market when the people selling it have lived the buyer's problem. This hire is about that fluency.",
      },
      {
        type: "heading",
        text: "What clients should expect",
      },
      {
        type: "paragraph",
        text: "More on-ground support for planning, measurement design, and marketplace introductions. US teams will have a direct line into Lemma product, not a relay through another region.",
      },
      {
        type: "list",
        items: [
          "Senior US coverage for brands and agencies",
          "Closer collaboration with media owners",
          "Faster path from first conversation to live campaign",
        ],
      },
      {
        type: "heading",
        text: "A longer US chapter",
      },
      {
        type: "paragraph",
        text: "Nolte's appointment follows other key hires across Lemma's global teams. The company is staffing around the markets where omnichannel outdoor is already being asked to prove outcomes.",
      },
    ],
  },
  cannes: {
    slug: "cannes",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Insights"],
    title: "Stop Buying Real Estate, Start Investing in Context",
    excerpt:
      "At Cannes, Lemma argued that outdoor should be bought as context — audience, moment, and environment — not as a collection of expensive locations.",
    author: "Lemma Editorial Team",
    date: "May 8, 2026",
    readTime: "5 Min read",
    image: "/images/newsroom/cannes.jpg",
    tags: ["Cannes", "Contextual", "Strategy"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "The real-estate habit",
      },
      {
        type: "paragraph",
        text: "OOH buying still often starts with a map and a rate card. That habit made sense when screens were static and measurement stopped at opportunity-to-see. It does not make sense when the same panel can mean three different things before lunch.",
      },
      {
        type: "takeaway",
        text: "A screen is inventory. The surroundings are the media. Buy the second, not just the first.",
      },
      {
        type: "heading",
        text: "What investing in context looks like",
      },
      {
        type: "paragraph",
        text: "It looks like audience journeys, dayparts, weather, and live events as targeting inputs. It looks like creative systems, not single artworks. And it looks like measurement that asks whether the moment moved someone, not only whether they could have seen the board.",
      },
      {
        type: "list",
        items: [
          "Plan by journey and intent, not only by location",
          "Let creative change with the environment",
          "Hold outdoor to outcome questions, not just OTS",
        ],
      },
      {
        type: "heading",
        text: "The Cannes conversation",
      },
      {
        type: "paragraph",
        text: "The industry is ready for this shift. The remaining work is operational: data, standards, and buying desks willing to retire the real-estate reflex.",
      },
    ],
  },
  "outdoor-to-outcomes": {
    slug: "outdoor-to-outcomes",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Vision"],
    title: "Outdoor to Outcomes: Lemma's Vision for Omnichannel Growth",
    excerpt:
      "Lemma's thesis is simple: outdoor should be as measurable, retargetable, and accountable as every other channel in the mix — or it will keep losing budget to channels that are.",
    author: "Lemma Editorial Team",
    date: "April 30, 2026",
    readTime: "4 Min read",
    image: "/images/newsroom/outdoor-to-outcomes.jpg",
    tags: ["Vision", "Omnichannel", "Measurement"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "The gap we are closing",
      },
      {
        type: "paragraph",
        text: "Brands already believe outdoor works. They struggle to prove it next to CTV, search, and social. Lemma's platforms — Delta, Integral, Sigma, and Phi — exist to close that proof gap without flattening outdoor into another digital banner.",
      },
      {
        type: "takeaway",
        text: "Outdoor to outcomes is not a slogan. It is a buying standard: every impression should be able to show what happened next.",
      },
      {
        type: "heading",
        text: "How the stack fits together",
      },
      {
        type: "paragraph",
        text: "Delta activates demand. Integral measures and retargets. Sigma and Phi help owners yield and manage supply. Together they let a campaign move from a screen in the street to an action in the funnel without losing the thread.",
      },
      {
        type: "list",
        items: [
          "Demand, supply, and measurement in one system",
          "Outdoor impressions that can be retargeted",
          "Reporting that CFOs and brand teams can both use",
        ],
      },
      {
        type: "heading",
        text: "What growth looks like from here",
      },
      {
        type: "paragraph",
        text: "Growth is more markets, more owners on clean supply paths, and more brands willing to give outdoor a performance brief. That is the company we are building.",
      },
    ],
  },
  "key-hires": {
    slug: "key-hires",
    kind: "newsroom",
    category: "Newsroom",
    categories: ["Newsroom", "Company"],
    title: "Lemma Announces Key Hires Across Delhi, Bengaluru & Mumbai",
    excerpt:
      "Lemma has announced key hires across Delhi, Bengaluru, and Mumbai as it scales client coverage and marketplace operations in India.",
    author: "Lemma Editorial Team",
    date: "April 16, 2026",
    readTime: "3 Min read",
    image: "/images/newsroom/key-hires.jpg",
    tags: ["Company", "India", "Team"],
    cta: defaultArticleCtas.newsroom,
    body: [
      {
        type: "heading",
        text: "Covering India's media capitals",
      },
      {
        type: "paragraph",
        text: "Delhi, Bengaluru, and Mumbai sit at the center of how India buys and sells media. Staffing those cities is how Lemma stays close to agencies, brands, and owners as programmatic DOOH moves from experiment to plan-line.",
      },
      {
        type: "takeaway",
        text: "India's outdoor market will not be won from one office. It will be won by teams who can sit with buyers and owners in the cities where decisions are made.",
      },
      {
        type: "heading",
        text: "Where the new roles sit",
      },
      {
        type: "paragraph",
        text: "The hires span client leadership, marketplace, and operations — the three functions that turn a platform into a reliable campaign. Clients should see faster response times and more local fluency on inventory and measurement.",
      },
      {
        type: "list",
        items: [
          "Stronger coverage in Delhi, Bengaluru, and Mumbai",
          "Roles across clients, marketplace, and operations",
          "A closer loop between local campaigns and product",
        ],
      },
      {
        type: "heading",
        text: "Hiring as a product signal",
      },
      {
        type: "paragraph",
        text: "When a platform company hires in-market, it is saying the product is ready to be used at scale. That is the signal we want Indian buyers to hear.",
      },
    ],
  },
};

export function getNewsroomDetail(slug: string) {
  return newsroomDetails[slug] ?? null;
}

export function getRelatedNewsroom(slug: string) {
  return newsroomArticles
    .filter((article) => article.id !== slug)
    .slice(0, 3)
    .map((article) => ({
      title: article.title,
      href: `/newsroom/${article.id}`,
      image: article.image,
    }));
}
