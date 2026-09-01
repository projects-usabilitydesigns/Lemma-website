"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { demoProducts } from "@/lib/request-demo-data";

export function RequestDemoProducts() {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <FadeUp className="mx-auto mb-8 max-w-2xl space-y-4 text-center">
          <SectionLabel label="What we'll show you" align="center" dual />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Four products. One outcome engine.
          </h2>
          <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            Your demo is shaped around the products that fit your goals—whether you&apos;re
            activating campaigns or monetizing inventory.
          </p>
        </FadeUp>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.06}>
          {demoProducts.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(9,19,26,0.1)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: product.accent }}
                aria-hidden
              />

              <div className="relative mb-5 h-6 w-full max-w-[180px]">
                <Image
                  src={product.logo}
                  alt={`LEMMA ${product.name}`}
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="text-[12px] font-semibold uppercase tracking-[1.6px] text-[var(--color-slate)]">
                {product.tagline}
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
                {product.description}
              </p>

              <ul className="mt-5 mb-6 flex-1 space-y-2.5">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[15px] text-[var(--color-ink-muted)]"
                  >
                    <span
                      className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: product.accent }}
                    >
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-blue-link)] transition-all group-hover:gap-2.5"
              >
                Learn more
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
