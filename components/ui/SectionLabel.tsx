import { cn } from "@/lib/utils";

type SectionLabelProps = {
  label: string;
  align?: "left" | "center";
  accent?: "pink" | "blue";
  dual?: boolean;
  className?: string;
};

export function SectionLabel({
  label,
  align = "left",
  accent = "pink",
  dual = false,
  className,
}: SectionLabelProps) {
  const line =
    accent === "pink" ? "bg-[var(--color-pink)]" : "bg-[var(--color-blue)]";

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center w-full",
        className,
      )}
    >
      <span className={cn("h-px w-8 shrink-0", line)} aria-hidden />
      <span className="text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-slate)]">
        {label}
      </span>
      {dual ? <span className={cn("h-px w-8 shrink-0", line)} aria-hidden /> : null}
    </div>
  );
}
