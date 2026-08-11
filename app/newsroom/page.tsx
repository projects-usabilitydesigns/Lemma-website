import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutCta } from "@/components/about/AboutCta";
import { Faq } from "@/components/Faq";
import { NewsroomGrid, NewsroomHero } from "@/components/newsroom";
import { newsroomFaqs } from "@/lib/newsroom-data";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Press releases, partnerships, product launches, and company news from Lemma Technologies.",
};

export default function NewsroomPage() {
  return (
    <>
      <Header />
      <main>
        <NewsroomHero />
        <NewsroomGrid />
        <Faq items={newsroomFaqs} viewAllHref="/#faq" />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
