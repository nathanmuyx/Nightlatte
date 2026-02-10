"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section id="contact" className="bg-black px-6 py-24 md:py-32">
      <motion.div
        className="mx-auto max-w-[1440px]"
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
              href="#contact"
              className="inline-block rounded-[4px] bg-white px-6 py-4 text-lg font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
