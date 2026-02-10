"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function WorkGrid() {
  return (
    <section className="bg-black px-6 py-16">
      <motion.div
        className="mx-auto max-w-[1440px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid gap-6 md:grid-cols-[1fr_0.46fr] md:grid-rows-[420px_360px]">
          {/* Top left — large landscape */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg"
            style={{
              background: "linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95)",
            }}
          >
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-sm font-medium text-white/40">
                Typid — Event Ticketing Platform
              </span>
            </div>
          </motion.div>

          {/* Top right — tall portrait */}
          <motion.div
            variants={fadeInUp}
            className="row-span-2 hidden overflow-hidden rounded-lg md:block"
            style={{
              background: "linear-gradient(180deg, #0c4a6e, #164e63, #134e4a)",
            }}
          >
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-sm font-medium text-white/40">
                Dashboard Interface
              </span>
            </div>
          </motion.div>

          {/* Bottom left — offset landscape */}
          <motion.div
            variants={fadeInUp}
            className="ml-0 overflow-hidden rounded-lg md:ml-[15%] md:mr-0"
            style={{
              background: "linear-gradient(135deg, #1c1917, #292524, #44403c)",
            }}
          >
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-sm font-medium text-white/40">
                Motion Design Reel
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
