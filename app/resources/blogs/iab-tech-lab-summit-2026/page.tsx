import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "IAB Tech Lab Summit 2026: Signals a New Era of Agentic Advertising",
  description:
    "The 2026 IAB Tech Lab Summit made the consensus clear: advertising is entering an agentic era defined by interoperability.",
};

export default function IabTechLabPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["iab-tech-lab-summit-2026"]} />
        <AboutCta />
      </main>
    </>
  );
}