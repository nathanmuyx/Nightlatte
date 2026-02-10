"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import type { CaseStudyChapter } from "@/types";

interface ChapterBlockProps {
  chapter: CaseStudyChapter;
  reversed?: boolean;
}

export function ChapterBlock({ chapter, reversed }: ChapterBlockProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="py-16 md:py-24"
    >
      <div
        className={`grid items-center gap-12 md:grid-cols-2 ${
          reversed ? "md:direction-rtl" : ""
        }`}
        style={reversed ? { direction: "rtl" } : undefined}
      >
        <div style={reversed ? { direction: "ltr" } : undefined}>
          <motion.p
            variants={fadeInUp}
            className="mb-2 text-sm font-semibold text-amber"
          >
            Chapter {chapter.number}
          </motion.p>
          <motion.h3
            variants={fadeInUp}
            className="mb-6 text-2xl font-bold md:text-3xl"
          >
            {chapter.title}
          </motion.h3>
          {chapter.content.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="mb-4 text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          style={reversed ? { direction: "ltr" } : undefined}
        >
          <PlaceholderImage
            label={chapter.visual.label}
            gradient={chapter.visual.gradient}
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
