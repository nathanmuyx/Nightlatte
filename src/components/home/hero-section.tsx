"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black pb-16">
      {/* Decorative glow circle (like BS video element) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#e37ad5]/20 via-[#8598ff]/15 to-transparent blur-[100px] md:h-[900px] md:w-[900px]" />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-[1440px] px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-[clamp(60px,10vw,124px)] font-normal leading-[1.15] tracking-[-0.07em]"
        >
          <span className="text-white">We Build. </span>
          <span className="gradient-text-hero font-serif italic">
            We Ship.
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
