import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "Stop Buying Real Estate, Start Investing in Context",
  description:
    "Out-of-home media has traditionally been bought like real estate. Contextual DOOH is changing what smart buyers actually invest in.",
};

export default function InvestingInContextPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["investing-in-context"]} />
        <AboutCta />
      </main>
    </>
  );
}