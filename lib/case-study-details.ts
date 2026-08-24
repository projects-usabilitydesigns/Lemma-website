import {
  defaultArticleCtas,
  type ArticleDetail,
} from "@/lib/article-detail";
import { caseStudyArticles } from "@/lib/case-studies-data";

export const caseStudyDetails: Record<string, ArticleDetail> = {
  "etihad-new-year-sale": {
    slug: "etihad-new-year-sale",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Travel"],
    title: "Etihad Airways Runs a Multi-Country New Year Sale",
    excerpt:
      "Etihad activated a multi-country New Year sale on programmatic DOOH, coordinating creative, markets, and measurement from one plan instead of a patchwork of local buys.",
    author: "Lemma Editorial Team",
    date: "January 9, 2025",
    readTime: "1 Min read",
    image: "/images/case-studies/etihad-new-year-sale.jpg",
    tags: ["Travel", "DOOH", "Always-on Retail"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "A sale that runs across countries cannot look like a collection of disconnected posters. Etihad needed one commercial story, local relevance, and a way to see which markets and screens were actually moving interest.",
      },
      {
        type: "takeaway",
        text: "Multi-market outdoor works when the offer is global and the context is local — and both are controlled from the same campaign.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Lemma packaged premium inventory across key origin markets, with creative variants for route, language, and daypart. Delivery and exposure sat in one dashboard so the team could shift weight toward screens that were working.",
      },
      {
        type: "list",
        items: [
          "One sale narrative across multiple countries",
          "Local creative variants without separate insertion orders",
          "A single view of delivery and exposure",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The sale launched as a coordinated outdoor moment rather than a staggered set of local bookings — with enough measurement to inform the next retail window, not only decorate this one.",
      },
    ],
  },
  "mg-motors": {
    slug: "mg-motors",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Automotive"],
    title: "MG Motors Amplifies Brand Presence with Its EV Campaign",
    excerpt:
      "MG Motors used programmatic DOOH to put its EV story in high-intent urban corridors — near dealerships, tech districts, and commute routes — instead of spraying a single film citywide.",
    author: "Lemma Editorial Team",
    date: "December 29, 2024",
    readTime: "1 Min read",
    image: "/images/case-studies/mg-motors.jpg",
    tags: ["Automotive", "EV", "Brand"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "EV consideration is still won in the physical world: on the road, near showrooms, and in the neighborhoods where buyers already imagine ownership. MG needed presence in those places without wasting spend on low-receptivity inventory.",
      },
      {
        type: "takeaway",
        text: "Automotive outdoor is most valuable when it behaves like a dealer-adjacent channel, not a generic city takeover.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Screens were selected around commute patterns and dealer catchments. Creative stayed bold and simple — one idea per frame — with dayparting that favoured evening consideration windows.",
      },
      {
        type: "list",
        items: [
          "Inventory clustered around dealer and commute catchments",
          "High-contrast creative built for a three-second read",
          "Dayparts aligned to consideration, not just traffic peaks",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "MG got a visible urban footprint that felt intentional. The campaign gave the brand a repeatable template for the next EV push rather than a one-off burst of posters.",
      },
    ],
  },
  "lenovo-smarter-ai": {
    slug: "lenovo-smarter-ai",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Technology"],
    title: "Lenovo Promoted Their “Smarter AI for You” Campaign",
    excerpt:
      "Lenovo brought “Smarter AI for You” into the physical world with programmatic DOOH, placing the story where tech buyers already move — airports, business districts, and premium retail.",
    author: "Lemma Editorial Team",
    date: "October 22, 2024",
    readTime: "2 Min read",
    image: "/images/case-studies/lenovo-smarter-ai.jpg",
    tags: ["Technology", "AI", "Brand"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "An AI product story is easy to lose in feeds. Lenovo needed outdoor that could carry a premium, intelligent brand without becoming a wall of spec sheets.",
      },
      {
        type: "takeaway",
        text: "Tech outdoor works when it sells a feeling of capability in one glance, then lets digital finish the spec conversation.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Lemma concentrated spend on environments with a high density of business and creator audiences. Creative stayed visual and short, with a QR and search lift plan sitting underneath the boards.",
      },
      {
        type: "list",
        items: [
          "Premium environments over mass reach",
          "A single-minded visual idea per screen",
          "Digital follow-through for people who wanted the detail",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The campaign gave Lenovo a physical proof-point for a digital-first story — useful in markets where AI claims need to feel present, not only targeted.",
      },
    ],
  },
  otrivin: {
    slug: "otrivin",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "FMCG"],
    title: "Otrivin Launches “Superior Mist Spray” on Contextual DOOH",
    excerpt:
      "Otrivin launched Superior Mist Spray with contextual DOOH — leaning into weather, commute discomfort, and pharmacy-adjacent screens rather than a generic health burst.",
    author: "Lemma Editorial Team",
    date: "October 11, 2024",
    readTime: "1 Min read",
    image: "/images/case-studies/otrivin.jpg",
    tags: ["FMCG", "Contextual", "Health"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Cold and allergy products live or die on timing. Otrivin needed to show up when people actually felt the problem — on polluted commute days, near pharmacies, and in the weeks when search already spikes.",
      },
      {
        type: "takeaway",
        text: "For OTC brands, context is the media plan. Weather, location, and season do more work than a bigger board.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Creative and delivery flexed with environmental triggers. Pharmacy-adjacent and transit inventory carried the product benefit in a single, high-contrast claim.",
      },
      {
        type: "list",
        items: [
          "Triggers tied to weather and seasonality",
          "Screens near purchase, not only near traffic",
          "A benefit-led line that survives a two-second glance",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The launch felt timely instead of decorative — outdoor that behaved like a utility, which is exactly how people think about the product.",
      },
    ],
  },
  "amazon-fresh": {
    slug: "amazon-fresh",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Retail"],
    title: "Amazon Fresh Engages Frequent Shoppers with DOOH",
    excerpt:
      "Amazon Fresh used programmatic DOOH to reach frequent shoppers around store catchments and daily routes — reinforcing convenience at the moment people plan the next shop.",
    author: "Lemma Editorial Team",
    date: "August 22, 2024",
    readTime: "1 Min read",
    image: "/images/case-studies/amazon-fresh.jpg",
    tags: ["Retail", "Grocery", "DOOH"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Grocery loyalty is a habit. Amazon Fresh needed outdoor that sat inside existing shopper routes, not a citywide brand splash that spoke to everyone and no one.",
      },
      {
        type: "takeaway",
        text: "Retail outdoor pays back when it is catchment media: close enough to the store to change this week's shop, not next quarter's awareness.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Inventory was drawn from residential gateways, QSR clusters, and screens near Fresh catchments. Creative leaned on speed, freshness, and a clear next action.",
      },
      {
        type: "list",
        items: [
          "Catchment-first inventory around stores",
          "Creative built for habitual shoppers, not first-time explainers",
          "Dayparts aligned to the weekly shop",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The campaign treated outdoor as a store-level lever. That is a more useful brief for grocery than a generic reach buy, and it is one the team can run again.",
      },
    ],
  },
  "etihad-flight-deals": {
    slug: "etihad-flight-deals",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Travel"],
    title: "Etihad Presents Flight Deals Programmatically",
    excerpt:
      "Etihad moved flight deals onto programmatic DOOH so fares and routes could be promoted against the right cities and dayparts, instead of locking a static deal board for weeks.",
    author: "Lemma Editorial Team",
    date: "August 21, 2024",
    readTime: "1 Min read",
    image: "/images/case-studies/etihad-flight-deals.jpg",
    tags: ["Travel", "Retail Media", "Programmatic"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Deal creative ages fast. A fare that is live on the site can already be wrong on a printed board. Etihad needed outdoor that could keep up with a retail calendar.",
      },
      {
        type: "takeaway",
        text: "Airline outdoor becomes retail media the moment the fare on the screen can change as fast as the fare on the site.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Programmatic buying let the team rotate route-led offers by market and daypart. Screens near business districts and airports carried the most specific deals; broader city inventory carried the brand frame.",
      },
      {
        type: "list",
        items: [
          "Route and fare creative that can be updated in-flight",
          "Market-level buying instead of one global artwork",
          "Stronger alignment between outdoor and the live offer",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "Deals stayed current, and outdoor stopped being the slowest part of the retail stack. That is the operational win as much as the media one.",
      },
    ],
  },
  "etihad-contextual": {
    slug: "etihad-contextual",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Travel"],
    title: "Etihad’s Contextual DOOH Campaign Reaches the Right Audience",
    excerpt:
      "Etihad used contextual DOOH to reach travellers by environment — airports, premium retail, and business corridors — with creative matched to why someone was already in that place.",
    author: "Lemma Editorial Team",
    date: "June 10, 2024",
    readTime: "3 Min read",
    image: "/images/case-studies/etihad-contextual.jpg",
    tags: ["Travel", "Contextual", "DOOH"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Not every traveller is in the same mindset. An airport audience is already in-trip; a business-district audience is still deciding. Etihad needed creative that respected that difference.",
      },
      {
        type: "takeaway",
        text: "Contextual travel media is a sequencing problem: the same brand, different jobs, depending on where the person is standing.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Lemma split environments into in-trip, consideration, and lifestyle. Each cluster got a distinct message length and offer depth, still inside one visual system.",
      },
      {
        type: "list",
        items: [
          "Environment clusters instead of a single city buy",
          "Message length matched to dwell time",
          "One brand system, several contextual jobs",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The campaign felt considered rather than loud. Travellers saw a version of Etihad that made sense for the place they were in — which is the whole point of contextual outdoor.",
      },
    ],
  },
  "skp-bonacure": {
    slug: "skp-bonacure",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Beauty"],
    title: "SKP Bonacure Blends Real-Time Data and Dynamic Creative",
    excerpt:
      "SKP Bonacure combined real-time signals with dynamic DOOH creative, so the same campaign could feel current across weather, daypart, and location without a new edit every morning.",
    author: "Lemma Editorial Team",
    date: "May 22, 2024",
    readTime: "4 Min read",
    image: "/images/case-studies/skp-bonacure.jpg",
    tags: ["Beauty", "Dynamic Creative", "Data"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Beauty campaigns stall when the board looks the same for six weeks. Bonacure needed outdoor that could keep a premium feel while still reacting to live conditions.",
      },
      {
        type: "takeaway",
        text: "Dynamic creative is not a gimmick in beauty. It is how a campaign stays as fresh as the category it sells.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "A master look was locked, then variable layers — copy, product hero, and colour temperature — responded to time and environment. Lemma handled the serving logic so the brand team did not have to.",
      },
      {
        type: "list",
        items: [
          "A locked brand frame with live variable layers",
          "Triggers for daypart and environment",
          "Serving logic handled in the platform, not in the edit bay",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The campaign looked crafted, not automated. That balance — premium and live — is what made the dynamic layer worth doing.",
      },
    ],
  },
  myntra: {
    slug: "myntra",
    kind: "case-study",
    category: "Case Studies",
    categories: ["Case Studies", "Retail"],
    title: "Myntra Programmatically Launches Its Trend Campaign",
    excerpt:
      "Myntra took a trend-led fashion story onto programmatic DOOH, using high-street, mall, and youth-corridor screens to make a digital-native brand feel physically present during launch.",
    author: "Lemma Editorial Team",
    date: "May 8, 2024",
    readTime: "2 Min read",
    image: "/images/case-studies/myntra.jpg",
    tags: ["Fashion", "Retail", "Programmatic"],
    cta: defaultArticleCtas["case-study"],
    body: [
      {
        type: "heading",
        text: "The challenge",
      },
      {
        type: "paragraph",
        text: "Fashion launches move at feed speed. Myntra needed outdoor that could land a trend story in the real world without looking late by the time the boards went up.",
      },
      {
        type: "takeaway",
        text: "Programmatic fashion outdoor is a timing product. If the buy cannot move with the drop, it is already out of season.",
      },
      {
        type: "heading",
        text: "The approach",
      },
      {
        type: "paragraph",
        text: "Inventory focused on malls, high streets, and youth corridors. Creative stayed look-led and short, with the ability to rotate looks as the trend window shifted.",
      },
      {
        type: "list",
        items: [
          "Screens where fashion is already being decided",
          "Look-led creative with fast rotation",
          "A launch window measured in days, not months",
        ],
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "The brand showed up in culture, not only in the app. For a digital retailer, that physical proof is part of the trend itself.",
      },
    ],
  },
};

export function getCaseStudyDetail(slug: string) {
  return caseStudyDetails[slug] ?? null;
}

export function getRelatedCaseStudies(slug: string) {
  return caseStudyArticles
    .filter((article) => article.id !== slug)
    .slice(0, 3)
    .map((article) => ({
      title: article.title,
      href: `/case-studies/${article.id}`,
      image: article.image,
    }));
}
