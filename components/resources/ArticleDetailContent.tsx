"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Lightbulb,
  Link2,
  Mail,
} from "lucide-react";
import { FadeUp } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fieldClass } from "@/lib/form-styles";
import {
  articleCtaHref,
  articleHeadings,
  articleListing,
  cleanArticleText,
  isDashSeparator,
  readingTimeFromArticle,
  slugifyHeading,
  type ArticleDetail,
  type RelatedArticle,
} from "@/lib/article-detail";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1.6px] text-[var(--color-slate-soft)]">
      {children}
    </p>
  );
}

function TableOfContents({
  headings,
  activeId,
  hidden,
  onToggle,
}: {
  headings: { id: string; text: string }[];
  activeId: string;
  hidden: boolean;
  onToggle: () => void;
}) {
  if (headings.length === 0) return null;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[1.6px] text-[var(--color-slate-soft)]">
          Contents
        </p>
        <button
          type="button"
          onClick={onToggle}
          className="text-[13px] font-medium text-[var(--color-orange)] transition-opacity hover:opacity-80"
        >
          {hidden ? "Show" : "Hide"}
        </button>
      </div>
      {hidden ? null : (
        <nav aria-label="Table of contents">
          <ul className="flex flex-col">
            {headings.map((heading) => {
              const active = heading.id === activeId;
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={cn(
                      "block border-l-2 py-2 pl-3.5 text-[14px] leading-[1.45] transition-colors",
                      active
                        ? "border-[var(--color-orange)] font-semibold text-[var(--color-orange)]"
                        : "border-transparent text-[var(--color-slate)] hover:text-[var(--color-ink)]",
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

export function ArticleDetailContent({
  article,
  related,
}: {
  article: ArticleDetail;
  related: RelatedArticle[];
}) {
  const listing = articleListing[article.kind];
  const body = useMemo(
    () =>
      article.body
        .filter((section) => section.type === "list" || !isDashSeparator(section.text))
        .map((section) =>
          section.type === "list"
            ? { ...section, items: section.items.map(cleanArticleText) }
            : { ...section, text: cleanArticleText(section.text) },
        ),
    [article.body],
  );
  const headings = useMemo(() => articleHeadings(body), [body]);
  const excerpt = cleanArticleText(article.excerpt);
  const sharePath =
    article.kind === "blog"
      ? `/resources/blogs/${article.slug}`
      : article.kind === "newsroom"
        ? `/newsroom/${article.slug}`
        : `/case-studies/${article.slug}`;
  const [tocHidden, setTocHidden] = useState(false);
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(`https://lemmamedia.com${sharePath}`);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const nodes = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [headings]);

  const onSubscribe = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!email.trim()) return;
      setSubscribed(true);
    },
    [email],
  );

  const onCopyLink = useCallback(async () => {
    const url = shareUrl || window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, [shareUrl]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(article.title);
  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedInIcon,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
  ] as const;

  const toc = (
    <TableOfContents
      headings={headings}
      activeId={activeId}
      hidden={tocHidden}
      onToggle={() => setTocHidden((value) => !value)}
    />
  );

  const sidebarWidgets = (
    <>
      {related.length > 0 ? (
        <div>
          <SidebarHeading>Related Articles</SidebarHeading>
          <ul className="flex flex-col gap-4">
            {related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group flex items-center gap-3">
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-[8px] bg-[var(--color-cream-soft)]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </span>
                  <span className="min-w-0 flex-1 text-[14px] font-medium leading-[1.4] text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-blue)]">
                    {item.title}
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-[var(--color-slate-soft)] transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="rounded-[12px] bg-[#fff4ec] p-5">
        <span className="mb-3 flex size-10 items-center justify-center rounded-[10px] bg-[var(--color-orange)] text-white">
          <Mail className="size-5" strokeWidth={1.8} />
        </span>
        <p className="font-heading text-[18px] font-semibold tracking-[-0.3px] text-[var(--color-ink)]">
          Stay ahead with Lemma Insights
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--color-slate)]">
          Practical notes on DOOH, CTV, and omnichannel measurement — no noise.
        </p>
        {subscribed ? (
          <p className="mt-4 text-[14px] font-medium text-[var(--color-green)]">
            You&apos;re in. Watch your inbox for the next briefing.
          </p>
        ) : (
          <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-2.5">
            <label htmlFor={`article-email-${article.slug}`} className="sr-only">
              Email address
            </label>
            <input
              id={`article-email-${article.slug}`}
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              className={cn(fieldClass, "rounded-[10px] bg-white")}
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[var(--color-orange)] px-4 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {article.tags.length > 0 ? (
        <div>
          <SidebarHeading>Topics</SidebarHeading>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-slate)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={listing.href}
            className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-blue)] hover:underline"
          >
            View all topics
            <ArrowRight className="size-3.5" strokeWidth={2.2} />
          </Link>
        </div>
      ) : null}

      <div>
        <SidebarHeading>Share This Article</SidebarHeading>
        <div className="flex items-center gap-2.5">
          {shareLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${social.name}`}
                className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
          <button
            type="button"
            onClick={onCopyLink}
            aria-label={copied ? "Link copied" : "Copy link"}
            className="flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
          >
            <Link2 className="size-4" strokeWidth={2} />
          </button>
        </div>
        {copied ? (
          <p className="mt-2 text-[12px] font-medium text-[var(--color-green)]">Link copied</p>
        ) : null}
      </div>
    </>
  );

  return (
    <section className="bg-white pb-16 pt-[110px] md:pb-24 md:pt-[120px]">
      <Container>
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1.5 text-[13px] text-[var(--color-slate-soft)] md:mb-10"
        >
          <Link href="/" className="transition-colors hover:text-[var(--color-ink)]">
            Home
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={2} />
          <Link href={listing.href} className="transition-colors hover:text-[var(--color-ink)]">
            {listing.label}
          </Link>
          <ChevronRight className="size-3.5" strokeWidth={2} />
          <span className="max-w-[280px] truncate text-[var(--color-slate)] md:max-w-[420px]">
            {article.title}
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
          <aside className="order-2 flex flex-col gap-10 lg:sticky lg:top-[110px] lg:order-1 lg:max-h-[calc(100vh-130px)] lg:self-start lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin]">
            <div className="hidden lg:block">{toc}</div>
            {sidebarWidgets}
          </aside>

          <article className="order-1 lg:order-2">
            <FadeUp>
              <header>
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {article.categories.map((category, index) => (
                    <span
                      key={`${category}-${index}`}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.4px] text-[var(--color-slate)]"
                    >
                      <span className="size-1.5 rounded-full bg-[var(--color-orange)]" />
                      {category}
                    </span>
                  ))}
                </div>

                <h1 className="font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.64px] text-[var(--color-ink)] md:text-[42px] md:leading-[1.12]">
                  {article.title}
                </h1>

                <p className="mt-4 text-[16px] leading-[1.7] text-[var(--color-slate)] md:text-[18px] md:leading-[1.65]">
                  {excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--color-slate)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" strokeWidth={1.8} />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" strokeWidth={1.8} />
                    {readingTimeFromArticle(article)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-[var(--color-blue)] text-[11px] font-semibold text-white">
                      {article.author.charAt(0)}
                    </span>
                    {article.author}
                  </span>
                </div>
              </header>
            </FadeUp>

            <FadeUp className="mt-8 md:mt-10">
              <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[16px] bg-[var(--color-cream-soft)] md:aspect-[21/9]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </FadeUp>

            {headings.length > 0 ? (
              <div className="mt-10 rounded-[12px] border border-[var(--color-border)] p-5 lg:hidden">
                {toc}
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-6 md:mt-12 md:gap-7">
              {body.map((section, index) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={`${section.text}-${index}`}
                      id={slugifyHeading(section.text)}
                      className="scroll-mt-[120px] pt-2 font-heading text-[22px] font-semibold tracking-[-0.4px] text-[var(--color-ink)] md:text-[28px]"
                    >
                      {section.text}
                    </h2>
                  );
                }

                if (section.type === "takeaway") {
                  return (
                    <aside
                      key={`takeaway-${index}`}
                      className="flex gap-3 rounded-[12px] bg-[#ebf5ff] p-5 md:gap-4 md:p-6"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-white text-[var(--color-blue)]">
                        <Lightbulb className="size-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[1.2px] text-[var(--color-ink)]">
                          Key Takeaway
                        </p>
                        <p className="mt-1.5 text-[15px] leading-[1.7] text-[var(--color-ink-muted)] md:text-[16px]">
                          {section.text}
                        </p>
                      </div>
                    </aside>
                  );
                }

                if (section.type === "list") {
                  return (
                    <ul key={`list-${index}`} className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-[16px] leading-[1.7] text-[#424242] md:text-[17px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={`p-${index}`}
                    className="text-[16px] leading-[1.8] text-[#424242] md:text-[17px]"
                  >
                    {section.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-5 rounded-[12px] bg-[#ebf5ff] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:mt-16 md:p-7">
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-[var(--color-blue)]">
                  <FileText className="size-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-[18px] font-semibold tracking-[-0.3px] text-[var(--color-ink)] md:text-[20px]">
                    {article.cta.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[var(--color-slate)]">
                    {article.cta.description}
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 sm:w-auto [&>div]:w-full">
                <Button
                  href={articleCtaHref}
                  variant="primary"
                  arrow="right"
                  className="w-full border-white/[0.08] text-white sm:w-auto hover:shadow-[0_10px_30px_rgba(248,45,137,0.28)]"
                  style={{ backgroundImage: "var(--gradient-cta)" }}
                >
                  {article.cta.buttonLabel}
                </Button>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
