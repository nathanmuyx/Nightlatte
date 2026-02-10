"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function TechNumber() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 md:py-24">
      {/* Background image placeholder (like BS code/tech imagery) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(180deg, #0f172a, #1e1b4b 40%, #312e81 70%, #0f172a)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] text-center">
        {/* Big "14" number with gradient fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gradient-text-fade text-[clamp(300px,45vw,690px)] font-medium leading-[0.83] tracking-[-0.15em]"
        >
          14
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-[-5%] text-[clamp(24px,4vw,51px)] font-medium leading-[1.25] tracking-[-0.04em]"
        >
          <span className="gradient-text-body">day fastest</span>
          <br />
          <span className="gradient-text-body">product pivot</span>
        </motion.p>
      </div>
    </section>
  );
}
