"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Counter } from "@/components/shared/counter";
import type { Metric } from "@/types";

interface MetricsGridProps {
  metrics: Metric[];
  gradient?: string;
}

export function MetricsGrid({ metrics, gradient }: MetricsGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-border p-10 md:p-14"
    >
      {gradient && (
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ background: gradient }}
        />
      )}
      <motion.h3
        variants={fadeInUp}
        className="relative mb-10 text-center text-sm font-medium tracking-widest text-muted-foreground uppercase"
      >
        Project Metrics
      </motion.h3>
      <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
        {metrics.map((m) => (
          <Counter key={m.label} value={m.value} label={m.label} />
        ))}
      </div>
    </motion.div>
  );
}
