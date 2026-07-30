"use client";

import {
  BarChart3,
  Crosshair,
  Link2,
  Map,
  Palette,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brandsCapabilities, type BrandsCapability } from "@/lib/solutions-brands-data";

const icons = {
  users: Users,
  map: Map,
  palette: Palette,
  crosshair: Crosshair,
  barChart: BarChart3,
  link: Link2,
  sparkles: Sparkles,
  shopping: ShoppingBag,
} as const;

function CapabilityCard({ item }: { item: BrandsCapability }) {
  const Icon = icons[item.icon];
  return (
    <motion.article
      variants={staggerItem}
      className="group rounded-[18px] border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,143,219,0.35)] hover:shadow-[0_14px_32px_rgba(9,19,26,0.08)]"
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[rgba(0,143,219,0.08)] text-[var(--color-blue)] transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-[17px] font-semibold text-[var(--color-ink)]">
        {item.title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-slate)]">
        {item.description}
      </p>
    </motion.article>
  );
}

export function PlatformFeatures() {
  return (
    <section className="bg-[var(--color-cream-soft)] py-16 md:py-[90px]">
      <Container>
        <FadeUp className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <SectionLabel label="Platform capabilities" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Everything brands need to activate with confidence
          </h2>
        </FadeUp>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.06}>
          {brandsCapabilities.map((item) => (
            <CapabilityCard key={item.id} item={item} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
