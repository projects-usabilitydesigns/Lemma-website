"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export function LinkArrow({
  href,
  children,
  className,
  color = "text-[var(--color-blue-learn)]",
}: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-medium capitalize",
        color,
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
