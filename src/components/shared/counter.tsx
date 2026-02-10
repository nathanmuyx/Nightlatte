"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  value: string;
  label: string;
}

export function Counter({ value, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!isInView) return;
    const target = parseInt(numericPart, 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(String(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericPart, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl font-bold tracking-tight md:text-6xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}
