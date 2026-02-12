"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CountUp from "@/components/CountUp";
import { V2Footer } from "@/components/v2/v2-footer";

const topRowImages = [
  { src: "/images/mockup-top-1.png", alt: "Mobile app showcase", w: 208, h: 260, border: "rgba(195,228,165,0.4)" },
  { src: "/images/mockup-top-2.png", alt: "Fiber connections website", w: 414, h: 260, border: "rgba(72,200,30,0.4)" },
  { src: "/images/mockup-top-3.png", alt: "Trading platform", w: 375, h: 260, border: "rgba(20,214,218,0.4)" },
  { src: "/images/mockup-top-4.png", alt: "Analytics dashboard", w: 414, h: 260, border: "rgba(255,255,255,0.4)" },
];

const botRowImages = [
  { src: "/images/mockup-bot-1.png", alt: "Strive entertainment app", w: 416, h: 260, border: "rgba(141,67,246,0.4)" },
  { src: "/images/mockup-bot-2.png", alt: "Admin dashboard", w: 347, h: 260, border: "rgba(49,127,167,0.4)" },
  { src: "/images/mockup-bot-3.png", alt: "Mobile phones showcase", w: 487, h: 260, border: "rgba(207,68,21,0.4)" },
  { src: "/images/mockup-bot-4.png", alt: "Laptop mockup", w: 390, h: 260, border: "rgba(204,255,0,0.4)" },
];

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
/*  Marquee row — duplicates images for seamless infinite scroll       */
/* ------------------------------------------------------------------ */
function MarqueeRow({
  images,
  direction = "left",
  duration = 30,
}: {
  images: typeof topRowImages;
  direction?: "left" | "right";
  duration?: number;
}) {
  const gap = 48;
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  const renderImages = (keyPrefix: string) =>
    images.map((img) => (
      <div
        key={`${keyPrefix}-${img.src}`}
        className="relative shrink-0 rounded-[4px] overflow-hidden"
        style={{
          width: img.w,
          height: img.h,
          border: `8px solid ${img.border}`,
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="rounded-[4px] object-cover"
          sizes={`${img.w}px`}
        />
      </div>
    ));

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex items-center"
        style={{
          gap,
          animation: `${animationName} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {renderImages("a")}
        {renderImages("b")}
        {renderImages("c")}
        {renderImages("d")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer: Mockup showcase with goonsdesign.com-style marquee         */
/* ------------------------------------------------------------------ */
function MockupShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  /*
   * With a 300vh container and offset ["start end", "end end"]:
   *   0.00 = top of container at bottom of viewport (just entering)
   *   ~0.33 = top of container at top of viewport (sticky kicks in)
   *   1.00 = bottom of container at bottom of viewport (sticky releases)
   *
   * Timeline:
   *   0.00–0.35  Background white → black
   *   0.25–0.55  Mockup rows slide in, text fades in
   *   0.55–1.00  Everything settled → sticky unpins, normal scroll
   */

  /* Background: white → black */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    ["rgb(255,255,255)", "rgb(255,255,255)", "rgb(0,0,0)", "rgb(0,0,0)"]
  );

  /* Headline color: dim spotlight → bright black → white (single rgba transform) */
  const headlineColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.22, 0.45, 1],
    [
      "rgba(0,0,0,0.15)",   // dim spotlight (matches SpotlightParagraph)
      "rgba(0,0,0,0.15)",   // hold dim
      "rgba(0,0,0,1)",      // brighten to full black early
      "rgba(255,255,255,1)", // transition to white as bg goes black
      "rgba(255,255,255,1)", // hold white
    ]
  );

  /* Text vertical position: starts near top (continuing paragraph flow) → glides to center */
  const textY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 1],
    ["-30vh", "-30vh", "0vh", "0vh"]
  );

  /* "consider it done" + CTA: hidden until bg is black, then fades in */
  const ctaOpacity = useTransform(scrollYProgress, [0.4, 0.55, 1], [0, 1, 1]);
  const ctaVisibility = useTransform(scrollYProgress, (v: number) =>
    v < 0.4 ? "hidden" as const : "visible" as const
  );

  /* Top marquee row: slides down from above → hold */
  const topY = useTransform(scrollYProgress, [0.35, 0.55, 1], ["-100%", "0%", "0%"]);
  const topOpacity = useTransform(scrollYProgress, [0.35, 0.55, 1], [0, 1, 1]);

  /* Bottom marquee row: slides up from below → hold */
  const botY = useTransform(scrollYProgress, [0.35, 0.55, 1], ["100%", "0%", "0%"]);
  const botOpacity = useTransform(scrollYProgress, [0.35, 0.55, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <motion.div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Top row — absolute at top, slides down from above */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-10 py-8"
          style={{ y: topY, opacity: topOpacity }}
        >
          <MarqueeRow images={topRowImages} direction="left" duration={25} />
        </motion.div>

        {/* Center content — headline + CTA with position animation */}
        <motion.div
          className="relative z-20 flex h-full flex-col items-center justify-center"
          style={{ y: textY }}
        >
          <div className="flex flex-col items-center gap-[34px]">
            <div className="flex flex-col items-center gap-[14px]">
              {/* "An impossible deadline?" — visible from start as spotlight */}
              <motion.p
                className="uppercase text-center"
                style={{
                  color: headlineColor,
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.9vw, 56px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                }}
              >
                An impossible deadline?
              </motion.p>

              {/* "consider it done" + CTA — fades in during black phase */}
              <motion.p
                className="text-center text-white"
                style={{
                  opacity: ctaOpacity,
                  visibility: ctaVisibility,
                  fontFamily: "var(--font-pencerio)",
                  fontWeight: 100,
                  fontSize: "clamp(40px, 6.1vw, 88px)",
                  lineHeight: 0.9,
                  padding: "0.2em 0.5em 0.3em",
                }}
              >
                consider it done
              </motion.p>
            </div>

            <motion.div style={{ opacity: ctaOpacity, visibility: ctaVisibility }}>
              <Link
                href="#contact"
                className="rounded-full bg-white px-8 py-5 text-black uppercase"
                style={{
                  fontFamily: "var(--font-switzer)",
                  fontWeight: 500,
                  fontSize: 17,
                  lineHeight: 1,
                }}
              >
                Book a Call
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom row — absolute at bottom, slides up from below */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 py-8"
          style={{ y: botY, opacity: botOpacity }}
        >
          <MarqueeRow images={botRowImages} direction="right" duration={30} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export function HoursSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /* Body text: slides up from below during the white transition */
  const { scrollYProgress: bodyProgress } = useScroll({
    target: bodyRef,
    offset: ["start end", "start 0.85"],
  });
  const bodyY = useTransform(bodyProgress, [0, 0.6, 1], ["100px", "0px", "0px"]);
  const bodyOpacity = useTransform(bodyProgress, [0, 0.5, 1], [0, 1, 1]);

  /* Background: black → white — transition happens in last 40% */
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.55, 0.85],
    ["rgb(11,11,11)", "rgb(11,11,11)", "rgb(255,255,255)"]
  );

  /* "72 hours" white text — fades out during the transition */
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [1, 1, 0]
  );

  return (
    <>
      {/* ── 72 hours on black → white ── */}
      <section ref={heroRef} className="relative h-[200vh]">
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
                <CountUp
                  to={1000}
                  from={72}
                  duration={0.5}
                  direction="down"
                  waypoints={[
                    1000, 847, 723, 618, 491, 385, 264, 158,
                    99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                    89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                    79, 78, 77, 76, 75, 74, 73, 72,
                  ]}
                />
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

      {/* ── Body text on white ── */}
      <section ref={bodyRef} className="relative z-10 bg-white" style={{ marginTop: "-40vh" }}>
        <motion.div
          className="mx-auto max-w-[1024px] px-6 pt-[10vh] pb-[5vh]"
          style={{ y: bodyY, opacity: bodyOpacity }}
        >
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
          </div>
        </motion.div>
      </section>

      {/* ── Mockup reveal: white spotlight → black with marquee ── */}
      <MockupShowcase />

      {/* ── Footer ── */}
      <V2Footer />
    </>
  );
}
