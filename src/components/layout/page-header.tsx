"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradientClass?: string;
}

export function PageHeader({
  title,
  subtitle,
  gradientClass = "gradient-text-blue",
}: PageHeaderProps) {
  return (
    <section className="px-6 pt-40 pb-20 md:pt-48 md:pb-28">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          className={`text-5xl font-bold tracking-tight md:text-7xl ${gradientClass}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
