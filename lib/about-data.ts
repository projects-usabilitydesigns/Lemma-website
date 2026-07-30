export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
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
  titlePrefix: string;
  titleAccent: string;
  description: string;
  highlights: readonly string[];
};

/** Encode image filenames that contain spaces for use in src URLs */
export function aboutImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export const aboutValues = [
  {
    id: "transparency",
    label: "Transparency",
    titlePrefix: "Building Trust Through",
    titleAccent: "Transparency",
    description:
      "Transparency in communication and clear decision-making builds lasting partnerships. We believe in open reporting and full visibility into campaign performance, inventory yield, and outcome measurement across every channel.",
    highlights: ["Transparency", "communication", "clear decision-making"],
  },
  {
    id: "innovation",
    label: "Innovation",
    titlePrefix: "Driving Change Through",
    titleAccent: "Innovation",
    description:
      "Innovation powers everything we build — from AI-first attribution to programmatic DOOH. We push boundaries so outdoor and omnichannel media get the same measurement rigor as digital.",
    highlights: ["Innovation", "AI-first", "programmatic DOOH"],
  },
  {
    id: "agility",
    label: "Agility",
    titlePrefix: "Moving Faster With",
    titleAccent: "Agility",
    description:
      "Agility lets us adapt campaigns in real time — optimizing bids, creatives, and delivery as markets shift. Speed without sacrificing precision keeps brands ahead.",
    highlights: ["Agility", "real time", "optimizing"],
  },
  {
    id: "energetic",
    label: "Energetic",
    titlePrefix: "Staying Bold And",
    titleAccent: "Energetic",
    description:
      "An energetic culture fuels curiosity and collaboration. We bring that energy to every partnership — helping brands and media owners turn impressions into outcomes.",
    highlights: ["energetic", "curiosity", "collaboration"],
  },
] as const;

export const aboutAwards: Award[] = [
  {
    id: "a1",
    year: "2025",
    title: "Best AdTech Innovation — Industry Awards",
    image: aboutImage("2025_u-277x400 1.png"),
  },
  {
    id: "a2",
    year: "2024",
    title: "Top Programmatic Platform — Exchange4media",
    image: aboutImage("2024_1_u-277x400 1.png"),
  },
  {
    id: "a3",
    year: "2024",
    title: "Best DOOH Technology — Digiday",
    image: aboutImage("2024_2_u-277x400 1.png"),
  },
  {
    id: "a4",
    year: "2024",
    title: "Innovation in Attribution — MMA Global",
    image: aboutImage("2024_3_u-277x400 1.png"),
  },
  {
    id: "a5",
    year: "2024",
    title: "Omnichannel Leader — AdWeek",
    image: aboutImage("2024_4_u-277x400 1.png"),
  },
  {
    id: "a6",
    year: "2023",
    title: "Best Startup Firm — IAMAI",
    image: aboutImage("2023_u-277x400 1.png"),
  },
  {
    id: "a7",
    year: "2023",
    title: "AdTech Platform of the Year",
    image: aboutImage("2023_1_u-277x400 1.png"),
  },
  {
    id: "a8",
    year: "2022",
    title: "Best Innovative Marketing Campaign — Silver Award",
    image: aboutImage("2022_u-277x400 1.png"),
  },
  {
    id: "a9",
    year: "2022",
    title: "Top 10 AdTech Startups in APAC — APAC Business News",
    image: aboutImage("2022_2_u-277x400 1.png"),
  },
  {
    id: "a10",
    year: "2021",
    title: "Best Startup Firm — IAMAI",
    image: aboutImage("2021_u-277x400 1.png"),
  },
  {
    id: "a11",
    year: "2021",
    title: "Emerging AdTech Platform",
    image: aboutImage("2021_2_u-277x400 1.png"),
  },
  {
    id: "a12",
    year: "2019",
    title: "Best Technology Platform — Exchange4media IDMA",
    image: aboutImage("2019_u-277x400 1.png"),
  },
];

export const leadershipTeam: TeamMember[] = [
  {
    id: "t1",
    name: "Gulab Patil",
    role: "Co-founder & CEO",
    image: aboutImage("gulab_patil.png"),
  },
  {
    id: "t2",
    name: "Mayuresh Phadke",
    role: "Co-founder & COO",
    image: aboutImage("Mayuresh Phadke.png"),
  },
  {
    id: "t3",
    name: "Siddharth Dabhade",
    role: "Co-founder & CTO",
    image: aboutImage("Siddharth Dabhade.png"),
  },
  {
    id: "t4",
    name: "Vaibhav Lonkar",
    role: "Co-founder",
    image: aboutImage("Vaibhav Lonkar.png"),
  },
  {
    id: "t5",
    name: "Merlin Coutinho",
    role: "Head of Marketing",
    image: aboutImage("Merlin Coutinho.png"),
  },
  {
    id: "t6",
    name: "Bill Nolte",
    role: "VP — Sales & Partnerships",
    image: aboutImage("Bill Nolte.png"),
  },
  {
    id: "t7",
    name: "Nikhil Vikhe",
    role: "Head of Product",
    image: aboutImage("Nikhil Vikhe.png"),
  },
  {
    id: "t8",
    name: "Brendon Duffy",
    role: "Director — Content & PR",
    image: aboutImage("Brendon Duffy.png"),
  },
  {
    id: "t9",
    name: "Nikhil Chandaliya",
    role: "President — Customer Success",
    image: aboutImage("Nikhil Chandaliya.png"),
  },
  {
    id: "t10",
    name: "Paresh Pathak",
    role: "VP Engineering",
    image: aboutImage("Paresh Pathak.png"),
  },
  {
    id: "t11",
    name: "Jagdish Narigara",
    role: "VP Finance",
    image: aboutImage("Jagdish Narigara.png"),
  },
  {
    id: "t12",
    name: "Vaibhav Prabhune",
    role: "VP HR, Admin and Facilities",
    image: aboutImage("Vaibhav Prabhune.png"),
  },
  {
    id: "t13",
    name: "Valentine Ding",
    role: "AVP Global Operations",
    image: aboutImage("Valentine Ding.png"),
  },
  {
    id: "t14",
    name: "Vishal Shirke",
    role: "Head of Delivery",
    image: aboutImage("Vishal Shirke.png"),
  },
  {
    id: "t15",
    name: "Pramod Jadhav",
    role: "Finance Head",
    image: aboutImage("Pramod Jadhav.png"),
  },
  {
    id: "t16",
    name: "Shashikant Patil",
    role: "Sr. Lead — Integration",
    image: aboutImage("Shashikant Patil.png"),
  },
];

export const advisors: TeamMember[] = [
  {
    id: "ad1",
    name: "Sam Balsara",
    role: "Advisor",
    image: aboutImage("Sam Balsara.png"),
  },
  {
    id: "ad2",
    name: "Anand Das",
    role: "Advisor",
    image: aboutImage("Anand Das.png"),
  },
  {
    id: "ad3",
    name: "Aditya Kulkarni",
    role: "Advisor",
    image: aboutImage("Aditiya Kulkarni.png"),
  },
  {
    id: "ad4",
    name: "Sharad Gadsing",
    role: "Advisor",
    image: aboutImage("Sharad Gadsing.png"),
  },
];

export const aboutFaqs = [
  {
    id: "about-1",
    question: "What is Lemma Technologies?",
    answer:
      "Lemma is an AI-first omnichannel AdTech platform that helps brands, agencies, and media owners plan, activate, optimize, and measure campaigns across DOOH, CTV, OTT, Mobile, and Audio channels.",
  },
  {
    id: "about-2",
    question: "Who can use Lemma's platform?",
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

export const aboutAssets = {
  hero: aboutImage("hero_bannerimage.png"),
  community: aboutImage("creative minds.png"),
  mission: aboutImage("mission.png"),
  vision: aboutImage("vision.png"),
  values: aboutImage("our values.png"),
} as const;
