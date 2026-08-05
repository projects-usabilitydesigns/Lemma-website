"use client";

import {
  BarChart3,
  Layers,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsWhyFeatures, type BrandsFeature } from "@/lib/solutions-brands-data";
import { motion } from "framer-motion";

const icons = {
  target: Target,
  sparkles: Sparkles,
  layers: Layers,
  zap: Zap,
  chart: BarChart3,
} as const;

function FeatureCard({ feature }: { feature: BrandsFeature }) {
  const Icon = icons[feature.icon];
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(9,19,26,0.1)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${feature.accent}14, transparent 60%)`,
        }}
      />
      <div
        className="mb-5 flex size-12 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: feature.accent }}
      >
        <Icon className="size-5" strokeWidth={2} />
      </div>
      <h3 className="font-heading text-[18px] font-semibold text-[var(--color-ink)] md:text-[20px]">
        {feature.title}
      </h3>
      <p className="mt-2 text-[16px] leading-relaxed text-[var(--color-slate)]">
        {feature.description}
      </p>
    </motion.article>
  );
}

const brandsDefaults = {
  title: "Outcomes, not just reach.",
  description:
    "Lemma helps brands activate outdoor attention across every screen and measure what actually moves the business.",
  features: brandsWhyFeatures,
};

export function WhyLemma({
  title = brandsDefaults.title,
  description = brandsDefaults.description,
  features = brandsDefaults.features,
}: {
  title?: string;
  description?: string;
  features?: BrandsFeature[];
}) {
  return (
    <section className="bg-white py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <SectionLabel label="Why Lemma" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            {title}
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {description}
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5" delay={0.08}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
