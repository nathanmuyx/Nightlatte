"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function EngineeringSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Full-bleed background image placeholder */}
      <div
        className="h-[600px] w-full md:h-[900px]"
        style={{
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #164e63 25%, #1e3a5f 50%, #1e1b4b 75%, #0f172a 100%)",
        }}
      />

      {/* Bottom gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, black 5%, transparent 40%)",
        }}
      />

      {/* Heading at the bottom */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 px-6 md:bottom-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeInUp}
          className="mx-auto max-w-[1440px] text-center text-[clamp(48px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
        >
          <span className="gradient-text-body">Full-stack</span>
          <br />
          <span className="gradient-text-body">
            {"     "}at our{" "}
            <span className="gradient-text-hero font-serif italic">core</span>
          </span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
