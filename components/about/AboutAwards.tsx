"use client";

import Image from "next/image";
import { FadeUp, Stagger, staggerItem } from "@/components/animation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutAwards, aboutImage } from "@/lib/about-data";

export function AboutAwards() {
  const topAwards = aboutAwards.slice(0, 8);
  const bottomAwards = aboutAwards.slice(8);

  return (
    <section className="bg-white pb-8 pt-8 md:pb-12 md:pt-10">
      <Container>
        <div className="mb-12 lg:mb-16">
          <FadeUp className="space-y-5">
            <SectionLabel label="Our Awards" accent="blue" />
            <div className="flex items-center gap-6 xl:gap-8">
              <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-black md:text-[45px] md:leading-[50px]">
                Accolades that define
                <br />
                our progress
              </h2>
              <Image
                src={aboutImage("trophy-star 1.png")}
                alt=""
                width={80}
                height={80}
                className="hidden size-[72px] shrink-0 object-contain lg:block xl:size-[80px]"
              />
            </div>
          </FadeUp>
        </div>

        <Stagger className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topAwards.map((award) => (
            <motion.article
              key={award.id}
              variants={staggerItem}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-5 aspect-[277/400] w-full max-w-[160px] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain object-center"
                  sizes="160px"
                />
              </div>
              <p className="mb-1.5 text-[18px] font-bold text-[var(--color-ink)]">{award.year}</p>
              <h3 className="max-w-[200px] font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[1.45] text-[var(--color-slate)]">
                {award.title}
              </h3>
            </motion.article>
          ))}
        </Stagger>

        <Stagger
          delay={0.08}
          className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {bottomAwards.map((award) => (
            <motion.article
              key={award.id}
              variants={staggerItem}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-5 aspect-[277/400] w-full max-w-[160px] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain object-center"
                  sizes="160px"
                />
              </div>
              <p className="mb-1.5 text-[18px] font-bold text-[var(--color-ink)]">{award.year}</p>
              <h3 className="max-w-[200px] font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[1.45] text-[var(--color-slate)]">
                {award.title}
              </h3>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
