"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ServicesBento() {
  return (
    <section
      id="services"
      className="overflow-hidden px-6 py-24 md:py-32"
      style={{ background: "#f4f4f4" }}
    >
      {/* Section heading */}
      <motion.div
        className="mx-auto mb-16 max-w-[1440px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-[clamp(100px,14vw,200px)] font-light leading-[1] tracking-[-0.08em] text-[#3a3d4b]"
        >
          <span className="gradient-text-body">Services</span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-[-2%] text-[clamp(50px,7vw,100px)] font-light leading-[1.1] tracking-[-0.08em]"
        >
          <span className="gradient-text-body">at Nightlatte</span>
        </motion.div>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className="mx-auto max-w-[860px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {/* Card 1 — UI/UX (light card) */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg bg-gradient-to-b from-white to-[#e0e2ea] p-10"
          >
            <div className="text-[clamp(60px,8vw,128px)] font-normal leading-[0.8] tracking-[-0.04em] text-[#292929]">
              UI/UX
            </div>
            <div className="mt-2 text-[clamp(20px,2.5vw,32px)] font-medium text-[#292929]">
              Design
            </div>
            <p className="mt-4 text-sm leading-[1.6] text-black/50">
              Research-driven interfaces that
              <br />
              balance beauty with usability
            </p>
          </motion.div>

          {/* Card 2 — Apps & Dashboards (dark card) */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg p-10"
            style={{
              background:
                "radial-gradient(ellipse at bottom right, #b5dce6 19%, #94b3c7 24%, #748ba7 28%, #536288 33%, #323968 37%, #1e2240 60%, #13172b 71%, #090b17 82%, #15161c 91%, #212121 100%)",
            }}
          >
            <div className="text-[clamp(60px,8vw,122px)] font-normal leading-[0.8] tracking-[-0.04em] text-white">
              Apps
            </div>
            <div className="mt-2 text-[clamp(20px,2.5vw,31px)] font-medium text-white">
              & Dashboards
            </div>
            <p className="mt-4 text-sm leading-[1.6] text-white/50">
              Full-stack products built with
              <br />
              Next.js, React, and Supabase
            </p>
          </motion.div>

          {/* Card 3 — wide card with real analytics screenshot */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-lg md:col-span-2"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a, #111827, #0a0a0a)",
            }}
          >
            <div className="absolute -left-[100px] top-[-60px]">
              <div
                className="h-[300px] w-[300px] rounded-full bg-[#17bff9]"
                style={{ filter: "blur(60px)", opacity: 0.2 }}
              />
            </div>
            <div className="relative flex min-h-[240px] items-center overflow-hidden">
              <div className="relative z-10 flex-shrink-0 p-10">
                <div className="text-[clamp(32px,4vw,48px)] font-normal leading-[0.9] tracking-[-0.04em] text-white">
                  Full-Stack
                </div>
                <div className="mt-1 text-[clamp(16px,2vw,24px)] font-medium text-white/60">
                  Product Pipeline
                </div>
                <p className="mt-3 max-w-[240px] text-sm leading-[1.6] text-white/40">
                  From Figma to production &mdash; no handoff gaps, no lost context
                </p>
              </div>
              <div className="relative ml-auto hidden h-[240px] w-[55%] md:block">
                <Image
                  src="/images/typid-analytics.png"
                  alt="Analytics dashboard"
                  fill
                  className="object-cover object-left-top opacity-60"
                  sizes="480px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Motion Design (dark card) */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg p-10"
            style={{
              background:
                "radial-gradient(ellipse at bottom right, #b5dce6 19%, #94b3c7 24%, #748ba7 28%, #536288 33%, #323968 37%, #1e2240 60%, #13172b 71%, #090b17 82%, #15161c 91%, #212121 100%)",
            }}
          >
            <div className="text-[clamp(60px,8vw,123px)] font-normal leading-[0.8] tracking-[-0.04em] text-white">
              Motion
            </div>
            <div className="mt-2 text-[clamp(20px,2.5vw,31px)] font-medium text-white">
              Design
            </div>
            <p className="mt-4 text-sm leading-[1.6] text-white/50">
              Scroll-stopping ads and
              <br />
              product demo videos
            </p>
          </motion.div>

          {/* Card 5 — End to End (light card) */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg bg-gradient-to-b from-white to-[#e0e2ea] p-10"
          >
            <div className="text-[clamp(60px,8vw,113px)] font-normal leading-[0.8] tracking-[-0.04em] text-[#292929]">
              End
            </div>
            <div className="mt-2 text-[clamp(20px,2.5vw,31px)] font-medium text-[#292929]">
              to End
            </div>
            <p className="mt-4 text-sm leading-[1.6] text-black/50">
              From Figma to production &mdash;
              <br />
              no handoff gaps, no lost context
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
