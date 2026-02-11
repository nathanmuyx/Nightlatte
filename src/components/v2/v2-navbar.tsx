"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinksLeft = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

const navLinksRight = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function V2Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={cn(
          "flex items-center gap-10 rounded-full bg-[#171717] px-8 py-5",
          "border border-white/[0.06]"
        )}
      >
        {/* Left links — desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinksLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[17px] font-medium uppercase tracking-[-0.34px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/v2" className="flex items-center justify-center">
          <svg
            width="100"
            height="50"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 25C0 38.8071 11.1929 50 25 50V25C25 38.8071 36.1929 50 50 50V25C50 38.8071 61.1929 50 75 50C88.8071 50 100 38.8071 100 25C100 11.1929 88.8071 0 75 0C61.1929 0 50 11.1929 50 25V0C36.1929 0 25 11.1929 25 25V0C11.1929 0 0 11.1929 0 25Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Right links — desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[17px] font-medium uppercase tracking-[-0.34px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
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
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium uppercase tracking-[-0.34px] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
