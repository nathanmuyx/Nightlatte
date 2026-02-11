"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CountUp from "@/components/CountUp";

/* ------------------------------------------------------------------ */
/*  Spotlight paragraph                                                */
/* ------------------------------------------------------------------ */
function SpotlightParagraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 0.35, 0.45, 0.55, 0.65, 1],
    [
      "rgba(0,0,0,0.15)",
      "rgba(0,0,0,0.15)",
      "rgba(0,0,0,1)",
      "rgba(0,0,0,1)",
      "rgba(0,0,0,0.15)",
      "rgba(0,0,0,0.15)",
    ]
  );

  return (
    <motion.div ref={ref} className={className} style={{ color }}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export function HoursSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /* Background: black → white */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6],
    ["rgb(11,11,11)", "rgb(11,11,11)", "rgb(255,255,255)"]
  );

  /* "72 hours" white text — fades out as bg turns white */
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6],
    [1, 1, 0]
  );

  return (
    <>
      {/* ── Phase 1 & 2: 72 hours on black → white ── */}
      <section ref={heroRef} className="relative h-[250vh]">
        <motion.div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <motion.div
              className="flex flex-col items-center justify-center text-white"
              style={{ opacity: headingOpacity }}
            >
              <span
                className="block text-center leading-[0.83]"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 700,
                  fontSize: "clamp(120px, 45vw, 648px)",
                  letterSpacing: "-0.15em",
                }}
              >
                <CountUp to={72} from={0} duration={0.8} direction="up" />
              </span>
              <span
                className="block text-center"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(48px, 15.5vw, 224px)",
                  letterSpacing: "-0.054em",
                  lineHeight: 1.15,
                }}
              >
                hours.
              </span>
              <span
                className="block text-center"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 2.8vw, 40px)",
                  lineHeight: 0.9,
                  marginTop: "0.25em",
                }}
              >
                THAT&rsquo;S IT
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Phase 3: Body text on white ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1024px] px-6 pt-[15vh] pb-[50vh]">
          <div className="flex flex-col gap-[72px]">
            <SpotlightParagraph>
              <p
                className="uppercase w-full"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.9vw, 56px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                  color: "inherit",
                }}
              >
                We design and build digital products — interfaces, dashboards,
                and motion that ship fast and scale well. And we own every pixel
                from Figma to production.
              </p>
            </SpotlightParagraph>

            <SpotlightParagraph>
              <p
                className="uppercase w-full"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.9vw, 56px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                  color: "inherit",
                }}
              >
                Our work has powered real events, real users, and real revenue
                for ambitious brands. Still, we&rsquo;ve only just crossed the
                starting line.
              </p>
            </SpotlightParagraph>

            <SpotlightParagraph className="flex flex-col items-center gap-[14px]">
              <p
                className="uppercase text-center w-full"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.9vw, 56px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                  color: "inherit",
                }}
              >
                An impossible deadline?
              </p>
              <p
                className="text-center w-full"
                style={{
                  fontFamily: "var(--font-pencerio)",
                  fontWeight: 100,
                  fontSize: "clamp(40px, 6.1vw, 88px)",
                  lineHeight: 0.9,
                  color: "inherit",
                }}
              >
                consider it done
              </p>
            </SpotlightParagraph>
          </div>
        </div>
      </section>
    </>
  );
}
