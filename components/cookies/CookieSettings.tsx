"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import {
  cookieCategories,
  cookieCategoryCopy,
  type CookieCategoryId,
  type CookiePreferences,
} from "@/lib/cookie-consent";

type CookieSettingsProps = {
  preferences: CookiePreferences;
  onChange: (category: CookieCategoryId, enabled: boolean) => void;
  onSave: () => void;
  onClose: () => void;
};

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
        disabled ? "cursor-not-allowed bg-[#cfd8dc]" : checked ? "bg-[var(--color-blue)]" : "bg-[#c4cdd4]"
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

export function CookieSettings({ preferences, onChange, onSave, onClose }: CookieSettingsProps) {
  const [openId, setOpenId] = useState<CookieCategoryId | null>("necessary");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-settings-title"
      className="relative z-10 flex max-h-[85vh] w-full max-w-[720px] flex-col bg-white shadow-[0_24px_64px_rgba(9,19,26,0.28)]"
    >
      <button
        type="button"
        aria-label="Close cookie settings"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-[#009352] transition hover:opacity-70"
      >
        <X className="size-5" strokeWidth={2} />
      </button>

      <div
        data-lenis-prevent
        className="cookie-scroll flex-1 overflow-y-auto px-6 py-8 pr-5 md:px-8"
      >
        <h2 id="cookie-settings-title" className="sr-only">
          Cookie settings
        </h2>
        <div className="max-w-[620px] space-y-4 pr-6 text-[14px] leading-[1.7] text-[var(--color-ink-muted)]">
          <p>
            This website uses cookies so that we can provide you with the best user experience
            possible. Cookie information is stored in your browser and performs functions such as
            recognising you when you return to our website and helping our team understand which
            sections of the website you find most interesting and useful.
          </p>
          <p>
            For more details, please see{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#037C7C] hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </div>

        <ul className="mt-6">
          {cookieCategories.map((id) => {
            const meta = cookieCategoryCopy[id];
            const expanded = openId === id;
            const isNecessary = id === "necessary";
            return (
              <li key={id} className="border-t border-[#009352]/35">
                <div className="flex items-center justify-between gap-4 py-3.5">
                  <button
                    type="button"
                    className="flex min-w-0 flex-1 items-center gap-2 text-left text-[15px] font-medium text-[var(--color-ink)]"
                    aria-expanded={expanded}
                    onClick={() => setOpenId(expanded ? null : id)}
                  >
                    <ChevronDown
                      className={`size-4 shrink-0 text-[var(--color-slate)] transition-transform ${
                        expanded ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                    {meta.label}
                  </button>
                  {isNecessary ? (
                    <span className="shrink-0 text-[14px] font-medium text-[#009352]">Always Active</span>
                  ) : (
                    <Toggle
                      checked={preferences[id]}
                      label={`${meta.label} cookies`}
                      onChange={(next) => onChange(id, next)}
                    />
                  )}
                </div>
                {expanded ? (
                  <div className="pb-5 pl-6">
                    <p className="text-[13px] leading-[1.7] text-[var(--color-slate)]">{meta.description}</p>
                    {meta.cookies.length > 0 ? (
                      <div className="mt-4 overflow-x-auto">
                        <table className="w-full min-w-[520px] text-left text-[12px]">
                          <thead>
                            <tr className="bg-[#f3f4f6] text-[var(--color-ink-muted)]">
                              <th className="px-3 py-2 font-semibold">Name</th>
                              <th className="px-3 py-2 font-semibold">Domain</th>
                              <th className="px-3 py-2 font-semibold">Purpose</th>
                              <th className="px-3 py-2 font-semibold">Expiry</th>
                              <th className="px-3 py-2 font-semibold">Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {meta.cookies.map((cookie) => (
                              <tr key={`${cookie.name}-${cookie.domain}`} className="text-[var(--color-ink-muted)]">
                                <td className="px-3 py-2.5 align-top font-medium">{cookie.name}</td>
                                <td className="px-3 py-2.5 align-top">{cookie.domain}</td>
                                <td className="px-3 py-2.5 align-top">{cookie.purpose}</td>
                                <td className="px-3 py-2.5 align-top">{cookie.expiry}</td>
                                <td className="px-3 py-2.5 align-top">{cookie.type}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="mt-3 text-[13px] text-[var(--color-slate-soft)]">
                        No cookies in this category are currently in use.
                      </p>
                    )}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-6 py-5 md:px-8">
        <button
          type="button"
          onClick={onSave}
          className="min-h-11 rounded-sm bg-[var(--color-blue)] px-6 text-[14px] font-semibold text-white transition hover:brightness-110"
        >
          Save And Accept
        </button>
      </div>
    </div>
  );
}
