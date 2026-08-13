import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "DOOH Creative Rules: What Brands Need to Know",
  description:
    "DOOH creative fails differently than digital creative. Learn the three-second rule, live-context design, and why a campaign is a system of variants.",
};

export default function DoohCreativeRulesPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["dooh-creative-rules"]} />
        <AboutCta />
      </main>
    </>
  );
}