"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
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
    <section id="cta" className="relative overflow-hidden py-24 md:py-40">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(244,114,182,0.28), transparent 55%), radial-gradient(circle at 85% 20%, rgba(129,140,248,0.24), transparent 50%), radial-gradient(circle at 50% 100%, rgba(94,234,212,0.22), transparent 55%), linear-gradient(135.27deg, #fdf2f8 0%, #ede9fe 50%, #ecfccb 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-pink-300/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-indigo-300/30 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7">
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
              <Button href="mailto:contactus@lemmamedia.com" variant="primary" arrow="up-right">
                Get in touch
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#products" variant="secondary" arrow="none">
                See products
              </Button>
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
