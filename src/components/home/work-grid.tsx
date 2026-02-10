"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function YouTubeEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden rounded-lg">
      {isInView && (
        <iframe
          src="https://www.youtube.com/embed/pd9PTSZ15Yk?autoplay=1&mute=1&loop=1&playlist=pd9PTSZ15Yk,PdvDt1TCXkg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={`pointer-events-none absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ border: 0, aspectRatio: "16/9" }}
          onLoad={() => setLoaded(true)}
        />
      )}
      {/* Fallback gradient shown until video loads */}
      <div
        className={`absolute inset-0 flex items-center justify-center rounded-lg transition-opacity duration-700 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`}
        style={{
          background: "linear-gradient(135deg, #1c1917, #292524, #44403c)",
        }}
      >
        <span className="text-sm font-medium text-white/40">
          Motion Design Reel
        </span>
      </div>
    </div>
  );
}

export function WorkGrid() {
  return (
    <section className="bg-black px-6 py-16">
      <motion.div
        className="mx-auto max-w-[1440px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid gap-6 md:grid-cols-[1fr_0.46fr] md:grid-rows-[420px_360px]">
          {/* Top left — large landscape */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-lg"
            style={{
              background: "linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95)",
            }}
          >
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-sm font-medium text-white/40">
                Typid — Event Ticketing Platform
              </span>
            </div>
          </motion.div>

          {/* Top right — tall portrait */}
          <motion.div
            variants={fadeInUp}
            className="row-span-2 hidden overflow-hidden rounded-lg md:block"
            style={{
              background: "linear-gradient(180deg, #0c4a6e, #164e63, #134e4a)",
            }}
          >
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-sm font-medium text-white/40">
                Dashboard Interface
              </span>
            </div>
          </motion.div>

          {/* Bottom left — Motion Design Reel (YouTube autoplay on scroll) */}
          <motion.div
            variants={fadeInUp}
            className="ml-0 overflow-hidden rounded-lg md:ml-[15%] md:mr-0"
          >
            <YouTubeEmbed />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
