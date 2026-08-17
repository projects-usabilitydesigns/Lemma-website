import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "Playbook: From Compliance to Scale",
  description:
    "Most advertising growth initiatives die in compliance. This playbook shows how to move past the compliance gate and scale repeatably.",
};

export default function ComplianceToScalePost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["compliance-to-scale-playbook"]} />
        <AboutCta />
      </main>
    </>
  );
}