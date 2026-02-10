"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function MissionSection() {
  return (
    <section className="bg-black px-6 py-32 md:py-48">
      <motion.div
        className="mx-auto max-w-[1024px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={fadeInUp}
          className="gradient-text-body mb-20 text-[clamp(28px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.04em]"
        >
          We design and build digital products&nbsp;&mdash; interfaces,
          dashboards, and motion that ship fast and scale well. And we own
          every pixel from Figma to production.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="gradient-text-body mb-20 text-[clamp(28px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.04em]"
        >
          Our work has powered real events, real users, and real revenue for
          ambitious brands. Still, we&apos;ve only just crossed the starting
          line.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="gradient-text-body text-[clamp(28px,4vw,56px)] font-medium leading-[1.1] tracking-[-0.04em]"
        >
          An impossible timeline?{" "}
          <span className="gradient-text-hero font-serif italic">Maybe.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
