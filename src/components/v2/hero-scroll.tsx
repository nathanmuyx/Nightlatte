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
/*  Animated card — uses transform only (no layout props)              */
/* ------------------------------------------------------------------ */
function AnimatedCard({
  x,
  rotate,
  width,
  height,
  marginLeft,
  marginTop,
  zIndex,
  children,
}: {
  x: MotionValue<number>;
  rotate: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  marginLeft: MotionValue<number>;
  marginTop: MotionValue<number>;
  zIndex: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-[24px] will-change-transform"
      style={{ x, rotate, width, height, marginLeft, marginTop, zIndex }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main hero                                                          */
/* ------------------------------------------------------------------ */
export function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ---- Card transforms (GPU only: translate, rotate, scale) ---- */

  const cardsY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, -60, -40]);

  const card1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -324, -460]);
  const card2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  const card3X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 324, 460]);

  const card1Rotate = useTransform(scrollYProgress, [0, 0.5], [-8, 0]);
  const card2Rotate = useTransform(scrollYProgress, [0, 0.5], [-24, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0, 0.5], [0, 0]);

  // Card size: 300×300 → 416×504
  const cardW = useTransform(scrollYProgress, [0, 0.5, 1], [300, 300, 416]);
  const cardH = useTransform(scrollYProgress, [0, 0.5, 1], [300, 300, 504]);
  // Keep cards centered: margin = -width/2, -height/2
  const cardML = useTransform(cardW, (w) => -w / 2);
  const cardMT = useTransform(cardH, (h) => -h / 2);

  const card1Z = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 3]);
  const card2Z = useTransform(scrollYProgress, [0, 0.25, 0.3], [2, 2, 3]);
  const card3Z = useTransform(scrollYProgress, [0, 0.3], [3, 3]);

  /* ---- Text transforms (GPU only: translate, scale, opacity) ---- */

  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [240, 240, -80]);

  const titleBuildX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -540, -540]
  );
  const titleShipX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 540, 540]
  );

  // Scale text instead of animating fontSize (77→34 = 0.44x)
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.44]);
  // Script font size: 88→224 (animated via fontSize, not scale, for subpixel antialiasing)
  const scriptFontSize = useTransform(scrollYProgress, [0, 0.5], [88, 224]);

  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.3]);
  const textBlurPx = useTransform(scrollYProgress, [0.5, 1], [0, 6]);
  const textFilter = useTransform(textBlurPx, (v) => `blur(${v}px)`);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen bg-[#0b0b0b]">
        {/* Responsive scale wrapper — CSS only, no JS re-renders */}
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{
            /* Scale entire scene based on viewport width */
            transform: "scale(var(--hero-scale, 1))",
          }}
        >
          <V2Navbar />

          {/* Cards layer */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{ y: cardsY, zIndex: 5 }}
          >
            <AnimatedCard
              x={card1X}
              rotate={card1Rotate}
              width={cardW}
              height={cardH}
              marginLeft={cardML}
              marginTop={cardMT}
              zIndex={card1Z}
            >
              <Image
                src="/images/v2-card-typid.png"
                alt="Typid — event management software"
                fill
                className="object-cover object-left"
                sizes="416px"
                priority
              />
            </AnimatedCard>

            <AnimatedCard
              x={card2X}
              rotate={card2Rotate}
              width={cardW}
              height={cardH}
              marginLeft={cardML}
              marginTop={cardMT}
              zIndex={card2Z}
            >
              <Image
                src="/images/v2-card-turncast.png"
                alt="Turncast — create online presence"
                fill
                className="object-cover object-left"
                sizes="416px"
                priority
              />
            </AnimatedCard>

            <AnimatedCard
              x={card3X}
              rotate={card3Rotate}
              width={cardW}
              height={cardH}
              marginLeft={cardML}
              marginTop={cardMT}
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
            </AnimatedCard>
          </motion.div>

          {/* Text layer — titles (GPU-composited, thick font OK) */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-visible will-change-transform"
            style={{
              y: textY,
              opacity: textOpacity,
              filter: textFilter,
              zIndex: 1,
            }}
          >
            <motion.span
              className="text-white whitespace-nowrap leading-[1.15] will-change-transform origin-center"
              style={{
                fontFamily: "var(--font-switzer)",
                fontWeight: 400,
                fontSize: 77,
                scale: titleScale,
                x: titleBuildX,
              }}
            >
              We Build.{" "}
            </motion.span>

            <motion.span
              className="text-white whitespace-nowrap leading-[1.15] will-change-transform origin-center"
              style={{
                fontFamily: "var(--font-switzer)",
                fontWeight: 400,
                fontSize: 77,
                scale: titleScale,
                x: titleShipX,
              }}
            >
              We Ship.
            </motion.span>
          </motion.div>

          {/* Script text — separate layer, NO GPU compositing for hairline font */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible"
            style={{
              y: textY,
              opacity: textOpacity,
              filter: textFilter,
              zIndex: 1,
              paddingTop: 220,
            }}
          >
            <motion.span
              className="block text-white whitespace-nowrap origin-center"
              style={{
                fontFamily: "var(--font-pencerio)",
                fontWeight: 100,
                fontSize: scriptFontSize,
                lineHeight: 0.9,
                padding: "80px 300px",
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
