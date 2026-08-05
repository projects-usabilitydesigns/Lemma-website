import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { CaseStudies } from "@/components/home/CaseStudies";
import {
  RequestDemoHero,
  RequestDemoProducts,
  RequestDemoSteps,
  RequestDemoFaq,
} from "@/components/request-demo";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Book a personalized walkthrough of the Lemma stack—Integral, Delta, Sigma, Phi, and Infibid—across DOOH, CTV, OTT, mobile, and web. Our team replies within 24 hours.",
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
        <RequestDemoFaq />
      </main>
      <Footer />
    </>
  );
}
