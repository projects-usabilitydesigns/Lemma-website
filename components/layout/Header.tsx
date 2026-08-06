"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { megaMenus as defaultMegaMenus, navItems as defaultNavItems } from "@/lib/data";
import type { NavItem, MegaMenuConfig } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MegaMenuPanel } from "@/components/layout/MegaMenu";

export function Header({
  navItems,
  megaMenus,
}: {
  navItems?: NavItem[];
  megaMenus?: Record<"who-we-are" | "what-we-do", MegaMenuConfig>;
}) {
  const nav = navItems?.length ? navItems : defaultNavItems;
  const menus = megaMenus ?? defaultMegaMenus;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"who-we-are" | "what-we-do" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"who-we-are" | "what-we-do" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRegionId = useId();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMega = (id: "who-we-are" | "what-we-do") => {
    clearCloseTimer();
    setActiveMega(id);
  };

  const scheduleCloseMega = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMega(null);
        setMobileOpen(false);
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
          {nav.map((item) => {
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
          onClick={() => setMobileOpen((value) => !value)}
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
                  menu={menus[activeMega]}
                  onNavigate={() => setActiveMega(null)}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-dvh w-[min(100%,400px)] flex-col bg-white shadow-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-5">
                <span className="text-lg font-semibold">Menu</span>
                <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                  <X className="size-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  {nav.map((item) => {
                    if (!item.megaMenu) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-xl px-3 py-3 text-lg font-medium text-[var(--color-ink)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    const expanded = mobileExpanded === item.megaMenu;
                    const menu = menus[item.megaMenu];

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
                        <AnimatePresence initial={false}>
                          {expanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-2">
                                <MegaMenuPanel
                                  menu={menu}
                                  onNavigate={() => setMobileOpen(false)}
                                />
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="border-t border-[var(--color-border)] p-5" onClick={() => setMobileOpen(false)}>
                <Button href="/request-demo" variant="primary" className="w-full" arrow="none">
                  Request Demo
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
