"use client";

import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { adPlatformLogos } from "@/components/solutions/ad-platform-logos";
import { businessGrowthPlatforms } from "@/lib/solutions-business-growth-data";

export function AdPlatforms() {
  const { label, title, description, items } = businessGrowthPlatforms;

  return (
    <section id="ad-platforms" className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mb-8 max-w-3xl space-y-4">
          <SectionLabel label={label} accent="green" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" delay={0.06}>
          {items.map((item) => {
            const Logo = adPlatformLogos[item.id];
            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className="flex flex-col items-center gap-3 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-cream)] px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,143,219,0.35)] hover:bg-white hover:shadow-[0_14px_32px_rgba(9,19,26,0.08)]"
              >
                <div className="flex size-14 items-center justify-center">
                  <Logo />
                </div>
                <p className="text-[13px] font-semibold text-[var(--color-ink)]">{item.name}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
