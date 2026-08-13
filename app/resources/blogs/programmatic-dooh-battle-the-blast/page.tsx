import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "Why Programmatic DOOH Could Battle the Blast",
  description:
    "Broadcast-style blast campaigns were the default of outdoor advertising. Programmatic DOOH is engineered to replace that playbook with precision.",
};

export default function ProgrammaticDoohPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["programmatic-dooh-battle-the-blast"]} />
        <AboutCta />
      </main>
    </>
  );
}