import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutCommunity } from "@/components/about/AboutCommunity";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutAwards } from "@/components/about/AboutAwards";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutFaq } from "@/components/about/AboutFaq";
import { AboutCta } from "@/components/about/AboutCta";
import { getTeamMembers, getAwards } from "@/lib/api";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lemma Technologies — our mission, values, leadership team, and journey transforming advertising from outdoor to outcome.",
};

export default async function AboutPage() {
  const [teamMembers, awards] = await Promise.all([
    getTeamMembers(),
    getAwards(),
  ]);

  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutCommunity />
        <AboutPrinciples />
        <AboutValues />
        <AboutAwards awards={awards} />
        <AboutTeam team={teamMembers} advisors={teamMembers} />
        <AboutFaq />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
