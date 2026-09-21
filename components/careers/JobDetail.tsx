import { FadeUp } from "@/components/animation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BlogBodySection } from "@/lib/resources-page-data";
import type { CareersJobDetail } from "@/lib/careers-data";

function SectionBody({ sections }: { sections: BlogBodySection[] }) {
  if (sections.length === 0) return null;

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h3
              key={index}
              className="pt-3 font-heading text-[18px] font-semibold tracking-[-0.3px] text-[var(--color-ink)]"
            >
              {section.text}
            </h3>
          );
        }

        if (section.type === "list") {
          return (
            <ul
              key={index}
              className="list-disc space-y-1.5 pl-5 text-[15px] leading-[24px] text-[var(--color-slate)] marker:text-[var(--color-blue-learn)]"
            >
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }

        if (section.type === "blockquote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-[var(--color-blue)] pl-4 text-[15px] italic leading-[24px] text-[var(--color-slate)]"
            >
              {section.text}
            </blockquote>
          );
        }

        return (
          <p key={index} className="text-[15px] leading-[24px] text-[var(--color-slate)]">
            {section.text}
          </p>
        );
      })}
    </div>
  );
}

function DetailBlock({
  heading,
  sections,
}: {
  heading: string;
  sections: BlogBodySection[];
}) {
  if (sections.length === 0) return null;

  return (
    <FadeUp className="space-y-4">
      <h2 className="font-heading text-[24px] font-semibold tracking-[-0.48px] text-[var(--color-ink)] md:text-[28px]">
        {heading}
      </h2>
      <SectionBody sections={sections} />
    </FadeUp>
  );
}

export function JobDetail({ job }: { job: CareersJobDetail }) {
  const meta = [
    { label: "Role", value: job.role },
    { label: "Experience", value: job.experience },
    { label: "Location", value: job.location },
  ].filter((item) => item.value);

  return (
    <div className="space-y-10">
      <FadeUp className="space-y-5 pt-6">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13px] text-[var(--color-slate)]"
        >
          <Link href="/" className="transition hover:text-[var(--color-ink)]">
            Home
          </Link>
          <ChevronRight className="size-3.5 opacity-60" aria-hidden />
          <Link href="/careers" className="font-medium text-[var(--color-ink-muted)]">
            Careers
          </Link>
        </nav>
        <h1 className="font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.64px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.12]">
          {job.title}
        </h1>
        {meta.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {meta.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-[13px] font-medium text-[var(--color-slate)]"
              >
                <span className="text-[var(--color-ink)]">{item.label}:</span> {item.value}
              </span>
            ))}
          </div>
        ) : null}
      </FadeUp>

      <DetailBlock heading="About the Role" sections={job.about} />
      <DetailBlock heading="Key Responsibilities" sections={job.responsibilities} />
      <DetailBlock heading="Skills & Qualifications" sections={job.skills} />
      <DetailBlock heading="Soft Skills" sections={job.softSkills} />

      {job.note.length > 0 ? (
        <FadeUp className="rounded-[16px] border border-[#b8dfef] bg-[#eef7fd] p-5 md:p-6">
          <h2 className="mb-3 font-heading text-[18px] font-semibold tracking-[-0.3px] text-[var(--color-ink)]">
            Note
          </h2>
          <SectionBody sections={job.note} />
        </FadeUp>
      ) : null}
    </div>
  );
}
