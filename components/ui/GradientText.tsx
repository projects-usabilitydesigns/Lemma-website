import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_ACCENT = "Lemmaximize";

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("gradient-text inline-block", className)}>{children}</span>;
}

/** Wraps the first occurrence of `accent` in the shared CTA text gradient. */
export function withGradientAccent(text: string, accent = DEFAULT_ACCENT): ReactNode {
  const index = text.indexOf(accent);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <GradientText>{accent}</GradientText>
      {text.slice(index + accent.length)}
    </>
  );
}
