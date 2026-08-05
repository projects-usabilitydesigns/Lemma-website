"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { DemoForm } from "@/components/request-demo/DemoForm";
import { DEMO_PAGE_HREF, isDemoCta, resolveDemoRole } from "@/lib/demo-cta";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smooth-scroll";

type OpenDemoOptions = {
  /** Explicit "I am a" value; otherwise inferred from the page and CTA label. */
  role?: string;
  /** CTA label, used to infer buying vs. selling intent. */
  label?: string;
};

type DemoModalContextValue = {
  openDemo: (options?: OpenDemoOptions) => void;
  closeDemo: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  return useContext(DemoModalContext);
}

/**
 * Turns a content-data href into link props. Demo CTAs keep a real href to
 * `/request-demo` so they stay middle-clickable, but open the modal on click.
 */
export function useDemoCta(href: string, label?: string) {
  const demoModal = useDemoModal();
  const demo = isDemoCta(href);

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      if (!demo || !demoModal) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      demoModal.openDemo({ label });
    },
    [demo, demoModal, label],
  );

  return {
    href: demo ? DEMO_PAGE_HREF : href,
    onClick: demo ? onClick : undefined,
    isDemo: demo,
  };
}

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeDemo = useCallback(() => setOpen(false), []);

  const openDemo = useCallback(
    (options?: OpenDemoOptions) => {
      setRole(options?.role ?? resolveDemoRole({ pathname, label: options?.label }));
      setOpen(true);
    },
    [pathname],
  );

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    pauseSmoothScroll();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDemo();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      resumeSmoothScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeDemo]);

  const value = useMemo(() => ({ openDemo, closeDemo }), [openDemo, closeDemo]);

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  data-lenis-prevent
                  className="fixed inset-0 z-[110] flex items-start justify-center overflow-y-auto p-4 py-10 md:items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    type="button"
                    aria-label="Close demo request form"
                    className="fixed inset-0 bg-black/60 backdrop-blur-[2px]"
                    onClick={closeDemo}
                  />
                  <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Request a demo"
                    className="relative z-10 w-full max-w-[640px] overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(9,19,26,0.35)]"
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 16 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      type="button"
                      aria-label="Close demo request form"
                      onClick={closeDemo}
                      className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-[#f0f0f0] text-[var(--color-ink)] transition hover:bg-[var(--color-ink)] hover:text-white"
                    >
                      <X className="size-4" />
                    </button>
                    <div data-lenis-prevent className="max-h-[85vh] overflow-y-auto p-5 md:p-7">
                      <DemoForm key={role} defaultRole={role} frameless />
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </DemoModalContext.Provider>
  );
}
