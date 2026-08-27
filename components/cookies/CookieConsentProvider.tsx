"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookieSettings } from "@/components/cookies/CookieSettings";
import {
  allAcceptedPreferences,
  applyConsent,
  defaultPreferences,
  readStoredConsent,
  writeStoredConsent,
  type CookieCategoryId,
  type CookiePreferences,
} from "@/lib/cookie-consent";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smooth-scroll";

type CookieView = "hidden" | "banner" | "settings";

type CookieConsentContextValue = {
  preferences: CookiePreferences;
  hasConsented: boolean;
  openSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<CookieView>("hidden");
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
      setHasConsented(true);
      applyConsent(stored.preferences, true);
      setView("hidden");
    } else {
      applyConsent(defaultPreferences, false);
      setView("banner");
    }
    setMounted(true);
  }, []);

  const persist = useCallback((next: CookiePreferences) => {
    const saved = writeStoredConsent(next);
    setPreferences(saved.preferences);
    setHasConsented(true);
    setView("hidden");
  }, []);

  const acceptAll = useCallback(() => persist(allAcceptedPreferences), [persist]);
  const rejectAll = useCallback(() => persist(defaultPreferences), [persist]);
  const savePreferences = useCallback(() => persist(preferences), [persist, preferences]);

  const openSettings = useCallback(() => {
    setPreferences((current) => ({ ...current, necessary: true }));
    setView("banner");
  }, []);

  const closeSettings = useCallback(() => {
    setView("banner");
  }, []);

  const setCategory = useCallback((category: CookieCategoryId, enabled: boolean) => {
    if (category === "necessary") return;
    setPreferences((current) => ({ ...current, [category]: enabled }));
  }, []);

  const open = view !== "hidden";

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    pauseSmoothScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && view === "settings") closeSettings();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      resumeSmoothScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, view, closeSettings]);

  const value = useMemo(
    () => ({ preferences, hasConsented, openSettings }),
    [preferences, hasConsented, openSettings],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  data-lenis-prevent
                  className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="fixed inset-0 bg-black/55 backdrop-blur-[1px]" />
                  <motion.div
                    className="relative z-10 w-full max-w-[720px]"
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {view === "banner" ? (
                      <div className="mx-auto max-w-[560px]">
                        <CookieBanner
                          onAcceptAll={acceptAll}
                          onRejectAll={rejectAll}
                          onCustomize={() => setView("settings")}
                        />
                      </div>
                    ) : (
                      <CookieSettings
                        preferences={preferences}
                        onChange={setCategory}
                        onSave={savePreferences}
                        onClose={closeSettings}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </CookieConsentContext.Provider>
  );
}
