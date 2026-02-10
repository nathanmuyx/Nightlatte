"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function BigMetric() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient (simulating BS background image with gradient overlay) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, transparent 30%), linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #1e1b4b 100%)",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-[1440px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={fadeInUp}
          className="gradient-text-fade text-[clamp(200px,30vw,466px)] font-medium leading-[0.85] tracking-[-0.08em]"
        >
          1000
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-[-2%] text-[clamp(80px,12vw,200px)] font-normal leading-[1] tracking-[-0.08em] text-white"
        >
          events
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[clamp(24px,3.5vw,51px)] font-medium tracking-[-0.04em] text-black"
        >
          powered by our platform
        </motion.p>
      </motion.div>
    </section>
  );
}
