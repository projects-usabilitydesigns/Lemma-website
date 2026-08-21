"use client";

import { Check, Mail, Phone } from "lucide-react";
import { BlurReveal, FadeLeft, FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactHero } from "@/lib/contact-data";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-[121px] md:pb-20 md:pt-[135px]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(0,143,219,0.18), transparent 45%), radial-gradient(circle at 88% 20%, rgba(0,143,219,0.16), transparent 48%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div className="space-y-7 lg:pt-4">
            <FadeUp>
              <SectionLabel label={contactHero.label} />
            </FadeUp>

            <BlurReveal>
              <h1 className="font-heading max-w-xl text-[36px] font-semibold leading-[1.08] tracking-[-0.72px] text-[var(--color-ink)] md:text-[52px]">
                {contactHero.title}
              </h1>
            </BlurReveal>

            <FadeUp delay={0.1}>
              <p className="max-w-xl text-[17px] leading-relaxed text-[var(--color-ink-muted)] md:text-[19px]">
                {contactHero.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="grid max-w-xl gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${contactHero.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/80 p-4 transition hover:border-[var(--color-blue)] hover:bg-white"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(21,129,197,0.1)] text-[var(--color-blue-link)]">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]">
                      Email us
                    </span>
                    <span className="block truncate text-[15px] font-semibold text-[var(--color-ink)]">
                      {contactHero.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${contactHero.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/80 p-4 transition hover:border-[var(--color-blue)] hover:bg-white"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,147,82,0.1)] text-[var(--color-green)]">
                    <Phone className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]">
                      Call us
                    </span>
                    <span className="block truncate text-[15px] font-semibold text-[var(--color-ink)]">
                      {contactHero.phone}
                    </span>
                  </span>
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.22}>
              <ul className="space-y-3.5 border-t border-[var(--color-border)] pt-6">
                {contactHero.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] text-[var(--color-ink-muted)] md:text-[17px]"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(0,143,219,0.12)] text-[var(--color-pink)]">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <FadeLeft delay={0.12}>
            <ContactForm />
          </FadeLeft>
        </div>
      </Container>
    </section>
  );
}
