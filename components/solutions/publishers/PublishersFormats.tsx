"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconBadge } from "@/components/solutions/IconBadge";
import { publishersFormats } from "@/lib/solutions-publishers-page-data";

export function PublishersFormats() {
  return (
    <section className="bg-[#f8f9fb] pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <FadeUp className="space-y-4">
            <SectionLabel label={publishersFormats.label} />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              {publishersFormats.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.08} className="flex items-end lg:pb-2">
            <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[1.65] text-[var(--color-slate)] max-w-md lg:ml-auto lg:text-right">
              {publishersFormats.description}
            </p>
          </FadeUp>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishersFormats.cards.map((card, i) => (
            <FadeUp key={card.id} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-[16px] border border-[var(--color-border)] bg-white p-6 transition-shadow hover:shadow-[0px_8px_24px_rgba(9,19,26,0.06)]">
                <IconBadge name={card.icon} accent={publishersFormats.accent} size={48} iconSize={24} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-[18px] font-semibold leading-[1.3] text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-[15px] leading-[1.55] text-[var(--color-slate)]">
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