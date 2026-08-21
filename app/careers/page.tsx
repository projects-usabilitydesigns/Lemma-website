import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Faq } from "@/components/Faq";
import { CareersHero, CareersGallery, CareersJobs, CareersCta } from "@/components/careers";
import { careersFaqs } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Lemma Technologies — celebrate life at Lemma, explore open roles, and help shape the future of omnichannel AdTech.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <CareersHero />
        <CareersGallery />
        <CareersJobs />
        <Faq items={careersFaqs} />
        <CareersCta />
      </main>
    </>
  );
}
