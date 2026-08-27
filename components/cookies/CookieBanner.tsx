"use client";

import Image from "next/image";
import Link from "next/link";

type CookieBannerProps = {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: () => void;
};

export function CookieBanner({ onAcceptAll, onRejectAll, onCustomize }: CookieBannerProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="relative z-10 w-full max-w-[560px] bg-white p-8 shadow-[0_24px_64px_rgba(9,19,26,0.28)] md:p-10"
    >
      <div className="mx-auto mb-5 flex justify-center">
        <Image
          src="/favicon.png"
          alt="Lemma"
          width={56}
          height={56}
          className="size-14 rounded-md object-contain"
        />
      </div>
      <h2 id="cookie-banner-title" className="sr-only">
        Cookie consent
      </h2>
      <p className="text-center text-[15px] leading-[1.65] text-[var(--color-ink-muted)]">
        We use cookies to improve functionality and personalize your experience. Manage your
        preferences by clicking on Customize button. Read our website{" "}
        <Link href="/privacy-policy" className="font-semibold text-[var(--color-blue-link)] hover:underline">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="font-semibold text-[var(--color-blue-link)] hover:underline">
          cookie statement
        </Link>{" "}
        to know more.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onAcceptAll}
          className="min-h-11 flex-1 rounded-md bg-[#009352] px-4 text-[14px] font-semibold text-white transition hover:brightness-110"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={onRejectAll}
          className="min-h-11 flex-1 rounded-md bg-[#F05A27] px-4 text-[14px] font-semibold text-white transition hover:brightness-110"
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={onCustomize}
          className="min-h-11 flex-1 rounded-md bg-[#008FDB] px-4 text-[14px] font-semibold text-white transition hover:brightness-110"
        >
          Customize
        </button>
      </div>
    </div>
  );
}
