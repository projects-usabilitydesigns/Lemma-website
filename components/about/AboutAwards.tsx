import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutAwards as defaultAwards } from "@/lib/about-data";
import type { Award } from "@/lib/about-data";

export function AboutAwards({ awards }: { awards?: Award[] }) {
  const data = awards?.length ? awards : defaultAwards;

  return (
    <section className="bg-[var(--color-cream-soft)] py-16 md:py-[100px]">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <SectionLabel label="Recognition" accent="blue" />
            <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Success starts with
              <br />
              our progress
            </h2>
          </div>
          <p className="max-w-sm text-[16px] leading-[1.5] text-[var(--color-slate)]">
            Industry recognition for innovation in AdTech, DOOH, CTV, and omnichannel attribution.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((award) => (
            <article
              key={award.id}
              className="group flex flex-col items-center rounded-[16px] border border-[var(--color-border)] bg-white p-4 text-center transition-shadow hover:shadow-[0px_8px_24px_rgba(9,19,26,0.08)]"
            >
              <div className="relative mb-4 aspect-[277/400] w-full max-w-[180px] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain object-center"
                  sizes="180px"
                />
              </div>
              <p className="mb-1 text-[12px] font-semibold uppercase tracking-[2px] text-[var(--color-blue)]">
                {award.year}
              </p>
              <h3 className="text-[13px] font-medium leading-[1.4] text-[var(--color-ink)]">
                {award.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
