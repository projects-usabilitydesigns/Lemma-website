import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "InfoComm 2026 | The Global Stage for Professional AV Innovation",
  description:
    "InfoComm 2026 signals a shift: digital signage evolves from delivery vehicles into intelligent, addressable media infrastructure.",
};

export default function InfoComm2026Post() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["infocomm-2026-av-innovation"]} />
        <AboutCta />
      </main>
    </>
  );
}