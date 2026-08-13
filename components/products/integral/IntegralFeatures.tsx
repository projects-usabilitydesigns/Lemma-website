"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, ScaleIn } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  integralFeatures,
} from "@/lib/integral-data";
import { animation } from "@/lib/design-system";
import { cn } from "@/lib/utils";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;
  const pattern = highlights
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  return text.split(regex).map((part, index) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    if (!isHighlight) return <span key={`${part}-${index}`}>{part}</span>;
    return (
      <strong key={`${part}-${index}`} className="font-semibold text-[#111]">
        {part}
      </strong>
    );
  });
}

const badgeClass = {
  "bottom-right":
    "absolute bottom-[4%] right-[2%] z-20 size-[84px] md:size-[96px] lg:size-[104px]",
  "bottom-center":
    "absolute bottom-[2%] left-1/2 z-20 size-[84px] -translate-x-1/2 md:size-[96px] lg:size-[104px]",
} as const;

type FeatureWithBadge = Extract<
  (typeof integralFeatures)[number],
  { badge: string; badgeAlt: string; badgePosition: keyof typeof badgeClass }
>;

function hasBadge(feature: (typeof integralFeatures)[number]): feature is FeatureWithBadge {
  return "badge" in feature && "badgePosition" in feature;
}

function FeatureImage({
  feature,
  reduced,
}: {
  feature: (typeof integralFeatures)[number];
  reduced: boolean;
}) {
  return (
    <motion.div
      className="relative aspect-[5/4] w-full"
      animate={reduced ? undefined : { y: [0, -6, 0] }}
      transition={
        reduced
          ? undefined
          : {
              duration: 5.5 + (feature.id === "unified" ? 0.8 : 0),
              ease: "easeInOut",
              repeat: Infinity,
            }
      }
    >
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        fill
        className={cn(
          "object-contain object-center",
          feature.id !== "unified" && "mix-blend-screen",
        )}
        sizes="(max-width: 1024px) 100vw, 620px"
      />
    </motion.div>
  );
}

export function IntegralFeatures() {
  const reduced = useReducedMotion();

  return (
    <section className="overflow-x-clip bg-white pb-12 pt-0 md:pb-16">
      <Container className="flex flex-col gap-10 md:gap-14">
        {integralFeatures.map((feature) => {
          const imageLeft = feature.layout === "image-left";
          const paragraphs = feature.body.split("\n\n");
          const showBadge = hasBadge(feature);
          const ImageReveal = imageLeft ? FadeLeft : FadeRight;

          return (
            <div
              key={feature.id}
              className={cn(
                "grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10",
                imageLeft && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2",
              )}
            >
              <div className="flex w-full max-w-[520px] flex-col justify-center gap-2 rounded-[20px] bg-[#F2F2F2] px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8">
                  <h3
                    className={cn(
                      "font-[family-name:var(--font-inter)] font-semibold tracking-[-0.4px] text-[#111]",
                      feature.titleSize === 36
                        ? "text-[24px] leading-[1.25] md:text-[36px]"
                        : "text-[26px] leading-[1.2] md:text-[40px]",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <motion.div
                    className="my-0.5 h-px w-14 origin-left bg-gradient-to-r from-[var(--color-blue)] to-transparent"
                    aria-hidden
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={reduced ? undefined : { scaleX: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: animation.duration.base,
                      ease: animation.easeOut,
                      delay: 0.15,
                    }}
                  />
                  <div
                    className={cn(
                      "space-y-2 font-[family-name:var(--font-inter)] font-normal leading-[1.65] text-[#5a6570]",
                      feature.bodySize === 20 ? "text-[17px] md:text-[20px]" : "text-[18px]",
                    )}
                  >
                    {paragraphs.map((para) => (
                      <p key={para.slice(0, 24)}>{highlightText(para, feature.highlight)}</p>
                    ))}
                  </div>
                </div>

              <ImageReveal delay={0.08}>
                <div
                  className={cn(
                    "relative mx-auto isolate w-full max-w-[520px] md:max-w-[580px] lg:max-w-[620px]",
                    imageLeft ? "lg:mx-0 lg:justify-self-start" : "lg:mx-0 lg:justify-self-end",
                  )}
                >
                  <ScaleIn
                    delay={0.05}
                    scale={0.88}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #E8F6FF 0%, #FFE4F0 100%)",
                    }}
                    aria-hidden
                  />

                  <div className="relative z-10 w-full">
                    <FeatureImage feature={feature} reduced={reduced} />
                  </div>

                  {showBadge ? (
                    <motion.div
                      className={badgeClass[feature.badgePosition]}
                      initial={reduced ? false : { scale: 0.7, opacity: 0, y: 12 }}
                      whileInView={reduced ? undefined : { scale: 1, opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.22,
                      }}
                    >
                      <motion.div
                        animate={reduced ? undefined : { y: [0, -5, 0] }}
                        transition={
                          reduced
                            ? undefined
                            : {
                                duration: 3.8,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: 0.4,
                              }
                        }
                        className="size-full"
                      >
                        <Image
                          src={feature.badge}
                          alt={feature.badgeAlt}
                          width={104}
                          height={104}
                          className="size-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  ) : null}
                </div>
              </ImageReveal>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
