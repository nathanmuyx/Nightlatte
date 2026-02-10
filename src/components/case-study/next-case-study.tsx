"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { CaseStudyMeta } from "@/types";

interface NextCaseStudyProps {
  study: CaseStudyMeta;
}

export function NextCaseStudy({ study }: NextCaseStudyProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="border-t border-border py-20"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-3 text-sm text-muted-foreground">Next Project</p>
        <Link
          href={`/work/${study.slug}`}
          className="group inline-flex items-center gap-3 text-3xl font-bold transition-colors hover:text-amber md:text-4xl"
        >
          {study.title}
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  );
}
