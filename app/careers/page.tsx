import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CareersHero,
  CareersGallery,
  CareersJobs,
  CareersFaq,
  CareersCta,
} from "@/components/careers";

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
        <CareersFaq />
        <CareersCta />
      </main>
      <Footer />
    </>
  );
}
