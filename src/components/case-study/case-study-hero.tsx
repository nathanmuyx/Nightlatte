"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyMeta } from "@/types";

interface CaseStudyHeroProps {
  study: CaseStudyMeta;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: study.gradient }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Case Study
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          {study.title}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl text-muted-foreground md:text-2xl"
        >
          {study.subtitle}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-muted-foreground"
        >
          {study.description}
        </motion.p>

        {/* Meta grid */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { label: "Client", value: study.client },
            { label: "Year", value: study.year },
            { label: "Timeline", value: study.duration },
            { label: "Role", value: study.role },
          ].map((item) => (
            <div key={item.label}>
              <p className="mb-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {item.label}
              </p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-2">
          {study.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
