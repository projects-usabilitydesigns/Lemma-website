import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Faq } from "@/components/Faq";
import {
  RequestDemoHero,
  RequestDemoProducts,
  RequestDemoSteps,
} from "@/components/request-demo";
import { demoFaqs } from "@/lib/request-demo-data";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a personalized walkthrough of the Lemma stack—Integral, Delta, Sigma, and Phi—across DOOH, CTV, OTT, mobile, and web. Our team replies within 24 hours.",
};

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main>
        <RequestDemoHero />
        <LogosMarquee />
        <RequestDemoProducts />
        <RequestDemoSteps />
        <CaseStudies />
        <Faq items={demoFaqs} />
      </main>
    </>
  );
}
