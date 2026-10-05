import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { DeltaHero, DeltaIntro, DeltaAdvantage, DeltaActivation } from "@/components/products/delta";
import { deltaFaqs } from "@/lib/delta-data";
import { getPageSeo } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo("products/delta");
  return buildMetadataFromSeo(seo, {
    title: "Lemma Delta",
    description:
      "Lemma Delta is an omnichannel demand platform to plan, activate, and measure new-age digital campaigns across premium digital channels.",
  });
}

export default function DeltaProductPage() {
  return (
    <>
      <Header />
      <main>
        <DeltaHero />
        <DeltaIntro />
        <DeltaAdvantage />
        <DeltaActivation />
        <Faq items={deltaFaqs} />
        <AboutCta />
      </main>
    </>
  );
}
