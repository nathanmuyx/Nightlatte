"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ValuesSection() {
  return (
    <section className="bg-black">
      {/* Video/image hero area (like BS team video) */}
      <div className="relative h-[500px] overflow-hidden md:h-[800px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #151b17, #1c1917, #292524, #1c1917)",
          }}
        />
        {/* Gradient overlay fading to black at bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, black 5%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Content area */}
      <div className="px-6 pb-10">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Heading — "The secret sauce: our approach" */}
          <motion.h2
            variants={fadeInUp}
            className="mb-12 text-[clamp(48px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
          >
            <span className="text-white">The secret sauce:</span>
            <br />
            <span className="gradient-text-hero font-serif italic">
              our approach
            </span>
          </motion.h2>

          <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr]">
            {/* Left — body copy */}
            <motion.div variants={fadeInUp}>
              <p className="gradient-text-body text-[clamp(24px,3.5vw,51px)] font-medium leading-[1.26] tracking-[-0.04em]">
                We&apos;re obsessive about shipping products that work in the
                real world&nbsp;&mdash; designed with intent, built with
                speed, and measured by impact.
              </p>
              <p className="mt-8 text-lg text-[#a3a5a9]">
                See how we think in{" "}
                <a href="/about" className="text-white underline">
                  About
                </a>
                .
              </p>
            </motion.div>

            {/* Right — stat badge (like BS Glassdoor 4.7) */}
            <motion.div variants={fadeInUp} className="flex items-start justify-end">
              <div className="relative">
                <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border border-white/10 md:h-[260px] md:w-[260px]">
                  <span className="text-[clamp(48px,6vw,80px)] font-bold text-white">
                    100%
                  </span>
                  <span className="mt-1 text-sm text-[#a3a5a9]">
                    client retention
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
