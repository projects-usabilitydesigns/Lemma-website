"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { solutions as defaultSolutions } from "@/lib/data";
import type { Solution } from "@/types";

export function Solutions({
  solutions,
  id = "solutions",
  label = "Solutions",
  title,
  description,
  ctaLabel = "Learn more",
  showBackground = true,
  showFooterCta = true,
}: {
  solutions?: Solution[];
  id?: string;
  label?: string;
  title?: ReactNode;
  description?: string;
  ctaLabel?: string;
  showBackground?: boolean;
  showFooterCta?: boolean;
}) {
  const data = solutions?.length ? solutions : defaultSolutions;
  return (
    <section id={id} className="relative overflow-hidden bg-white py-10 md:py-14">
      {showBackground ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[min(720px,52%)] items-center justify-end md:flex"
        >
          <Image
            src="/images/solutions/bg.png"
            alt=""
            width={1024}
            height={935}
            className="h-[85%] w-auto max-w-none object-contain object-right opacity-[0.12]"
            sizes="45vw"
            priority={false}
          />
        </div>
      ) : null}

      <Container className="relative z-10">
        <div className="mb-8">
          <FadeUp className={`${description ? "max-w-3xl" : "max-w-xl"} space-y-3 md:space-y-4`}>
            {label ? <SectionLabel label={label} /> : null}
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              {title ?? (
                <>
                  Built for the people
                  <br />
                  who move media.
                </>
              )}
            </h2>
            {description ? (
              <p className="max-w-2xl text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
                {description}
              </p>
            ) : null}
          </FadeUp>
        </div>

        <Stagger className="grid gap-6 lg:grid-cols-2">
          {data.map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="grid overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-[var(--color-cream)] transition-shadow duration-300 hover:shadow-[0px_12px_40px_rgba(9,19,26,0.12)] md:rounded-none md:grid-cols-5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-2 md:aspect-auto md:min-h-[376px]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-[center_42%] transition-transform duration-700 hover:scale-105 md:object-center"
                  />
                ) : null}
                <p className="absolute left-3 top-3 text-[40px] font-extralight leading-none tracking-[-1.2px] text-[rgba(3,10,17,0.85)] md:left-4 md:top-4 md:text-[60px]">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col p-5 pb-6 md:col-span-3 md:p-7">
                <p className="text-[11px] font-medium uppercase tracking-[2.16px] text-[var(--color-slate)] md:text-[12px]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-[22px] font-bold tracking-[-0.44px] text-[var(--color-ink)] md:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[22px] text-[var(--color-slate)] md:text-[16px]">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[14px] text-[var(--color-ink)]"
                    >
                      <span className="size-1.5 shrink-0 bg-[var(--color-pink)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 md:mt-6">
                  <Button
                    href={item.href}
                    variant="outline"
                    arrow="none"
                    lift={false}
                    className="w-full normal-case tracking-normal px-6 py-3 text-[15px] font-semibold sm:w-auto sm:px-8 sm:text-[16px]"
                  >
{ctaLabel}
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>

        {showFooterCta ? (
          <div className="mt-8 flex justify-center">
            <Button href="#cta" variant="primary">
              learn more
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
