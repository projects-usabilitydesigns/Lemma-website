import { Header } from "@/components/layout/Header";
import { faqs as defaultFaqs } from "@/lib/data";
import { Hero } from "@/components/home/Hero";
import { LogosMarquee } from "@/components/home/LogosMarquee";
import { Products } from "@/components/home/Products";
import { Solutions } from "@/components/home/Solutions";
import { CaseStudies } from "@/components/home/CaseStudies";
import { AiFeatures } from "@/components/home/AiFeatures";
import { NextFrontier } from "@/components/home/NextFrontier";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/home/Cta";
import {
  getHeroStats,
  getSolutions,
  getCaseStudies,
  getBlogPosts,
  getFaqs,
  getClientLogos,
} from "@/lib/api";

export default async function HomePage() {
  const [
    heroStats,
    solutions,
    caseStudies,
    blogPosts,
    faqs,
    clientLogos,
  ] = await Promise.all([
    getHeroStats(),
    getSolutions(),
    getCaseStudies(),
    getBlogPosts(),
    getFaqs(),
    getClientLogos(),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero heroStats={heroStats} />
        <LogosMarquee clientLogos={clientLogos} />
        <Products />
        <Solutions solutions={solutions} />
        <CaseStudies caseStudies={caseStudies} />
        <AiFeatures />
        <NextFrontier />
        <Blog blogPosts={blogPosts} />
        <Faq items={faqs.length ? faqs : defaultFaqs} />
        <Cta />
      </main>
    </>
  );
}
