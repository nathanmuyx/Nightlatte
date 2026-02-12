"use client";

import { useState, useEffect } from "react";

export function LiquidEtherBg() {
  const [LiquidEther, setLiquidEther] =
    useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("@/components/LiquidEther").then((mod) =>
      setLiquidEther(() => mod.default)
    );
  }, []);

  if (!LiquidEther) return null;

  return (
    <div className="fixed inset-0 z-0">
      <LiquidEther
        colors={["#909090", "#000000", "#000000"]}
        mouseForce={15}
        cursorSize={120}
        isViscous
        viscous={50}
        iterationsViscous={16}
        iterationsPoisson={16}
        resolution={0.35}
        isBounce={false}
        dt={0.016}
        autoDemo
        autoSpeed={0.1}
        autoIntensity={1.5}
        takeoverDuration={0.25}
        autoResumeDelay={500}
        autoRampDuration={0.6}
      />
    </div>
  );
}
