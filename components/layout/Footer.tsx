"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/lib/data";

const aiTools = [
  { name: "ChatGPT", src: "/icons/ai-chatgpt.svg" },
  { name: "Gemini", src: "/icons/ai-gemini.svg" },
  { name: "Claude", src: "/icons/ai-claude.svg" },
  { name: "Perplexity", src: "/icons/ai-perplexity.svg" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white pb-12 pt-12">
      <Container>
        <FadeUp>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-2">
              <Link href="/" className="relative mb-6 block h-9 w-[152px]">
                <Image src="/images/logo-lemma.svg" alt="LEMMA" fill className="object-contain object-left" />
              </Link>
              <ul className="space-y-2 text-[14px] text-[var(--color-slate)]">
                <li className="flex items-start gap-3">
                  <span className="flex size-12 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                    <MapPin className="size-5 text-[var(--color-blue-link)]" />
                  </span>
                  <span>
                    NEW YORK 530 Fifth Ave, 9th Floor,
                    <br />
                    New York, 10036, US
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                    <Mail className="size-5 text-[var(--color-blue-link)]" />
                  </span>
                  <a href="mailto:contactus@lemmamedia.com" className="hover:underline">
                    contactus@lemmamedia.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                    <Phone className="size-5 text-[var(--color-blue-link)]" />
                  </span>
                  <a href="tel:+0012345678" className="hover:underline">
                    +00 12345678
                  </a>
                </li>
              </ul>
            </div>

            {[
              { title: "Products", items: footerLinks.products },
              { title: "Solutions", items: footerLinks.solutions },
              { title: "Company", items: footerLinks.company },
            ].map((col) => (
              <div key={col.title}>
                <p className="mb-5 text-[12px] uppercase tracking-[2.4px] text-[var(--color-slate)]">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="group relative text-[16px] text-[var(--color-ink)]"
                      >
                        <span>{item}</span>
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="my-8 h-px w-full bg-[var(--color-border)]" />

        <FadeUp delay={0.1} className="flex flex-col items-center gap-3 text-center">
          <p className="text-[16px] uppercase text-[var(--color-slate-soft)]">
            &quot;ASK AI FOR A SUMMARY OF CURATED MEDIA&quot;
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {aiTools.map((tool) => (
              <a
                key={tool.name}
                href="#"
                aria-label={tool.name}
                className="relative size-[55px] overflow-hidden rounded-full transition-transform duration-300 hover:scale-110"
              >
                <Image src={tool.src} alt={tool.name} fill className="object-contain" />
              </a>
            ))}
          </div>
        </FadeUp>

        <div className="my-8 h-px w-full bg-[var(--color-border)]" />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="relative h-[62px] w-[268px]">
            <Image src="/images/iab-footer.png" alt="IAB partners" fill className="object-contain" />
          </div>
          <div className="relative h-[62px] w-[350px] max-w-full">
            <Image src="/images/partners-footer.png" alt="Industry partners" fill className="object-contain" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-[12px] text-[var(--color-slate)] md:flex-row md:items-center">
          <p>© 2026 Lemma Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((item) => (
              <Link key={item} href="#" className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
