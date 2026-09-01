"use client";

import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactHero } from "@/lib/contact-data";

export function ContactCta() {
  return (
    <section className="bg-[#ECF1F4] py-10 md:py-14">
      <Container>
        <FadeUp className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading max-w-2xl text-[28px] font-semibold tracking-[-0.5px] text-[var(--color-ink)] md:text-[36px] md:leading-[1.2]">
            Prefer to see the platform first?
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[var(--color-slate)] md:text-[19px]">
            Book a tailored walkthrough of the Lemma stack, or write to our sales team at{" "}
            <a
              href={`mailto:${contactHero.salesEmail}`}
              className="font-semibold text-[var(--color-blue-link)] hover:underline"
            >
              {contactHero.salesEmail}
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="/request-demo"
              variant="primary"
              arrow="none"
              className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
            >
              Request A Demo
            </Button>
            <Button
              href="/#products"
              variant="outline"
              arrow="right"
              className="normal-case tracking-normal px-8 py-3 text-[16px] font-semibold"
            >
              Explore Platforms
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
