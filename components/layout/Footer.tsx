"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/lib/data";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

const aiPrompt =
  "What is Lemma Technologies, and how does its platform help advertisers, agencies, media owners, and network operators manage and monetize DOOH, CTV, OTT, and omnichannel advertising campaigns?";

const encodedPrompt = encodeURIComponent(aiPrompt);

const aiTools = [
  {
    name: "ChatGPT",
    src: "/icons/ai-chatgpt.svg",
    href: `https://chatgpt.com/?q=${encodedPrompt}&hints=search`,
  },
  {
    name: "Claude",
    src: "/icons/ai-claude.png",
    href: `https://claude.ai/new?q=${encodedPrompt}`,
  },
  {
    name: "Google AI",
    src: "/icons/ai-google.svg",
    href: `https://www.google.com/search?udm=50&q=${encodedPrompt}`,
  },
  {
    name: "Gemini",
    src: "/icons/ai-gemini.png",
    href: `https://gemini.google.com/app?q=${encodedPrompt}`,
  },
] as const;

type SocialIconProps = { className?: string };

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lemma-technologies",
    icon: LinkedInIcon,
  },
  {
    name: "X",
    href: "https://twitter.com/Lemma_DOOH",
    icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lemmamedia/",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC108pxBPed1tAJ5Mn0TXiPA/featured",
    icon: YouTubeIcon,
  },
];

const contactItems = [
  {
    icon: MapPin,
    href: undefined as string | undefined,
    content: (
      <span>
        NEW YORK 530 Fifth Ave, 9th Floor,
        <br />
        New York, 10036, US
      </span>
    ),
  },
  {
    icon: Mail,
    href: "mailto:contactus@lemmamedia.com",
    content: "contactus@lemmamedia.com",
  },
  {
    icon: Phone,
    href: "tel:+0012345678",
    content: "+00 12345678",
  },
] as const;

export function Footer() {
  const { openSettings } = useCookieConsent();
  return (
    <footer className="border-t border-[var(--color-border)] bg-white pb-6 pt-8 md:pt-10">
      <Container>
        <FadeUp>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(2,1fr)] lg:gap-10">
            <div>
              <Link href="/" className="relative mb-5 block h-8 w-[149px]">
                <Image
                  src="/images/logo-lemma.svg"
                  alt="LEMMA"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <ul className="space-y-3 text-[14px] leading-relaxed text-[var(--color-slate)]">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const textClass = item.href
                    ? "transition-colors duration-200 group-hover/contact:text-[var(--color-blue-link)]"
                    : undefined;
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[rgba(21,129,197,0.18)]">
                        <Icon className="size-4 text-[var(--color-blue-link)]" strokeWidth={2} />
                      </span>
                      {item.href ? (
                        <a href={item.href} className="group/contact">
                          <span className={textClass}>{item.content}</span>
                        </a>
                      ) : (
                        <span>{item.content}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {[
              { title: "Products", items: footerLinks.products },
              { title: "Solutions", items: footerLinks.solutions },
            ].map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-[12px] uppercase tracking-[2.4px] text-[var(--color-slate-soft)]">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group relative inline-block text-[15px] text-[var(--color-ink)] md:text-[16px]"
                      >
                        <span>{item.label}</span>
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="my-5 h-px w-full bg-[var(--color-border)] md:my-6" />

        <FadeUp
          delay={0.1}
          className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-center md:gap-8"
        >
          <div className="flex flex-col items-center gap-2.5 md:items-end">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[1.8px] text-[var(--color-slate-soft)] md:text-right md:text-[12px]">
              Ask AI to summarize Lemma
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              {aiTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask ${tool.name} about Lemma Technologies`}
                  title={`Ask ${tool.name} about Lemma Technologies`}
                  className="relative size-[42px] overflow-hidden rounded-full transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={42}
                    height={42}
                    unoptimized
                    className="size-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div
            className="h-px w-24 bg-[var(--color-border)] md:h-[56px] md:w-px"
            aria-hidden
          />

          <div className="flex flex-col items-center gap-2.5 md:items-start">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[1.8px] text-[var(--color-slate-soft)] md:text-left md:text-[12px]">
              Follow us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lemma on ${social.name}`}
                    title={`Lemma on ${social.name}`}
                    className="flex size-[42px] items-center justify-center rounded-full bg-[var(--color-slate-soft)] text-white transition-transform duration-300 hover:scale-110 hover:bg-[var(--color-blue)]"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <div className="my-5 h-px w-full bg-[var(--color-border)] md:my-6" />

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          <Image
            src="/Frame%201597890197.svg"
            alt="IAB Europe Transparency and Consent Framework"
            width={128}
            height={49}
            unoptimized
            className="h-10 w-auto sm:h-12"
          />
          <Image
            src="/Group%201597883459.svg"
            alt="IAB"
            width={56}
            height={28}
            unoptimized
            className="h-6 w-auto sm:h-7"
          />
          <Image
            src="/Group%201597883469.svg"
            alt="IAB Tech Lab"
            width={109}
            height={69}
            unoptimized
            className="h-10 w-auto sm:h-12"
          />
          <Image
            src="/Group%201597883461.svg"
            alt="Unified ID Solution"
            width={57}
            height={41}
            unoptimized
            className="h-9 w-auto sm:h-10"
          />
          <Image
            src="/Frame%201597890241.svg"
            alt="HUMAN"
            width={177}
            height={37}
            unoptimized
            className="h-8 w-auto sm:h-9"
          />
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-4 text-[12px] text-[var(--color-slate)] md:mt-6 md:flex-row md:items-center">
          <p>© 2026 Lemma Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((item) =>
              item.label === "Cookies" ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={openSettings}
                  className="hover:underline"
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.label} href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
