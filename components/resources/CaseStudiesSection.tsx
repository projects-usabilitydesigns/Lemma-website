"use client";

import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { readingTimeFromArticle } from "@/lib/article-detail";
import { caseStudiesList } from "@/lib/resources-page-data";
import { caseStudyDetails } from "@/lib/case-study-details";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-[#f0f4f8] pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mb-10 max-w-2xl">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[40px] md:leading-[44px]">
            Case Studies
          </h2>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudiesList.map((article) => {
            const slug = article.href.split("/").filter(Boolean).pop() ?? "";
            const detail = caseStudyDetails[slug];
            return (
              <ResourceCard
                key={article.id}
                article={{
                  ...article,
                  readTime: detail ? readingTimeFromArticle(detail) : article.readTime,
                }}
              />
            );
          })}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex justify-center">
          <Button
            href="/case-studies"
            variant="primary"
            arrow="right"
            className="normal-case tracking-normal border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(0,143,219,0.28)]"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            View All
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}