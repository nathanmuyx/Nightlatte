"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface TechStackBarProps {
  stack: string[];
}

export function TechStackBar({ stack }: TechStackBarProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="flex flex-wrap justify-center gap-3 py-10"
    >
      {stack.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="rounded-full px-4 py-1.5 text-sm"
        >
          {tech}
        </Badge>
      ))}
    </motion.div>
  );
}
