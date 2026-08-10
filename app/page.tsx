import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { Products } from "@/components/home/Products";
import { Solutions } from "@/components/home/Solutions";
import { CaseStudies } from "@/components/home/CaseStudies";
import { AiFeatures } from "@/components/home/AiFeatures";
import { ArchitectureImpact } from "@/components/home/ArchitectureImpact";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/home/Cta";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosMarquee />
        <Products />
        <Solutions />
        <CaseStudies />
        <AiFeatures />
        <ArchitectureImpact />
        <Blog />
        <Faq items={faqs} viewAllHref="#faq" />
        <Cta />
      </main>
    </>
  );
}
