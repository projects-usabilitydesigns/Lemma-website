import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/lib/data";

const aiTools = [
  { name: "ChatGPT", src: "/icons/ai-chatgpt.svg" },
  { name: "Gemini", src: "/icons/ai-gemini.svg" },
  { name: "Claude", src: "/icons/ai-claude.svg" },
  { name: "Perplexity", src: "/icons/ai-perplexity.svg" },
];

const footerHrefMap: Record<string, string> = {
  About: "/about",
  Contact: "/#cta",
  "Case Studies": "/#case-studies",
};

const linkColumns = [
  { title: "Products", items: footerLinks.products },
  { title: "Solutions", items: footerLinks.solutions },
  { title: "Company", items: footerLinks.company },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <Container className="pt-14 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div>
            <Link href="/" className="relative mb-8 block h-8 w-[147px]" aria-label="Lemma home">
              <Image
                src="/images/footer-logo.svg"
                alt="LEMMA"
                fill
                className="object-contain object-left"
              />
            </Link>
            <ul className="space-y-4 text-[14px] leading-[1.45] text-[var(--color-slate)]">
              <li className="flex items-start gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                  <MapPin className="size-5 text-[var(--color-blue-link)]" />
                </span>
                <span>
                  NEW YORK 530 Fifth Ave, 9th Floor,
                  <br />
                  New York, 10036, US
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                  <Mail className="size-5 text-[var(--color-blue-link)]" />
                </span>
                <a href="mailto:contactus@lemmamedia.com" className="hover:underline">
                  contactus@lemmamedia.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center bg-[rgba(21,129,197,0.1)]">
                  <Phone className="size-5 text-[var(--color-blue-link)]" />
                </span>
                <a href="tel:+0012345678" className="hover:underline">
                  +00 12345678
                </a>
              </li>
            </ul>
          </div>

          {linkColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-[12px] font-medium uppercase tracking-[2.4px] text-[var(--color-slate)]">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={footerHrefMap[item] ?? "#"}
                      className="group relative inline-block text-[16px] text-[var(--color-ink)]"
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

        <div className="my-10 h-px w-full bg-[var(--color-border)]" />

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] uppercase tracking-[1.4px] text-[var(--color-slate-soft)] md:text-[16px]">
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
        </div>

        <div className="my-10 h-px w-full bg-[var(--color-border)]" />

        <div className="flex justify-center">
          <div className="relative h-[62px] w-full max-w-[720px]">
            <Image
              src="/images/partners-footer.svg"
              alt="IAB, IAB Tech Lab, Unified ID Solution, and HUMAN"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-[12px] text-[var(--color-slate)] md:flex-row md:items-center">
          <p>© 2026 Lemma Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
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
