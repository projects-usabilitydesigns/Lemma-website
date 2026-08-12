"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { animation } from "@/lib/design-system";

export function NewsroomHero() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
      <Container className="relative flex min-h-[220px] items-end justify-center pb-10 pt-[120px] md:min-h-[280px] md:pb-14 md:pt-[130px]">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animation.duration.slow, ease: animation.easeOut }}
          className="font-heading text-center text-[40px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[56px]"
        >
          Newsroom
        </motion.h1>
      </Container>
    </section>
  );
}
