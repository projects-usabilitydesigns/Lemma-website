"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconBadge } from "@/components/solutions/IconBadge";
import { agenciesWhy } from "@/lib/solutions-agencies-page-data";

export function AgenciesWhy() {
  return (
    <section className="bg-white pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <SectionLabel label={agenciesWhy.label} align="center" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {agenciesWhy.title}
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[1.65] text-[var(--color-slate)] max-w-2xl mx-auto">
            {agenciesWhy.description}
          </p>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {agenciesWhy.cards.map((card, i) => (
            <FadeUp key={card.id} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-[16px] border border-[var(--color-border)] bg-white p-5 transition-shadow hover:shadow-[0px_8px_24px_rgba(9,19,26,0.06)]">
                <IconBadge name={card.icon} accent={card.accent} size={48} iconSize={24} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-[18px] font-semibold leading-[1.3] text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[14px] leading-[1.55] text-[var(--color-slate)]">
                    {card.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}