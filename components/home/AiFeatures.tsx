"use client";

import Image from "next/image";
import {
  BrainCircuit,
  PieChart,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aiFeatures as defaultAiFeatures } from "@/lib/data";
import type { AiFeature } from "@/types";

const FUNNEL_IMAGE = "/Group 1597883517.svg";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  planning: BrainCircuit,
  activation: Target,
  optimization: TrendingUp,
  measurement: PieChart,
};

function HighlightedText({
  text,
  highlight,
  color,
}: {
  text: string;
  highlight?: string;
  color: string;
}) {
  if (!highlight) return text;
  const index = text.indexOf(highlight);
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <span className="font-semibold" style={{ color }}>
        {highlight}
      </span>
      {text.slice(index + highlight.length)}
    </>
  );
}

function FeatureIcon({ feature }: { feature: AiFeature }) {
  const Icon = FEATURE_ICONS[feature.id];
  if (Icon) {
    return <Icon className="size-6" strokeWidth={1.75} style={{ color: feature.accent }} />;
  }
  return (
    <div className="relative size-6">
      <Image src={feature.icon} alt="" fill className="object-contain" />
    </div>
  );
}

export function AiFeatures() {
  const data = defaultAiFeatures;

  return (
    <section id="ai" className="bg-white py-10 md:py-14">
      <Container>
        <div className="mb-8 grid items-center gap-8 lg:mb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <FadeUp className="space-y-4">
            <SectionLabel label="AI at Lemma" accent="blue" />
            <h2 className="font-heading max-w-xl text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Full-funnel AI-Powered
              <br />
              Platform.
            </h2>
            <p className="max-w-lg font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-slate)] md:text-[18px] md:leading-[26px]">
              Lemma&apos;s AI stack powers the entire advertising journey from intelligent
              planning and precise targeting to dynamic optimization and real-time measurement.
            </p>
          </FadeUp>
          <FadeUp delay={0.08} className="justify-self-center lg:justify-self-end">
            <Image
              src={FUNNEL_IMAGE}
              alt="Full-funnel AI from awareness to loyalty across DOOH, CTV, mobile, web and social"
              width={719}
              height={460}
              unoptimized
              className="h-auto w-full max-w-[719px] object-contain"
            />
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {data.map((feature) => (
            <article
              key={feature.id}
              className="flex h-full flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6"
            >
              <div
                className="flex size-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: feature.accentSoft }}
              >
                <FeatureIcon feature={feature} />
              </div>
              <h3 className="text-[20px] font-bold tracking-[-0.4px] text-[var(--color-ink)]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-[22px] text-[var(--color-slate)]">
                <HighlightedText
                  text={feature.description}
                  highlight={feature.highlight}
                  color={feature.accent}
                />
              </p>
              <div
                className="h-[2px] w-full"
                style={{
                  background: `linear-gradient(to right, ${feature.accent} 0%, transparent 100%)`,
                }}
              />
              <ul className="mt-1 space-y-2.5">
                {feature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[14px] leading-[20px] text-[rgba(3,10,17,0.85)]"
                  >
                    <span
                      className="mt-[7px] size-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: feature.accent }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#ai" variant="primary">
            learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
