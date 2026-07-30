"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { solutions } from "@/lib/data";

export function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-16 md:py-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-[min(640px,58%)] items-center justify-end md:w-[min(720px,52%)]"
      >
        <Image
          src="/images/solutions/bg.png"
          alt=""
          width={1024}
          height={935}
          className="h-[85%] w-auto max-w-none object-contain object-right opacity-45"
          sizes="(max-width: 768px) 60vw, 45vw"
          priority={false}
        />
      </div>

      <Container className="relative z-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <FadeUp className="max-w-xl space-y-5">
            <SectionLabel label="Solutions" />
            <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Built for the people
              <br />
              who move media.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-sm text-[16px] leading-[22px] text-[var(--color-slate)] lg:text-right">
              One platform — two sides of the same outcome.
            </p>
          </FadeUp>
        </div>

        <Stagger className="grid gap-6 lg:grid-cols-2">
          {solutions.map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="grid overflow-hidden border border-[var(--color-border)] bg-[var(--color-cream)] transition-shadow duration-300 hover:shadow-[0px_12px_40px_rgba(9,19,26,0.12)] md:grid-cols-5"
            >
              <div className="relative min-h-[220px] md:col-span-2 md:min-h-[376px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-bottom grayscale transition-transform duration-700 hover:scale-105"
                />
                <p className="absolute left-4 top-4 text-[60px] font-extralight tracking-[-1.2px] text-[rgba(3,10,17,0.85)]">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col p-7 md:col-span-3">
                <p className="text-[12px] font-medium uppercase tracking-[2.16px] text-[var(--color-slate)]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-[24px] font-bold tracking-[-0.44px] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[22px] text-[var(--color-slate)]">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]">
                      <span className="size-1.5 bg-[var(--color-pink)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.href}
                  className="mt-6 inline-flex w-fit items-center justify-between gap-6 border border-[var(--color-border)] px-[17px] py-[13px] text-[14px] font-medium text-[var(--color-ink-deep)] transition hover:-translate-y-0.5"
                >
                  Talk to our team
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button href="#cta" variant="primary">
            learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
