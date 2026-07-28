"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  arrow?: "right" | "up-right" | "none";
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "text-white border-0 px-10 py-3.5 rounded-full uppercase tracking-[2.5px] text-[14px] font-semibold shadow-none hover:shadow-[0_10px_30px_rgba(237,46,128,0.35)]",
  secondary:
    "bg-white text-[var(--color-ink)] border border-[var(--color-border)] px-8 py-[17px] rounded-full text-[14px] font-medium",
  outline:
    "bg-white text-black border border-black px-7 py-4 rounded-full text-[18px] font-semibold",
  ghost:
    "bg-transparent text-[var(--color-blue-link)] text-[18px] font-medium capitalize px-0 py-0",
  link: "bg-transparent text-[var(--color-blue-learn)] text-[14px] font-medium capitalize px-0 py-0",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  arrow = "right",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const ArrowIcon = arrow === "up-right" ? ArrowUpRight : ArrowRight;

  const inner = (
    <>
      <span>{children}</span>
      {arrow !== "none" ? (
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon className="size-4" strokeWidth={2} />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group inline-flex cursor-pointer items-center justify-center gap-2.5 transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-pink)] focus-visible:ring-offset-2",
    variants[variant],
    className,
  );

  const style =
    variant === "primary"
      ? { backgroundImage: "var(--gradient-cta)" }
      : undefined;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} aria-label={ariaLabel} className={classes} style={style}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      style={style}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {inner}
    </motion.button>
  );
}
