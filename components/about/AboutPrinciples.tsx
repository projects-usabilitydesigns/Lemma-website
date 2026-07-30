import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutAssets } from "@/lib/about-data";

export function AboutPrinciples() {
  return (
    <section className="bg-white pb-6 pt-16 md:pb-10 md:pt-[100px]">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div className="space-y-5">
            <SectionLabel label="Strategic mission" accent="blue" />
            <h2 className="text-[32px] font-semibold tracking-[-0.72px] text-[var(--color-ink)] md:text-[45px] md:leading-[50px]">
              Our guiding{" "}
              <span
                style={{
                  backgroundImage: "var(--gradient-brand)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                principles
              </span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.65] text-[var(--color-slate)] lg:pt-10">
            Empowering businesses with innovative, transparent, and technology-driven advertising
            solutions, building a smarter digital future through adaptability, collaboration, and
            sustainable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[673/357] w-full overflow-hidden rounded-[20px]">
            <Image
              src={aboutAssets.vision}
              alt="Our Vision"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[673/357] w-full overflow-hidden rounded-[20px]">
            <Image
              src={aboutAssets.mission}
              alt="Our Mission"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#values" variant="primary" arrow="right">
            learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
