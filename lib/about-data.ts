export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

export type Award = {
  id: string;
  year: string;
  title: string;
  image: string;
};

export type ValueTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

/** Encode image filenames that contain spaces for use in src URLs */
export function aboutImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

/** Encode public-root filenames that contain spaces or + */
export function publicAsset(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

const valuesHud = publicAsset("Container+BackgroundColor.svg");

export const aboutValues: ValueTab[] = [
  {
    id: "transparency",
    label: "Transparency",
    title: "Building Trust Through Transparency",
    description:
      "Transparency is our foundation. We're committed to open operations that build trust. It's about more than just revealing processes; it's fostering a culture where every action resonates with clarity.",
    image: aboutImage("our-values.svg"),
  },
  {
    id: "innovation",
    label: "Innovation",
    title: "Disruption with Innovation",
    description:
      "We're not content with the status quo; we're pioneers of change, constantly evolving to stay ahead. Our dedication to innovation sets the pace for the future of digital advertising.",
    image: aboutImage("our-values.svg"),
  },
  {
    id: "agility",
    label: "Agility",
    title: "Agile and Adaptive",
    description:
      "We don't just adapt; we embrace change with youthful vigor. Our dynamic approach, agility and foresight keep us ahead as we navigate complexities effortlessly.",
    image: aboutImage("our-values.svg"),
  },
  {
    id: "energetic",
    label: "Energetic",
    title: "High Impact Drive",
    description:
      "We inject dynamic momentum into every relationship, replacing passive account management with an eager, high-energy drive to elevate campaign standards.",
    image: aboutImage("our-values.svg"),
  },
];

export const aboutAwards: Award[] = [
  {
    id: "a1",
    year: "2025",
    title: "Best Omni-Channel Campaign | Kasturi Cotton",
    image: aboutImage("2025_u-277x400 1.png"),
  },
  {
    id: "a2",
    year: "2024",
    title: "Front Benchers 2024 | ASUS - Gold",
    image: aboutImage("2024_1_u-277x400 1.png"),
  },
  {
    id: "a3",
    year: "2024",
    title: "Front Benchers 2024 | Hyundai - Silver",
    image: aboutImage("2024_2_u-277x400 1.png"),
  },
  {
    id: "a4",
    year: "2024",
    title: "Front Benchers 2024 | Raymond - Bronze",
    image: aboutImage("2024_3_u-277x400 1.png"),
  },
  {
    id: "a5",
    year: "2024",
    title: "Front Benchers 2024 | Britannia - Bronze",
    image: aboutImage("2024_4_u-277x400 1.png"),
  },
  {
    id: "a6",
    year: "2023",
    title: "Programmatic Agency of the Year - Runners Up",
    image: aboutImage("2023_u-277x400 1.png"),
  },
  {
    id: "a7",
    year: "2023",
    title: "Best Programmatic Out-Of-Home Activation | OnePlus - Gold (E4M)",
    image: aboutImage("2023_1_u-277x400 1.png"),
  },
  {
    id: "a8",
    year: "2022",
    title: "Best Programmatic Out-Of-Home Activation | HSBC - Bronze (E4M)",
    image: aboutImage("2022_u-277x400 1.png"),
  },
  {
    id: "a9",
    year: "2022",
    title: "Best Innovative Marketing Campaign | Amazon Prime Video - Silver (E4M)",
    image: aboutImage("2022_1_u-277x400 1.png"),
  },
  {
    id: "a10",
    year: "2022",
    title: "Best Programmatic Out-Of-Home Activation | NEXA, Maruti - Gold (E4M)",
    image: aboutImage("2022_2_u-277x400 1.png"),
  },
  {
    id: "a11",
    year: "2021",
    title: "Best Regional Non-Traditional Outdoor Campaign – Frogfever",
    image: aboutImage("2021_u-277x400 1.png"),
  },
  {
    id: "a12",
    year: "2021",
    title: "Best Outdoor Plan - Gold",
    image: aboutImage("2021_2_u-277x400 1.png"),
  },
  {
    id: "a13",
    year: "2019",
    title: "Best Technology Provider for Programmatic Ads - Inkspell",
    image: aboutImage("2019_u-277x400 1.png"),
  },
];

export const leadershipTeam: TeamMember[] = [
  {
    id: "t1",
    name: "Gulab Patil",
    role: "Founder & CEO",
    image: aboutImage("gulab_patil.png"),
    linkedin: "https://www.linkedin.com/in/gulab-patil-24aaa420",
  },
  {
    id: "t2",
    name: "Mayuresh Phadke",
    role: "Co-founder & COO",
    image: aboutImage("Mayuresh Phadke.png"),
    linkedin: "https://www.linkedin.com/in/mayureshphadke",
  },
  {
    id: "t3",
    name: "Siddharth Dabhade",
    role: "Chief Business Officer",
    image: aboutImage("Siddharth Dabhade.png"),
    linkedin: "https://www.linkedin.com/in/siddharthdabhade",
  },
  {
    id: "t4",
    name: "Vaibhav Lonkar",
    role: "Chief HRD",
    image: aboutImage("Vaibhav Lonkar.png"),
    linkedin: "https://www.linkedin.com/in/vaibhavl",
  },
  {
    id: "t5",
    name: "Merlin Coutinho",
    role: "President, Marketing",
    image: aboutImage("Merlin Coutinho.png"),
    linkedin: "https://www.linkedin.com/in/merlin-coutinho-72076030",
  },
  {
    id: "t6",
    name: "Bill Nolte",
    role: "VP - Sales & Partnerships",
    image: aboutImage("Bill Nolte.png"),
    linkedin: "https://www.linkedin.com/in/billnolte28",
  },
  {
    id: "t7",
    name: "Valentine Ding",
    role: "Senior Director, Demand - US",
    image: aboutImage("Valentine Ding.png"),
    linkedin: "https://www.linkedin.com/in/val-d-1682301ba",
  },
  {
    id: "t9",
    name: "Nikhil Chandaliya",
    role: "President, Customer Success",
    image: aboutImage("Nikhil Chandaliya.png"),
    linkedin: "https://www.linkedin.com/in/nikhil-chandalia-a57a61217",
  },
  {
    id: "t10",
    name: "Paresh Pathak",
    role: "VP, Engineering",
    image: aboutImage("Paresh Pathak.png"),
    linkedin: "https://www.linkedin.com/in/paresh-pathak-70770158",
  },
  {
    id: "t11",
    name: "Jagdish Narigara",
    role: "VP, Product",
    image: aboutImage("Jagdish Narigara.png"),
    linkedin: "https://www.linkedin.com/in/jagdish-narigara-73660115",
  },
  {
    id: "t12",
    name: "Vaibhav Prabhune",
    role: "VP, Performance Business",
    image: aboutImage("Vaibhav Prabhune.png"),
    linkedin: "https://www.linkedin.com/in/vaibhav-prabhune-90733139",
  },
  {
    id: "t13",
    name: "Nikhil Vikhe",
    role: "AVP, Strategic Alliances",
    image: aboutImage("Nikhil Vikhe.png"),
    linkedin: "https://www.linkedin.com/in/nikhilvikhe",
  },
  {
    id: "t14",
    name: "Vishal Shirke",
    role: "Head, Ad Operations",
    image: aboutImage("Vishal Shirke.png"),
    linkedin: "https://www.linkedin.com/in/vshirkeonlinemedia",
  },
  {
    id: "t15",
    name: "Pramod Jadhav",
    role: "Chief Architect",
    image: aboutImage("Pramod Jadhav.png"),
    linkedin: "https://www.linkedin.com/in/jadhavpramod",
  },
  {
    id: "t16",
    name: "Shashikant Patil",
    role: "Director, Integration",
    image: aboutImage("Shashikant Patil.png"),
    linkedin: "https://www.linkedin.com/in/shashikant-patil-bab79a18",
  },
];

export const advisors: TeamMember[] = [
  {
    id: "ad1",
    name: "Sam Balsara",
    role: "",
    image: aboutImage("Sam Balsara.png"),
    linkedin: "https://www.linkedin.com/in/sambalsara",
  },
  {
    id: "ad2",
    name: "Anand Das",
    role: "",
    image: aboutImage("Anand Das.png"),
    linkedin: "https://www.linkedin.com/in/ananddas",
  },
  {
    id: "ad3",
    name: "Aditya Kulkarni",
    role: "",
    image: aboutImage("Aditiya Kulkarni.png"),
    linkedin: "https://www.linkedin.com/in/adityapkulkarni",
  },
  {
    id: "ad4",
    name: "Sharad Gadsing",
    role: "",
    image: aboutImage("Sharad Gadsing.png"),
    linkedin: "https://www.linkedin.com/in/sharad-gadsing-97981b81",
  },
];

export const aboutFaqs = [
  {
    id: "about-1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel Adtech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "about-2",
    question: "Who can use Lemma’s platform?",
    answer:
      "Brands, agencies, and media owners use Lemma to run and monetize omnichannel campaigns—from global advertisers activating DOOH and CTV to publishers unlocking premium demand.",
  },
  {
    id: "about-3",
    question: "What is Lemma Integral?",
    answer:
      "Integral is Lemma's full-funnel activation layer for measuring, retargeting, and attributing every OOH impression with deep audience analytics.",
  },
  {
    id: "about-4",
    question: "What does Lemma Delta do?",
    answer:
      "Delta is the demand-side engine for scaling DOOH and CTV with automated bidding, real-time optimization, and maximum qualified reach.",
  },
  {
    id: "about-5",
    question: "What is Lemma Sigma?",
    answer:
      "Sigma is Lemma's transparent SSP that helps media owners maximize inventory yield with real-time insights and global demand access.",
  },
  {
    id: "about-6",
    question: "How does Lemma Phi help media owners?",
    answer:
      "Phi centralizes DOOH content planning, scheduling, and delivery so operators can manage screens, locations, and formats from one platform.",
  },
] as const;

export const aboutPrinciples = {
  intro:
    "Empowering businesses with innovative, transparent, and technology-driven advertising solutions. Building a smarter digital future through adaptability, collaboration, and sustainable growth.",
  vision: {
    title: "Our Vision",
    description:
      "Is to revolutionize the advertising industry by fostering a culture of empowerment and openness using cutting-edge technology.",
    image: publicAsset("image 30.svg"),
    background: publicAsset("+BackgroundColor.svg"),
  },
  mission: {
    title: "Our Mission",
    description:
      "Is to be the driving force behind business success in the digital world, offering a platform that is transparent, cost-effective, and highly adaptable, supported with the right tools to navigate the dynamic digital ecosystem.",
    image: publicAsset("image 31.svg"),
    background: publicAsset("+BackgroundColor (1).svg"),
  },
} as const;

export const aboutAssets = {
  hero: aboutImage("about-hero.png"),
  community: aboutImage("Component 11.png"),
  values: valuesHud,
  valuesBanner: publicAsset("leme-white-bg.svg"),
  valuesMark: publicAsset("values-prism.png"),
} as const;
