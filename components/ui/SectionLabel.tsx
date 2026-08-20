import { cn } from "@/lib/utils";

type SectionLabelProps = {
  label: string;
  align?: "left" | "center";
  accent?: "blue" | "green";
  dual?: boolean;
  className?: string;
};

export function SectionLabel({
  label,
  align = "left",
  accent = "blue",
  dual = false,
  className,
}: SectionLabelProps) {
  const line =
    accent === "green"
      ? "bg-[var(--color-green)]"
      : "bg-[var(--color-blue)]";

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
      {dual ? (
        <span className="h-px w-8 shrink-0 bg-[var(--color-green)]" aria-hidden />
      ) : null}
    </div>
  );
}
