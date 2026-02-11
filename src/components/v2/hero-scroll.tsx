"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { V2Navbar } from "./v2-navbar";

/* ------------------------------------------------------------------ */
/*  Purple services card (rendered inline, no image needed)           */
/* ------------------------------------------------------------------ */
function ServicesCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#ae1cf0] p-6">
      <p className="max-w-[220px] text-center text-[18px] font-semibold leading-tight text-white">
        The best rates, thousands of aggregated services
      </p>

      {/* Decorative icon bubbles */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2">
        <div className="absolute -left-10 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#7b0abf] text-white text-lg">
          &#x1F4B3;
        </div>
        <div className="absolute left-6 -top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ae1cf0] text-lg rotate-12">
          &#x25B2;
        </div>
        <div className="absolute -left-4 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#7dd3fc] text-white text-sm font-bold">
          $
        </div>
        <div className="absolute left-10 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#c084fc] text-white text-sm font-bold">
          $
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Single animated card wrapper                                       */
/* ------------------------------------------------------------------ */
function AnimatedCard({
  x,
  rotate,
  width,
  height,
  zIndex,
  children,
}: {
  x: MotionValue<number>;
  rotate: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  zIndex: MotionValue<number>;
  children: React.ReactNode;
}) {
  // Center each card on the container origin by offsetting half its dimensions
  const ml = useTransform(width, (w) => -w / 2);
  const mt = useTransform(height, (h) => -h / 2);

  return (
    <motion.div
      className="absolute overflow-hidden rounded-[24px]"
      style={{
        x,
        rotate,
        width,
        height,
        zIndex,
        marginLeft: ml,
        marginTop: mt,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main hero section                                                  */
/* ------------------------------------------------------------------ */
export function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ---- Card transforms ---- */

  // Cards Y: above center in all states, slight adjustment in State 3
  const cardsY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, -60, -40]);

  // X positions: stacked(0) → spread (300+24gap=324) → expanded spread
  const card1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -324, -460]);
  const card2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  const card3X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 324, 460]);

  // Rotations: rotated → flat (matching Figma: orange -8°, purple -24°, green 0°)
  const card1Rotate = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.5], [-24, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 0]);

  // Size: 300 → 300 → 416 (width) and 300 → 300 → 504 (height)
  const cardWidth = useTransform(scrollYProgress, [0, 0.5, 1], [300, 300, 416]);
  const cardHeight = useTransform(scrollYProgress, [0, 0.5, 1], [300, 300, 504]);

  // Z-index: stacked order (green on top initially) → all equal when spread
  const card1Z = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 3]);
  const card2Z = useTransform(scrollYProgress, [0, 0.25, 0.3], [2, 2, 3]);
  const card3Z = useTransform(scrollYProgress, [0, 0.3], [3, 3]);

  // Hidden cards fade in as they spread
  const card1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [0, 0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]);

  /* ---- Text transforms ---- */

  // Text stays BELOW cards in State 1 & 2, only moves behind in State 3
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [240, 240, -80]);

  // "We Build." X: centered → far left, "We Ship." X: centered → far right
  const titleBuildX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -540, -540]);
  const titleShipX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 540, 540]);

  // Title font size: 77px → 34px (shrinks as they spread to sides)
  const titleSize = useTransform(scrollYProgress, [0, 0.5], [77, 34]);

  // "just faster" scales up from 88px to 224px massive
  const scriptSize = useTransform(scrollYProgress, [0, 0.5], [88, 224]);

  // Text blur only in State 3 (when moving behind cards)
  const textBlur = useTransform(scrollYProgress, [0.5, 1], [0, 6]);
  const textBlurFilter = useTransform(textBlur, (v) => `blur(${v}px)`);

  // Text always behind cards
  const textZIndex = 1;

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen bg-[#0b0b0b]">
        {/* Inner wrapper clips horizontally but allows vertical paint */}
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <V2Navbar />

        {/* Cards layer — centered, offset upward */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: cardsY, zIndex: 5 }}
        >
          {/* Card 1 — Woman on orange (behind, rotated -8°) */}
          <AnimatedCard
            x={card1X}
            rotate={card1Rotate}
            width={cardWidth}
            height={cardHeight}
            zIndex={card1Z}
          >
            <motion.div className="h-full w-full" style={{ opacity: card1Opacity }}>
              <Image
                src="/images/v2-card-woman.png"
                alt="Woman in blue sweater"
                fill
                className="object-cover"
                sizes="416px"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 -z-10 bg-[#f55d1b]" />
          </AnimatedCard>

          {/* Card 2 — Purple services (behind, rotated -24°) */}
          <AnimatedCard
            x={card2X}
            rotate={card2Rotate}
            width={cardWidth}
            height={cardHeight}
            zIndex={card2Z}
          >
            <motion.div className="h-full w-full" style={{ opacity: card2Opacity }}>
              <ServicesCard />
            </motion.div>
            <div className="absolute inset-0 -z-10 bg-[#ae1cf0]" />
          </AnimatedCard>

          {/* Card 3 — Guy with sunglasses on green (top when stacked) */}
          <AnimatedCard
            x={card3X}
            rotate={card3Rotate}
            width={cardWidth}
            height={cardHeight}
            zIndex={card3Z}
          >
            <Image
              src="/images/v2-card-guy.png"
              alt="Guy with sunglasses"
              fill
              className="object-cover"
              sizes="416px"
              priority
            />
            <div className="absolute inset-0 -z-10 bg-[#238a04]" />
          </AnimatedCard>
        </motion.div>

        {/* Text layer — starts below cards, stacked vertically */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{
            y: textY,
            filter: textBlurFilter,
            zIndex: textZIndex,
          }}
        >
          {/* "We Build." */}
          <motion.span
            className="text-white whitespace-nowrap leading-[1.15]"
            style={{
              fontFamily: "var(--font-switzer)",
              fontWeight: 400,
              fontSize: titleSize,
              x: titleBuildX,
            }}
          >
            We Build.{" "}
          </motion.span>

          {/* "We Ship." */}
          <motion.span
            className="text-white whitespace-nowrap leading-[1.15]"
            style={{
              fontFamily: "var(--font-switzer)",
              fontWeight: 400,
              fontSize: titleSize,
              x: titleShipX,
            }}
          >
            We Ship.
          </motion.span>

          {/* "just faster" script */}
          <motion.span
            className="block text-white whitespace-nowrap"
            style={{
              fontFamily: "var(--font-pencerio)",
              fontWeight: 100,
              fontSize: scriptSize,
              lineHeight: 0.9,
            }}
          >
            just faster
          </motion.span>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
