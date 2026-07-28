"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[10px]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-[90px] items-center justify-between">
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative inline-flex items-center gap-1 text-[18px] font-medium text-[var(--color-ink-muted)]"
            >
              <span>{item.label}</span>
              {item.hasDropdown ? <ChevronDown className="size-3.5 opacity-70" /> : null}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-ink)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#cta" variant="outline" arrow="none">
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-dvh w-[min(100%,360px)] flex-col bg-white p-6 shadow-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-5" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-[var(--color-ink)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto" onClick={() => setOpen(false)}>
                <Button href="#cta" variant="primary" className="w-full" arrow="none">
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
