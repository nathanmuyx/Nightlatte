"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const switzer = "var(--font-switzer)";

const cards = [
  {
    title: "Branding that feels alive",
    description: "No boring logos.\nNo safe visuals.",
    top: "19.5%",
    left: "0.2%",
    width: 319,
    height: 464,
    thumbnail: "/images/mockup-top-2.png",
  },
  {
    title: "Web builds at midnight speed",
    description: "Designed.\nDeveloped. Deployed.",
    top: "37.2%",
    left: "24%",
    width: 350,
    height: 468,
    thumbnail: "/images/mockup-top-3.png",
  },
  {
    title: "Apps that work hard",
    description: "Apps that work hard\nSimple UX. Powerful backend thinking.",
    top: "22.5%",
    left: "50%",
    width: 350,
    height: 450,
    thumbnail: "/images/mockup-top-1.png",
  },
  {
    title: "Motion that makes noise",
    description: "Motion that makes\nnoise. Because static\nis forgettable.",
    top: "15.8%",
    left: "75.9%",
    width: 350,
    height: 424,
    thumbnail: "/images/mockup-bot-3.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Desktop: hover cards with cursor-following floater                  */
/* ------------------------------------------------------------------ */
function DesktopCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const floaterRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = floaterRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.transform = `translate(${x - 40}px, ${y - 100}px)`;
    });
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-[884px] overflow-hidden md:block"
      onMouseMove={handleMouseMove}
    >
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className="absolute flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-10"
            style={{
              top: card.top,
              left: card.left,
              width: card.width,
              height: card.height,
              opacity:
                hoveredIndex === null
                  ? 1
                  : hoveredIndex === i
                    ? 0.1
                    : 0.4,
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p
              className="text-black"
              style={{
                fontFamily: switzer,
                fontWeight: 600,
                fontSize: 48,
                lineHeight: 0.7,
                letterSpacing: "-0.05em",
              }}
            >
              {card.title}
            </p>
            <p
              className="text-black whitespace-pre-wrap"
              style={{
                fontFamily: switzer,
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Floating cursor follower */}
      <div
        ref={floaterRef}
        className="pointer-events-none absolute left-0 top-0 z-50 flex flex-col items-start gap-[34px] will-change-transform"
        style={{
          opacity: hoveredIndex !== null ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {hoveredIndex !== null && (
          <>
            <p
              className="text-white"
              style={{
                fontFamily: switzer,
                fontWeight: 600,
                fontSize: 48,
                lineHeight: 0.7,
                letterSpacing: "-0.05em",
                maxWidth: 244,
              }}
            >
              {cards[hoveredIndex].title}
            </p>
            <div className="relative h-[303px] w-[511px] overflow-hidden rounded-3xl">
              <Image
                src={cards[hoveredIndex].thumbnail}
                alt={cards[hoveredIndex].title}
                fill
                className="object-cover"
                sizes="511px"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: vertical scrollable cards with tap-to-reveal thumbnails    */
/* ------------------------------------------------------------------ */
function MobileCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="block px-5 pb-16 md:hidden">
      <div className="flex flex-col gap-5">
        {cards.map((card, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl bg-white transition-all duration-300"
              style={{ opacity: activeIndex === null || isActive ? 1 : 0.4 }}
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              {/* Card content */}
              <div className="flex flex-col gap-4 p-6">
                <p
                  className="text-black"
                  style={{
                    fontFamily: switzer,
                    fontWeight: 600,
                    fontSize: "clamp(28px, 7vw, 40px)",
                    lineHeight: 0.85,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="text-black/60 whitespace-pre-wrap"
                  style={{
                    fontFamily: switzer,
                    fontWeight: 500,
                    fontSize: "clamp(14px, 4vw, 18px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* Thumbnail — expands on tap */}
              <div
                className="overflow-hidden transition-all duration-400 ease-out"
                style={{
                  maxHeight: isActive ? 240 : 0,
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="relative h-[240px] w-full">
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export function WhereWeGoHard() {
  return (
    <div className="bg-black">
      {/* ── Title section ── */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden md:h-[100vh]">
        <p
          className="text-center text-white"
          style={{
            fontFamily: switzer,
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(48px, 15.5vw, 224px)",
            lineHeight: 0.64,
            letterSpacing: "-0.05em",
            maxWidth: "85vw",
          }}
        >
          Where we go hard
        </p>
      </section>

      {/* ── Desktop: absolute positioned cards with hover ── */}
      <DesktopCards />

      {/* ── Mobile: vertical stack with tap-to-reveal ── */}
      <MobileCards />
    </div>
  );
}
