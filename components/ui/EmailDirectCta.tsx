"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { getEmailComposeUrl } from "@/lib/email-compose";
import { FORM_INBOX_EMAIL } from "@/lib/form-inbox";

type EmailDirectCtaProps = {
  className?: string;
};

export function EmailDirectCta({ className = "mt-7" }: EmailDirectCtaProps) {
  const [copied, setCopied] = useState(false);
  const composeUrl = getEmailComposeUrl();

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(FORM_INBOX_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Compose still opens in the new tab.
    }
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <a
        href={composeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[16px] font-semibold text-[var(--color-btn-text)] transition hover:shadow-[0_10px_30px_rgba(0,143,219,0.35)]"
        style={{ backgroundImage: "var(--gradient-blue)" }}
      >
        Email us directly
        <ArrowRight className="size-4" />
      </a>
      <p className="mt-2 text-[13px] font-medium text-[var(--color-slate)]">
        {copied ? (
          <span className="inline-flex items-center gap-1 text-[var(--color-green)]">
            <Check className="size-3.5" strokeWidth={2.5} />
            Email copied
          </span>
        ) : (
          FORM_INBOX_EMAIL
        )}
      </p>
    </div>
  );
}
