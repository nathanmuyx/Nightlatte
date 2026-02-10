"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const mockups = [
  {
    label: "Typid — Event Dashboard",
    gradient: "linear-gradient(180deg, #312e81, #4c1d95)",
    rotate: 0,
    top: 24,
    left: 0,
  },
  {
    label: "Typid — Ticket View",
    gradient: "linear-gradient(180deg, #4c1d95, #6d28d9)",
    rotate: 5,
    top: 0,
    left: 360,
  },
  {
    label: "Typid — QR Check-in",
    gradient: "linear-gradient(180deg, #6d28d9, #7c3aed)",
    rotate: 10,
    top: -90,
    left: 720,
  },
  {
    label: "Typid — Event Creation",
    gradient: "linear-gradient(180deg, #7c3aed, #a855f7)",
    rotate: -5,
    top: 120,
    left: 540,
  },
];

export function MockupsSection() {
  return (
    <section
      className="overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, #c5deed, #f4f4f4 30%)",
      }}
    >
      {/* Phone mockup stack */}
      <div className="relative mx-auto mb-24 h-[500px] max-w-[1440px] md:h-[700px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="relative h-[500px] w-[300px] md:h-[700px] md:w-[900px]">
            {mockups.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="absolute hidden md:block"
                style={{
                  top: m.top,
                  left: m.left,
                  transform: `rotate(${m.rotate}deg)`,
                }}
              >
                <div
                  className="flex h-[500px] w-[240px] items-center justify-center rounded-[32px] shadow-[20px_25px_50px_rgba(0,0,0,0.25)]"
                  style={{ background: m.gradient }}
                >
                  <span className="max-w-[150px] text-center text-xs font-medium text-white/50">
                    {m.label}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* Mobile: show single centered mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto block md:hidden"
            >
              <div
                className="flex h-[500px] w-[240px] items-center justify-center rounded-[32px] shadow-[20px_25px_50px_rgba(0,0,0,0.25)]"
                style={{ background: mockups[0].gradient }}
              >
                <span className="max-w-[150px] text-center text-xs font-medium text-white/50">
                  Typid — Event Dashboard
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* "Designed with intent" heading */}
      <motion.div
        className="mx-auto max-w-[600px] text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(60px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
        >
          <span className="text-[#323232]">Designed</span>
          <br />
          <span className="text-[#323232]">with </span>
          <span className="gradient-text-hero font-serif italic">intent</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-[clamp(16px,2vw,27px)] font-medium leading-[1.5] text-[#323232]"
        >
          We strive to make each product intuitive to use,
          beautiful to look at, and rock-solid under the hood.
        </motion.p>
        <motion.p variants={fadeInUp} className="mt-4 text-[#7b7d85] text-lg">
          Discover some of our{" "}
          <a href="/work" className="text-[#323232] underline">
            Work
          </a>
          .
        </motion.p>
      </motion.div>
    </section>
  );
}
