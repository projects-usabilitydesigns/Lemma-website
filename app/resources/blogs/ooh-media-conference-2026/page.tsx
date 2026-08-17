import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "OOH Media Conference 2026: What the \"Human Medium\" Means",
  description:
    "Why OOH is being rediscovered as the human medium — and how measurement keeps it accountable to outcomes.",
};

export default function OohMediaConference2026Post() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["ooh-media-conference-2026"]} />
        <AboutCta />
      </main>
    </>
  );
}