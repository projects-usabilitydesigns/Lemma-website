"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { animation } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  scale?: number;
};

function useReveal(reduced: boolean) {
  return {
    initial: reduced ? false : true,
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduced ? 0 : animation.duration.base,
      ease: animation.easeOut,
    },
  } as const;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={base.viewport}
      transition={{ ...base.transition, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={base.viewport}
      transition={{ ...base.transition, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({
  children,
  className,
  delay = 0,
  x = -32,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, x }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={base.viewport}
      transition={{ ...base.transition, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({
  children,
  className,
  delay = 0,
  x = 32,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, x }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={base.viewport}
      transition={{ ...base.transition, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  scale = 0.96,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, scale }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={base.viewport}
      transition={{ ...base.transition, delay: reduced ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const base = useReveal(reduced);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, filter: "blur(10px)", y: 16 }}
      whileInView={
        reduced ? undefined : { opacity: 1, filter: "blur(0px)", y: 0 }
      }
      viewport={base.viewport}
      transition={{
        duration: reduced ? 0 : animation.duration.slow,
        ease: animation.easeOut,
        delay: reduced ? 0 : delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduced ? 0 : animation.stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: animation.duration.base, ease: "easeOut" as const },
  },
};
