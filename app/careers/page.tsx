import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Faq } from "@/components/Faq";
import { CareersHero, CareersGallery, CareersJobs, CareersCta } from "@/components/careers";
import { careersFaqs, careersJobs } from "@/lib/careers-data";
import { getJobs } from "@/lib/api";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Lemma Technologies — celebrate life at Lemma, explore open roles, and help shape the future of omnichannel AdTech.",
};

export default async function CareersPage() {
  const jobs = await getJobs();
  const roles = jobs.length > 0 ? jobs : [...careersJobs.roles];

  return (
    <>
      <Header />
      <main>
        <CareersHero />
        <CareersGallery />
        <CareersJobs roles={roles} />
        <Faq items={careersFaqs} className="py-10 md:py-14" />
        <CareersCta />
      </main>
    </>
  );
}
