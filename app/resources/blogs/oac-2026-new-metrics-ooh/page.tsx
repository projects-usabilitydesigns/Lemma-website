import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "OAC 2026: Beyond Impressions — The New Metrics for OOH Success",
  description:
    "OOH is moving beyond impressions toward outcome-based measurement. Here's what the new metrics for OOH success look like.",
};

export default function OacMetricsPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["oac-2026-new-metrics-ooh"]} />
        <AboutCta />
      </main>
    </>
  );
}