"use client";

import { useState, useEffect } from "react";

export function LiquidEtherBg() {
  const [LiquidEther, setLiquidEther] =
    useState<React.ComponentType<any> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import("@/components/LiquidEther").then((mod) =>
      setLiquidEther(() => mod.default)
    );
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!LiquidEther) return null;

  return (
    <div className="fixed inset-0 z-0">
      <LiquidEther
        colors={["#909090", "#000000", "#000000"]}
        mouseForce={isMobile ? 0 : 15}
        cursorSize={120}
        isViscous
        viscous={50}
        iterationsViscous={16}
        iterationsPoisson={16}
        resolution={0.35}
        isBounce={false}
        dt={0.016}
        autoDemo
        autoSpeed={isMobile ? 0.3 : 0.1}
        autoIntensity={isMobile ? 2.5 : 1.5}
        takeoverDuration={0.25}
        autoResumeDelay={isMobile ? 0 : 500}
        autoRampDuration={0.6}
      />
    </div>
  );
}
