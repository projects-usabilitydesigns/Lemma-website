"use client";

import Image from "next/image";
import { Eye, Flag } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutPrinciples } from "@/lib/about-data";

function PrincipleCard({
  title,
  description,
  image,
  icon,
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="group grid h-full overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[#f7f8f9] sm:grid-cols-2 sm:grid-rows-1">
      <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
        <div className="flex size-11 items-center justify-center rounded-[10px] bg-[#e8f4fb] text-[var(--color-blue)]">
          {icon}
        </div>
        <h3 className="text-[22px] font-semibold tracking-[-0.3px] text-[var(--color-ink)] md:text-[24px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.65] text-[var(--color-slate)] md:text-[15px]">
          {description}
        </p>
      </div>
      <div className="relative min-h-[220px] sm:min-h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-right"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    </article>
  );
}

export function AboutPrinciples() {
  return (
    <section id="principles" className="bg-white pb-8 pt-10 md:pb-12 md:pt-16">
      <Container>
        <div className="mb-10 lg:mb-12">
          <FadeUp className="space-y-5">
            <SectionLabel label="Strategic mission" accent="blue" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Our guiding principles
            </h2>
          </FadeUp>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <FadeUp delay={0.05} className="h-full">
            <PrincipleCard
              title={aboutPrinciples.vision.title}
              description={aboutPrinciples.vision.description}
              image={aboutPrinciples.vision.image}
              icon={<Eye className="size-5" strokeWidth={1.75} />}
            />
          </FadeUp>
          <FadeUp delay={0.1} className="h-full">
            <PrincipleCard
              title={aboutPrinciples.mission.title}
              description={aboutPrinciples.mission.description}
              image={aboutPrinciples.mission.image}
              icon={<Flag className="size-5" strokeWidth={1.75} />}
            />
          </FadeUp>
        </div>

        <FadeUp delay={0.12} className="mt-8 flex justify-center md:mt-10">
          <Button href="#values" variant="primary" arrow="right">
            Learn more
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
