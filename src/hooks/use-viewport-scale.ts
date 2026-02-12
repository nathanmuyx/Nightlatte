"use client";

import { useState, useEffect } from "react";

/**
 * Returns a unitless scale factor based on viewport size vs design size.
 * Replaces broken CSS `scale(clamp(..., 100vw / Npx, ...))` which produces
 * a <length> instead of the <number> that scale() requires.
 */
export function useViewportScale(
  designWidth: number,
  options?: { min?: number; max?: number; designHeight?: number }
) {
  const { min = 0.3, max = 1, designHeight } = options ?? {};
  const [scale, setScale] = useState(max);

  useEffect(() => {
    function update() {
      let ratio = window.innerWidth / designWidth;
      if (designHeight) {
        ratio = Math.min(ratio, window.innerHeight / designHeight);
      }
      setScale(Math.min(max, Math.max(min, ratio)));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [designWidth, designHeight, min, max]);

  return scale;
}
