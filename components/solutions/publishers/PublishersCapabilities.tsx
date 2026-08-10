"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconBadge } from "@/components/solutions/IconBadge";
import { publishersCapabilities } from "@/lib/solutions-publishers-page-data";

export function PublishersCapabilities() {
  return (
    <section className="bg-[#f0f4f8] pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <FadeUp className="mb-10 max-w-2xl space-y-4">
          <SectionLabel label={publishersCapabilities.label} accent="blue" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {publishersCapabilities.title}
          </h2>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {publishersCapabilities.cards.map((card, i) => (
            <FadeUp key={card.id} delay={i * 0.04}>
              <div className="flex h-full flex-col gap-4 rounded-[16px] border border-[var(--color-border)] bg-white p-5 transition-shadow hover:shadow-[0px_8px_24px_rgba(9,19,26,0.05)]">
                <IconBadge name={card.icon} accent={publishersCapabilities.accent} size={44} iconSize={22} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-[17px] font-semibold leading-[1.3] text-[var(--color-ink)]">
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