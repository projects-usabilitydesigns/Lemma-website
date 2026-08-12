"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { megaMenus, navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smooth-scroll";
import type { MegaMenuId } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MegaMenuPanel } from "@/components/layout/MegaMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRegionId = useId();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMega = (id: MegaMenuId) => {
    clearCloseTimer();
    setActiveMega(id);
  };

  const scheduleCloseMega = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      pauseSmoothScroll();
    } else {
      resumeSmoothScroll();
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      resumeSmoothScroll();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMega(null);
        closeMobileMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || activeMega !== null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 shadow-[0px_4px_10px_rgba(0,0,0,0.08)] backdrop-blur-[10px]"
          : "bg-transparent shadow-none backdrop-blur-0",
      )}
      onMouseLeave={scheduleCloseMega}
    >
      <Container className="relative flex h-[90px] items-center justify-between">
        <Link href="/" aria-label="Lemma Technologies home" className="relative h-[35px] w-[170px]">
          <Image
            src="/images/logo-lemma.svg"
            alt="LEMMA"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[38px] lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isMega = Boolean(item.megaMenu);
            const isOpen = item.megaMenu != null && activeMega === item.megaMenu;

            if (!isMega || !item.megaMenu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative inline-flex items-center gap-1 text-[18px] font-medium text-[var(--color-ink-muted)]"
                  onMouseEnter={scheduleCloseMega}
                  onFocus={scheduleCloseMega}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? <ChevronDown className="size-3.5 opacity-70" /> : null}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-ink)] transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMega(item.megaMenu!)}
                onFocus={() => openMega(item.megaMenu!)}
              >
                <button
                  type="button"
                  className={cn(
                    "group relative inline-flex items-center gap-1 text-[18px] font-medium text-[var(--color-ink-muted)]",
                    isOpen && "text-[var(--color-ink)]",
                  )}
                  aria-expanded={isOpen}
                  aria-controls={megaRegionId}
                  onClick={() =>
                    setActiveMega((current) =>
                      current === item.megaMenu ? null : item.megaMenu!,
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "size-3.5 opacity-70 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[var(--color-ink)] transition-all duration-300",
                      isOpen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block" onMouseEnter={scheduleCloseMega}>
          <Button href="/request-demo" variant="outline" arrow="none">
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            if (mobileOpen) {
              closeMobileMenu();
            } else {
              setMobileOpen(true);
            }
          }}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 top-full hidden lg:block">
        <Container className="pointer-events-auto pt-2">
          <div
            id={megaRegionId}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleCloseMega}
          >
            <AnimatePresence mode="wait">
              {activeMega ? (
                <MegaMenuPanel
                  key={activeMega}
                  menu={megaMenus[activeMega]}
                  onNavigate={() => setActiveMega(null)}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </Container>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {mobileOpen ? (
                <motion.div
                  key="mobile-nav"
                  className="fixed inset-0 z-[110] lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="absolute inset-0 bg-black/40"
                    onClick={closeMobileMenu}
                  />
                  <div
                    data-lenis-prevent
                    className="absolute inset-y-0 right-0 flex w-[min(100%,400px)] flex-col bg-white shadow-xl"
                  >
                    <div className="flex shrink-0 items-center justify-between border-b border-[var(--color-border)] px-5 py-5">
                      <span className="text-lg font-semibold">Menu</span>
                      <button type="button" aria-label="Close menu" onClick={closeMobileMenu}>
                        <X className="size-5" />
                      </button>
                    </div>

                    <div
                      data-lenis-prevent
                      className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 touch-pan-y [-webkit-overflow-scrolling:touch]"
                    >
                      <nav className="flex flex-col gap-1 pb-6" aria-label="Mobile">
                        {navItems.map((item) => {
                          if (!item.megaMenu) {
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-xl px-3 py-3 text-lg font-medium text-[var(--color-ink)]"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </Link>
                            );
                          }

                          const expanded = mobileExpanded === item.megaMenu;
                          const menu = megaMenus[item.megaMenu];

                          return (
                            <div key={item.label} className="border-b border-[var(--color-border)] pb-2">
                              <button
                                type="button"
                                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-lg font-medium text-[var(--color-ink)]"
                                aria-expanded={expanded}
                                onClick={() =>
                                  setMobileExpanded((current) =>
                                    current === item.megaMenu ? null : item.megaMenu!,
                                  )
                                }
                              >
                                {item.label}
                                <ChevronDown
                                  className={cn(
                                    "size-4 transition-transform",
                                    expanded && "rotate-180",
                                  )}
                                />
                              </button>
                              {expanded ? (
                                <div className="pb-3 pl-2">
                                  <MegaMenuPanel menu={menu} onNavigate={closeMobileMenu} />
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </nav>
                    </div>

                    <div
                      className="shrink-0 border-t border-[var(--color-border)] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
                      onClick={closeMobileMenu}
                    >
                      <Button href="/request-demo" variant="primary" className="w-full" arrow="none">
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
