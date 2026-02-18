"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CalendlyModal } from "./calendly-modal";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export function V2Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={cn(
          "flex items-center gap-6 rounded-full bg-[#171717] px-5 py-3",
          "border border-white/[0.06]"
        )}
      >
        {/* Logo — scrolls to top / hero */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center justify-center"
        >
          <svg
            width="60"
            height="30"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 25C0 38.8071 11.1929 50 25 50V25C25 38.8071 36.1929 50 50 50V25C50 38.8071 61.1929 50 75 50C88.8071 50 100 38.8071 100 25C100 11.1929 88.8071 0 75 0C61.1929 0 50 11.1929 50 25V0C36.1929 0 25 11.1929 25 25V0C11.1929 0 0 11.1929 0 25Z"
              fill="white"
            />
          </svg>
        </a>

        {/* Nav links — desktop (left to right) */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[12px] font-medium uppercase tracking-[-0.34px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setCalendlyOpen(true)}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[12px] font-medium uppercase tracking-[-0.34px] text-black transition-colors hover:bg-white/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Book a 30-min talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[72px] left-6 right-6 rounded-2xl bg-[#171717] border border-white/[0.06] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-lg font-medium uppercase tracking-[-0.34px] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setCalendlyOpen(true);
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-lg font-medium uppercase tracking-[-0.34px] text-black transition-colors hover:bg-white/90"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Book a 30-min talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </header>
  );
}
