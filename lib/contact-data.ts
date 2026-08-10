export type Office = {
  id: string;
  city: string;
  region: string;
  /** ISO 3166-1 alpha-2 country code for flag */
  countryCode: string;
  address: string[];
  phone?: string;
};

export const contactHero = {
  label: "Contact Us",
  title: "Connect. Collaborate. Conquer.",
  description:
    "Impactful new-media campaigns start with a conversation. Tell us what you're planning and the right Lemma specialist will get back to you within 24 hours.",
  email: "support@lemmamedia.com",
  salesEmail: "contactus@lemmamedia.com",
  phone: "+91 9325443396",
  highlights: [
    "Global teams across 9 offices and 40+ markets",
    "Support for advertisers, agencies, and media owners",
    "A reply from a real specialist within 24 hours",
  ],
} as const;

export const contactAudiences = [
  { id: "advertisers", label: "Advertisers" },
  { id: "media-owners", label: "Media Owners" },
] as const;

export type ContactAudienceId = (typeof contactAudiences)[number]["id"];

export const offices: Office[] = [
  {
    id: "new-york",
    city: "New York",
    region: "United States",
    countryCode: "us",
    address: ["530 Fifth Ave, 9th Floor", "New York, 10036, US"],
  },
  {
    id: "london",
    city: "London",
    region: "United Kingdom",
    countryCode: "gb",
    address: ["The Curtain Club, Mondrian London Shoreditch", "45 Curtain Rd, London EC2A 3PT, GB"],
  },
  {
    id: "singapore",
    city: "Singapore",
    region: "Singapore",
    countryCode: "sg",
    address: ["3 Shenton Way, #09-07", "Shenton House, Singapore 068805"],
  },
  {
    id: "australia",
    city: "Sydney",
    region: "Australia",
    countryCode: "au",
    address: [
      "Insight Working Space, Level 6, Suite A",
      "140 William Street, Woolloomooloo NSW 2011",
    ],
  },
  {
    id: "indonesia",
    city: "Jakarta",
    region: "Indonesia",
    countryCode: "id",
    address: [
      "Suite A, 11th Floor, Sahid Sudirman Center",
      "Jalan Jendral Sudirman 86, Jakarta Pusat 10220",
    ],
  },
  {
    id: "delhi",
    city: "Delhi",
    region: "India",
    countryCode: "in",
    address: ["WeWork, 4th Floor, Galaxy Hotel", "32nd Milestone, Gurgaon – 122001"],
    phone: "+91 9325443396",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    region: "India",
    countryCode: "in",
    address: [
      "WeWork, 6th Floor, Raheja Platinum, Sag Baug",
      "Marol, Andheri East, Mumbai 400059",
    ],
    phone: "+91 9325443396",
  },
  {
    id: "pune",
    city: "Pune",
    region: "India",
    countryCode: "in",
    address: [
      "The Capital, Building B, 301, Baner–Pashan Link Road",
      "Baner, Pune, Maharashtra 411045",
    ],
    phone: "+91 9325443396",
  },
];
