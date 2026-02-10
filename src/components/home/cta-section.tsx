"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="bg-black px-6 py-24 md:py-32">
      <motion.div
        className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 md:flex-row md:items-center md:justify-between"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <motion.h2
            variants={fadeInUp}
            className="gradient-text-gold text-[clamp(48px,7vw,80px)] font-normal leading-[1.15] tracking-[-0.07em]"
          >
            Start a project
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-[4px] bg-white px-6 py-4 text-lg font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Right side image placeholder (like BS team photo) */}
        <motion.div
          variants={fadeInUp}
          className="h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] md:w-[710px]"
          style={{
            background:
              "linear-gradient(135deg, #1c1917, #292524, #44403c, #292524)",
          }}
        >
          <div className="flex h-full items-center justify-center p-8">
            <span className="text-sm font-medium text-white/30">
              Our workspace
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
