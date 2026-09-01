"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
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

export function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden py-10 md:py-14">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-home-mesh)]" />

      <Container className="relative text-center">
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <SectionLabel label="Let's talk" />
          <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
            Make your next
            <br />
            campaign unmissable
          </h2>
          <p className="max-w-xl text-[18px] leading-7 text-[var(--color-slate)] md:text-[20px]">
            Tell us how to reach you. You&apos;ll hear back within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <MagneticButton>
              <Button
                href="mailto:contactus@lemmamedia.com"
                variant="primary"
                arrow="up-right"
                className="normal-case tracking-normal text-[16px] font-semibold"
              >
                Get in touch
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                href="#products"
                variant="secondary"
                arrow="none"
                className="normal-case tracking-normal text-[16px] font-semibold"
              >
                See products
              </Button>
            </MagneticButton>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
