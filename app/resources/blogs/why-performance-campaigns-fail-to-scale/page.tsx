import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "Why Most Performance Campaigns Fail to Scale",
  description:
    "Performance campaigns love to win small and lose big. Here's why they hit the scalability wall — and how to build scale into the plan.",
};

export default function PerformanceScalePost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["why-performance-campaigns-fail-to-scale"]} />
        <AboutCta />
      </main>
    </>
  );
}