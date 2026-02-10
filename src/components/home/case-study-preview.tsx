"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CaseStudyPreview() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1140px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-[clamp(48px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
            >
              <span className="gradient-text-typid">From idea</span>
              <br />
              <span className="gradient-text-typid">to impact</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <p className="text-lg leading-[1.7] text-[#7b7d85]">
              Typid started as a failing finance app with 70 users and poor
              retention. In 14 days, we pivoted it into a full-featured event
              ticketing platform that powered real events within weeks.
            </p>
            <p className="mt-6 text-lg leading-[1.7] text-[#7b7d85]">
              From QR check-in to GCash payments &mdash; built for the
              Philippine market, validated by real organizers.
            </p>
            <div className="mt-8">
              <Link
                href="/typid"
                className="inline-block rounded-[4px] bg-black px-6 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-80"
              >
                Read case study
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
