"use client";

import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutPrinciples } from "@/lib/about-data";

function Asset({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}

function VisionShapes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="1251 119 263 463"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="xMaxYMax meet"
    >
      <path d="M1329.68 119H1341.48V205.899H1446.56V229.386H1329.68V119Z" fill="#009245" />
      <path d="M1430.83 323.331H1446.56V367.368L1430.83 352.689V323.331Z" fill="#39B54A" />
      <path d="M1360.02 291.037H1430.83L1438.13 299.844V330.377H1360.02V291.037Z" fill="#FFFBE0" />
      <path opacity="0.7" d="M1360.02 291.037H1430.83L1438.13 299.844H1360.02V291.037Z" fill="#FCDBB3" />
      <path d="M1329.68 302.78L1360.02 291.037V361.496L1329.68 379.111V302.78Z" fill="url(#vision-shape-blue)" />
      <path d="M1430.83 330.378H1360.02V411.406H1430.83V330.378Z" fill="#0080D6" />
      <path d="M1428.02 410.229H1360.02V464.247H1428.02V410.229Z" fill="#F4A3C4" />
      <path d="M1360.02 411.406H1329.68V451.333H1360.02V411.406Z" fill="#FF4500" />
      <path d="M1329.68 451.329H1360.02L1329.68 478.925V451.329Z" fill="#FF4500" />
      <path d="M1318.44 470.119H1446.56L1514 581.679H1251L1318.44 470.119Z" fill="#FF4500" />
      <path d="M1428.02 411.406H1446.56V470.122L1428.02 440.764V411.406Z" fill="#FF4500" />
      <path d="M1395.99 468.946L1442.63 533.534H1352.15L1395.99 468.946Z" fill="white" />
      <defs>
        <linearGradient
          id="vision-shape-blue"
          x1="1329.68"
          y1="291.037"
          x2="1383.93"
          y2="309.73"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0055B8" />
          <stop offset="1" stopColor="#0080FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const cardSurface =
  "relative overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#C4E8FF_0%,#ECFFE0_100%)]";

const cardText =
  "min-w-0 font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[24px] tracking-normal text-[var(--color-ink)]";

export function AboutPrinciples() {
  return (
    <section id="principles" className="overflow-x-clip bg-white py-10 md:py-14">
      <Container>
        <div className="mb-8 grid items-center gap-6 lg:mb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <FadeUp className="space-y-4">
            <SectionLabel label="Strategic mission" />
            <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Our guiding principles
            </h2>
          </FadeUp>
          <FadeUp delay={0.06}>
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[22px] tracking-normal text-[var(--color-ink)]">
              {aboutPrinciples.intro}
            </p>
          </FadeUp>
        </div>

        <div className="space-y-6 md:space-y-8">
          <FadeUp>
            <article className={`${cardSurface} lg:h-[613px]`}>
              <VisionShapes className="pointer-events-none absolute bottom-0 right-0 hidden h-[90%] w-[180px] lg:block" />
              <div className="relative z-10 flex h-full flex-col items-center gap-8 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:gap-8 lg:px-16 lg:py-0">
                <p className={`${cardText} max-w-[400px]`}>
                  {aboutPrinciples.vision.description}
                </p>

                <div className="relative h-auto w-full max-w-[683px] shrink-0 aspect-[683/491] lg:ml-auto lg:h-[491px] lg:w-[683px] lg:max-w-none">
                  <Asset
                    src={aboutPrinciples.vision.image}
                    alt="Our Vision"
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.06}>
            <article className={`${cardSurface} lg:h-[613px]`}>
              <div
                aria-hidden
                className="absolute left-0 top-1/2 z-10 hidden w-11 -translate-y-1/2 flex-col items-stretch lg:flex"
              >
                <span className="aspect-square w-full bg-[#f5ecd4]" />
                <span className="aspect-square w-full bg-[#ff0080]" />
                <span
                  className="aspect-[8/7] w-full bg-[#ff0080]"
                  style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                />
                <span
                  className="-mt-px aspect-square w-[118%] bg-[#74be44]"
                  style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
                />
              </div>
              <div className="relative z-10 flex h-full flex-col-reverse items-center gap-8 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:gap-8 lg:px-16 lg:py-0">
                <div className="relative h-auto w-full max-w-[680px] shrink-0 aspect-[680/458] lg:h-[458px] lg:w-[680px] lg:max-w-none">
                  <Asset
                    src={aboutPrinciples.mission.image}
                    alt="Our Mission"
                    className="h-full w-full object-fill"
                  />
                </div>

                <p className={`${cardText} w-full max-w-[433px] lg:ml-auto lg:h-[117px] lg:w-[433px] lg:shrink-0`}>
                  {aboutPrinciples.mission.description}
                </p>
              </div>
            </article>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
