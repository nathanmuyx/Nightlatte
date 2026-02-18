"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/nightlatte-team/30min";

interface CalendlyModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

export function CalendlyModal({ open, onClose, className }: CalendlyModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[101] w-[95vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#171717] border border-white/[0.06] shadow-2xl overflow-hidden",
              className
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Book a 30-minute call"
          >
            <div className="relative flex h-[85vh] min-h-[400px] flex-col">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <iframe
                src={CALENDLY_URL}
                className="h-full w-full min-h-[400px] border-0"
                title="Calendly - Book a 30-min talk"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
