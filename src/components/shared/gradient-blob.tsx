"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  colors?: string;
}

export function GradientBlob({
  className,
  colors = "from-blue-500/20 to-purple-500/20",
}: GradientBlobProps) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl",
        colors,
        className
      )}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
