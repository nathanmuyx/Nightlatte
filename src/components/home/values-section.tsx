"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ValuesSection() {
  return (
    <section className="bg-black">
      {/* Hero image area — Typid phone mockups showcase */}
      <div className="relative h-[500px] overflow-hidden md:h-[800px]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-[500px] w-[500px] rounded-full bg-[#17bff9]"
            style={{ filter: "blur(80px)", opacity: 0.15 }}
          />
        </div>

        {/* Phone mockups row */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-6 md:gap-8">
          {[
            { src: "/images/typid-phone-1.png", alt: "Typid home screen", delay: 0 },
            { src: "/images/typid-phone-2.png", alt: "Typid event setup", delay: 0.1 },
            { src: "/images/typid-phone-3.png", alt: "Typid QR check-in", delay: 0.2 },
            { src: "/images/typid-phone-4.png", alt: "Typid transactions", delay: 0.3 },
          ].map((phone) => (
            <motion.div
              key={phone.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phone.delay, duration: 0.7 }}
              className="relative h-[300px] w-[150px] overflow-hidden rounded-[20px] border-[3px] border-white/10 shadow-2xl md:h-[500px] md:w-[230px] md:rounded-[28px]"
            >
              <Image
                src={phone.src}
                alt={phone.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 230px"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom gradient fade to black */}
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
            <motion.div variants={fadeInUp}>
              <p className="gradient-text-body text-[clamp(24px,3.5vw,51px)] font-medium leading-[1.26] tracking-[-0.04em]">
                We&apos;re obsessive about shipping products that work in the
                real world&nbsp;&mdash; designed with intent, built with
                speed, and measured by impact.
              </p>
              <p className="mt-8 text-lg text-[#a3a5a9]">
                See how we think in{" "}
                <a href="#about" className="text-white underline">
                  About
                </a>
                .
              </p>
            </motion.div>

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
