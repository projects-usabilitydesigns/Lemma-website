"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutImage } from "@/lib/about-data";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.2);
    y.set(dy * 0.2);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

const lemmaximizeGradient = {
  backgroundImage: "var(--gradient-cta)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
} as const;

export function AboutCta() {
  return (
    <section
      id="cta"
      className="relative flex h-[589.59px] items-center overflow-hidden"
    >
      <Image
        src={aboutImage("Frame 1597889838.png")}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />

      <Container className="relative text-center">
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center gap-6 md:gap-7">
          <SectionLabel label="Let's talk" align="center" />
          <h2 className="font-heading text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Want to <span style={lemmaximizeGradient}>Lemmaximize</span> your
            <br />
            campaigns/ inventory?
          </h2>
          <p className="max-w-xl text-[16px] leading-7 text-[var(--color-slate)] md:text-[18px]">
            Tell us how to reach you and you&apos;ll hear from us in 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton>
              <Button
                href="mailto:contactus@lemmamedia.com"
                variant="primary"
                arrow="up-right"
                className="normal-case tracking-normal border-white/[0.08] text-white hover:shadow-[0_10px_30px_rgba(0,143,219,0.28)]"
                style={{ backgroundImage: "var(--gradient-cta)" }}
              >
                Get in touch
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/#products" variant="secondary" arrow="none">
                See products
              </Button>
            </MagneticButton>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
