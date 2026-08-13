import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { BlogDetailContent } from "@/components/resources/BlogDetailContent";
import { blogDetails } from "@/lib/resources-page-data";

export const metadata: Metadata = {
  title: "Strategic Placement: The Top 5 Festive DOOH Touchpoint Cluster",
  description:
    "Festive seasons are the biggest revenue windows for brands. Explore the top five DOOH touchpoint clusters that convert shopper footfall into outcomes.",
};

export default function FestiveDoohTouchpointPost() {
  return (
    <>
      <Header />
      <main>
        <BlogDetailContent article={blogDetails["festive-dooh-touchpoint-cluster"]} />
        <AboutCta />
      </main>
    </>
  );
}