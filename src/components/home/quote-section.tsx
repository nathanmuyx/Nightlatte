"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function QuoteSection() {
  return (
    <section className="bg-black px-6 py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-[800px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-[clamp(32px,5vw,67px)] font-medium leading-[1.2] tracking-[-0.04em] text-white"
        >
          &ldquo;Ship fast. Iterate faster.&rdquo;
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-[#a3a5a9]"
        >
          The Nightlatte way
        </motion.p>
      </motion.div>
    </section>
  );
}
