"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";

/* ─── Data ────────────────────────────────────────────────────────── */

const coreColors = [
  { name: "Background", hex: "#0a0a0a", token: "--background" },
  { name: "Foreground", hex: "#f5f5f5", token: "--foreground" },
  { name: "Surface", hex: "#121212", token: "--surface" },
  { name: "Surface Raised", hex: "#1c1c1c", token: "--surface-raised" },
];

const accentColors = [
  { name: "Amber / Gold", hex: "#f0a030", token: "--accent" },
  { name: "Destructive / Pink", hex: "#dc5078", token: "--destructive" },
];

const mutedColors = [
  { name: "Muted Foreground", hex: "#8c8c8c", token: "--muted-foreground" },
  {
    name: "Border",
    hex: "rgba(255,255,255,0.1)",
    token: "--border",
    style: "rgba(255,255,255,0.1)",
  },
];

const chartColors = [
  { name: "Chart 1", hex: "#50b1db" },
  { name: "Chart 2", hex: "#c09ff5" },
  { name: "Chart 3", hex: "#f0a030" },
  { name: "Chart 4", hex: "#dc5078" },
  { name: "Chart 5", hex: "#38bdf8" },
];

const gradients = [
  {
    name: "Hero",
    className: "gradient-text-hero",
    css: "linear-gradient(90deg, #e37ad5, #8598ff)",
  },
  {
    name: "Body",
    className: "gradient-text-body",
    css: "linear-gradient(to right, #553dbe, #ffffff)",
  },
  {
    name: "Gold",
    className: "gradient-text-gold",
    css: "linear-gradient(to right, #ffffff, #f9d3a2, #ebbe94)",
  },
  {
    name: "Typid",
    className: "gradient-text-typid",
    css: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)",
  },
  {
    name: "Blue",
    className: "gradient-text-blue",
    css: "linear-gradient(135deg, #50b1db, #c09ff5)",
  },
  {
    name: "Warm",
    className: "gradient-text-warm",
    css: "linear-gradient(135deg, #f0a030, #dc5078)",
  },
  {
    name: "Fade",
    className: "gradient-text-fade",
    css: "linear-gradient(to bottom, rgba(255,255,255,1) 17%, rgba(255,255,255,0) 100%)",
  },
];

const bgGradients = [
  {
    name: "Cyan Glow",
    css: "radial-gradient(ellipse at 50% 50%, #50b1db 0%, transparent 70%)",
  },
  {
    name: "Purple Glow",
    css: "radial-gradient(ellipse at 50% 50%, #8b5cf6 0%, transparent 70%)",
  },
  {
    name: "Typid Glow",
    css: "radial-gradient(ellipse at 30% 50%, #6366f1 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #d946ef 0%, transparent 50%)",
  },
];

const fontWeights = [
  { weight: 300, label: "Light" },
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "SemiBold" },
  { weight: 700, label: "Bold" },
];

const headingScale = [
  {
    label: "Display",
    clamp: "clamp(48px, 8vw, 110px)",
    tracking: "-0.07em",
    sample: "Build.",
  },
  {
    label: "H1",
    clamp: "clamp(36px, 6vw, 72px)",
    tracking: "-0.04em",
    sample: "We Ship Products",
  },
  {
    label: "H2",
    clamp: "clamp(32px, 5vw, 48px)",
    tracking: "-0.04em",
    sample: "Lessons Learned",
  },
  {
    label: "H3",
    clamp: "clamp(24px, 4vw, 40px)",
    tracking: "-0.03em",
    sample: "Feature Section",
  },
  {
    label: "Body",
    clamp: "18px",
    tracking: "normal",
    sample:
      "We design and build digital products that matter.",
  },
];

const containerWidths = [
  { label: "Max", value: "1440px" },
  { label: "Content", value: "1140px" },
  { label: "Reading (wide)", value: "1024px" },
  { label: "Reading (narrow)", value: "800px" },
];

const radiusScale = [
  { label: "sm", value: "6px" },
  { label: "md", value: "8px" },
  { label: "lg (base)", value: "10px" },
  { label: "xl", value: "14px" },
  { label: "2xl", value: "18px" },
  { label: "3xl", value: "22px" },
  { label: "4xl", value: "26px" },
];

const animations = [
  {
    name: "fadeInUp",
    description: "Fade in with 30px upward slide",
    duration: "0.6s",
    easing: "[0.22, 1, 0.36, 1]",
  },
  {
    name: "fadeIn",
    description: "Simple opacity fade",
    duration: "0.6s",
    easing: "easeOut",
  },
  {
    name: "scaleIn",
    description: "Fade in with scale from 0.95",
    duration: "0.5s",
    easing: "[0.22, 1, 0.36, 1]",
  },
  {
    name: "staggerContainer",
    description: "Parent container that staggers children",
    duration: "—",
    easing: "staggerChildren: 0.12s",
  },
];

const dosDonts = [
  {
    do: "Use Foreground (#f5f5f5) text on Background (#0a0a0a)",
    dont: "Use pure white (#fff) on Background",
  },
  {
    do: "Use gradient text for headings only",
    dont: "Apply gradient text to body copy",
  },
  {
    do: "Maintain minimum clear space around the wordmark",
    dont: "Crowd the wordmark with adjacent elements",
  },
  {
    do: "Pair Inter for UI with Playfair for editorial accents",
    dont: "Use Playfair for buttons or labels",
  },
  {
    do: "Use accent (#f0a030) sparingly for emphasis",
    dont: "Fill large areas with accent color",
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────── */

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="mb-12"
    >
      <p className="mb-2 text-sm font-medium tracking-widest uppercase text-[#f0a030]">
        {label}
      </p>
      <h2 className="text-[clamp(32px,5vw,48px)] font-medium tracking-[-0.04em] text-white">
        {title}
      </h2>
    </motion.div>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-white/10 px-6 py-16">
      <p className="text-sm text-[#8c8c8c]">{text}</p>
    </div>
  );
}

function Swatch({
  color,
  name,
  hex,
}: {
  color: string;
  name: string;
  hex: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 w-full rounded-xl border border-white/10"
        style={{ background: color }}
      />
      <p className="text-sm font-medium text-white">{name}</p>
      <p className="font-mono text-xs text-[#8c8c8c]">{hex}</p>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function BrandPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, #e37ad5 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #8598ff 0%, transparent 50%)",
            }}
          />
        </div>
        <motion.div
          className="relative mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-medium tracking-widest uppercase text-[#a3a5a9]"
          >
            Nightlatte
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-[clamp(48px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
          >
            <span className="gradient-text-hero">Brand Guidelines</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-[clamp(20px,3vw,32px)] font-medium text-white/60"
          >
            We Build. We Ship.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 2. Logo & Wordmark ──────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="01" title="Logo & Wordmark" />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Wordmark – dark */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#0a0a0a] p-12"
            >
              <span className="font-sans text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.04em] text-white">
                Nightlatte
              </span>
            </motion.div>

            {/* Wordmark – light */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#f5f5f5] p-12"
            >
              <span className="font-sans text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.04em] text-[#0a0a0a]">
                Nightlatte
              </span>
            </motion.div>

            {/* Clear space demo */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-[#121212] p-12"
            >
              <div className="relative inline-block border-2 border-dashed border-[#f0a030]/40 p-8">
                <span className="font-sans text-3xl font-bold tracking-[-0.04em] text-white">
                  Nightlatte
                </span>
                <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-[#f0a030]/60">
                  1x
                </span>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-[#f0a030]/60">
                  1x
                </span>
              </div>
              <p className="text-xs text-[#8c8c8c]">
                Minimum clear space — 1x = cap height of the &quot;N&quot;
              </p>
            </motion.div>

            {/* Logo mark placeholder */}
            <motion.div variants={fadeInUp}>
              <Placeholder text="Logo mark icon — coming soon" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. Color Palette ────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="02" title="Color Palette" />

          {/* Core */}
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Core
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {coreColors.map((c) => (
              <Swatch key={c.hex} color={c.hex} name={c.name} hex={c.hex} />
            ))}
          </motion.div>

          {/* Accent */}
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Accent
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {accentColors.map((c) => (
              <Swatch key={c.hex} color={c.hex} name={c.name} hex={c.hex} />
            ))}
          </motion.div>

          {/* Muted */}
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Muted
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {mutedColors.map((c) => (
              <Swatch
                key={c.name}
                color={c.style ?? c.hex}
                name={c.name}
                hex={c.hex}
              />
            ))}
          </motion.div>

          {/* Chart */}
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Chart Palette
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4 md:grid-cols-5"
          >
            {chartColors.map((c) => (
              <Swatch key={c.hex} color={c.hex} name={c.name} hex={c.hex} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── 4. Gradients ────────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="03" title="Gradients" />

          {/* Text gradients */}
          <motion.p
            variants={fadeInUp}
            className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Text Gradients
          </motion.p>
          <motion.div variants={fadeInUp} className="mb-12 space-y-4">
            {gradients.map((g) => (
              <div
                key={g.name}
                className="flex items-center gap-6 rounded-xl border border-white/10 bg-[#121212] px-6 py-5"
              >
                <span
                  className={`shrink-0 text-2xl font-bold ${g.className}`}
                >
                  Nightlatte
                </span>
                <div className="ml-auto text-right">
                  <p className="text-sm font-medium text-white">{g.name}</p>
                  <p className="font-mono text-xs text-[#8c8c8c]">
                    .{g.className}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Background glows */}
          <motion.p
            variants={fadeInUp}
            className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40"
          >
            Background Glows
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-3"
          >
            {bgGradients.map((g) => (
              <div key={g.name} className="flex flex-col gap-2">
                <div
                  className="h-32 rounded-xl border border-white/10"
                  style={{
                    background: `#0a0a0a`,
                  }}
                >
                  <div
                    className="h-full w-full rounded-xl opacity-30"
                    style={{ background: g.css }}
                  />
                </div>
                <p className="text-sm font-medium text-white">{g.name}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── 5. Typography ───────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="04" title="Typography" />

          {/* Inter weights */}
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Inter — Primary Sans-Serif
            </p>
            <div className="space-y-4">
              {fontWeights.map((fw) => (
                <div
                  key={fw.weight}
                  className="flex items-baseline gap-6 border-b border-white/5 pb-4"
                >
                  <span className="w-24 shrink-0 font-mono text-xs text-[#8c8c8c]">
                    {fw.weight} {fw.label}
                  </span>
                  <span
                    className="font-sans text-2xl text-white"
                    style={{ fontWeight: fw.weight }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Playfair */}
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Playfair Display — Serif Accent
            </p>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-8">
              <span className="font-serif text-[clamp(32px,5vw,56px)] italic leading-tight text-white">
                The details are not the details.
                <br />
                They make the design.
              </span>
            </div>
          </motion.div>

          {/* Heading scale */}
          <motion.div variants={fadeInUp}>
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Heading Scale
            </p>
            <div className="space-y-6">
              {headingScale.map((h) => (
                <div
                  key={h.label}
                  className="border-b border-white/5 pb-6"
                >
                  <div className="mb-2 flex items-center gap-4">
                    <span className="text-xs font-semibold text-[#f0a030]">
                      {h.label}
                    </span>
                    <span className="font-mono text-xs text-[#8c8c8c]">
                      {h.clamp}
                      {h.tracking !== "normal" &&
                        ` · letter-spacing: ${h.tracking}`}
                    </span>
                  </div>
                  <p
                    className="font-sans text-white"
                    style={{
                      fontSize: h.clamp,
                      letterSpacing: h.tracking,
                      lineHeight: 1.1,
                    }}
                  >
                    {h.sample}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Letter spacing */}
          <motion.div variants={fadeInUp} className="mt-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Letter Spacing
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Tight", value: "-0.07em", use: "Display headings" },
                { label: "Medium", value: "-0.04em", use: "Section headings" },
                { label: "Normal", value: "0", use: "Body text" },
              ].map((ls) => (
                <div
                  key={ls.label}
                  className="rounded-xl border border-white/10 bg-[#121212] p-6"
                >
                  <p
                    className="mb-2 text-xl font-semibold text-white"
                    style={{ letterSpacing: ls.value }}
                  >
                    Nightlatte
                  </p>
                  <p className="font-mono text-xs text-[#8c8c8c]">
                    {ls.value} — {ls.use}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 6. Spacing & Layout ─────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="05" title="Spacing & Layout" />

          {/* Container widths */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Container Widths
            </p>
            <div className="space-y-3">
              {containerWidths.map((cw) => (
                <div key={cw.label} className="flex items-center gap-4">
                  <span className="w-32 shrink-0 text-sm text-[#8c8c8c]">
                    {cw.label}
                  </span>
                  <div className="relative h-8 flex-1">
                    <div
                      className="absolute left-0 top-0 h-full rounded-md bg-white/5 border border-white/10"
                      style={{
                        width: `${(parseInt(cw.value) / 1440) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-16 text-right font-mono text-xs text-[#8c8c8c]">
                    {cw.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section padding */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Section Padding
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
                <p className="mb-1 text-sm font-medium text-white">Vertical</p>
                <p className="font-mono text-xs text-[#8c8c8c]">
                  py-24 (96px) — py-32 (128px)
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
                <p className="mb-1 text-sm font-medium text-white">
                  Horizontal
                </p>
                <p className="font-mono text-xs text-[#8c8c8c]">px-6 (24px)</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#121212] p-6">
                <p className="mb-1 text-sm font-medium text-white">
                  Hero Top
                </p>
                <p className="font-mono text-xs text-[#8c8c8c]">
                  pt-40 (160px) — pt-48 (192px)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Border radius */}
          <motion.div variants={fadeInUp}>
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Border Radius Scale
            </p>
            <div className="flex flex-wrap gap-4">
              {radiusScale.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="h-16 w-16 border border-white/20 bg-white/5"
                    style={{ borderRadius: r.value }}
                  />
                  <p className="text-xs font-medium text-white">{r.label}</p>
                  <p className="font-mono text-[10px] text-[#8c8c8c]">
                    {r.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 7. Components ───────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="06" title="Components" />

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Buttons
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90">
                Primary
              </button>
              <button className="rounded-full bg-[#0a0a0a] border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">
                CTA Dark
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40">
                Outline
              </button>
              <button className="rounded-full px-6 py-3 text-sm font-semibold text-white/60 transition-colors hover:text-white">
                Ghost
              </button>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Cards
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
                <p className="mb-2 text-lg font-semibold text-white">
                  Dark Card
                </p>
                <p className="text-sm leading-relaxed text-[#8c8c8c]">
                  Surface background with subtle border. Used for content
                  blocks and feature grids.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#1c1c1c] p-6">
                <p className="mb-2 text-lg font-semibold text-white">
                  Raised Card
                </p>
                <p className="text-sm leading-relaxed text-[#8c8c8c]">
                  Surface-raised background. Provides visual hierarchy above
                  the dark card.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="mb-2 text-lg font-semibold text-white">
                  Glass Card
                </p>
                <p className="text-sm leading-relaxed text-[#8c8c8c]">
                  Glassmorphism with blur backdrop. Used for overlays and the
                  navigation bar.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pills / Badges */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Badges & Pills
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Supabase",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Glass navbar demo */}
          <motion.div variants={fadeInUp}>
            <p className="mb-6 text-sm font-semibold tracking-widest uppercase text-white/40">
              Glass Effect (Navbar)
            </p>
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, #1c1c1c 0%, #0a0a0a 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, #50b1db, transparent 60%)",
                  }}
                />
              </div>
              <div className="glass relative mx-4 mt-4 flex items-center justify-between rounded-full px-6 py-3">
                <span className="text-sm font-bold text-white">
                  Nightlatte
                </span>
                <div className="flex gap-6">
                  <span className="text-sm text-white/60">About</span>
                  <span className="text-sm text-white/60">Work</span>
                  <span className="text-sm text-white/60">Contact</span>
                </div>
              </div>
              <div className="h-40" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 8. Motion & Animation ───────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="07" title="Motion & Animation" />

          <motion.div
            variants={fadeInUp}
            className="mb-8 grid gap-4 md:grid-cols-2"
          >
            {animations.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-white/10 bg-[#121212] p-6"
              >
                <p className="mb-1 font-mono text-sm font-semibold text-white">
                  {a.name}
                </p>
                <p className="mb-3 text-sm text-[#8c8c8c]">
                  {a.description}
                </p>
                <div className="flex gap-4 font-mono text-xs text-[#8c8c8c]">
                  <span>
                    duration: <span className="text-white/60">{a.duration}</span>
                  </span>
                  <span>
                    ease: <span className="text-white/60">{a.easing}</span>
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-white/10 bg-[#121212] p-6"
          >
            <p className="mb-2 text-sm font-semibold text-white">
              Standard Easing Curve
            </p>
            <p className="font-mono text-sm text-[#8c8c8c]">
              cubic-bezier(0.22, 1, 0.36, 1)
            </p>
            <p className="mt-4 text-sm text-[#8c8c8c]">
              Custom ease-out curve used across all entrance animations.
              Provides a snappy start with a smooth deceleration. Standard
              duration is <span className="text-white/60">0.6s</span> with a
              stagger delay of <span className="text-white/60">0.12s</span>{" "}
              between siblings.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 9. Imagery & Photography ────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="08" title="Imagery & Photography" />

          <motion.div variants={fadeInUp} className="mb-8">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Glow demo */}
              <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full"
                  style={{
                    background: "#50b1db",
                    filter: "blur(50px)",
                    opacity: 0.25,
                  }}
                />
                <div
                  className="absolute left-2/3 top-1/3 h-32 w-32 rounded-full"
                  style={{
                    background: "#c09ff5",
                    filter: "blur(40px)",
                    opacity: 0.2,
                  }}
                />
                <div className="relative flex h-full items-end p-4">
                  <p className="text-xs text-[#8c8c8c]">
                    Dark bg + cyan/purple glow blobs
                  </p>
                </div>
              </div>

              {/* Screenshot frame demo */}
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#121212] p-6">
                <div className="h-28 w-full rounded-xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center">
                  <p className="text-xs text-[#8c8c8c]">
                    Screenshot frame — dark card + border-white/10
                  </p>
                </div>
              </div>

              {/* Phone mockup demo */}
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#121212] p-6">
                <div className="h-36 w-[72px] rounded-[16px] border-[3px] border-white/10 bg-[#0a0a0a] flex items-center justify-center">
                  <p className="text-[8px] text-center text-[#8c8c8c] px-1">
                    Phone mockup
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 md:grid-cols-2"
          >
            <Placeholder text="Photography style guide — coming soon" />
            <Placeholder text="Illustration system — coming soon" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 10. Voice & Tone ────────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="09" title="Voice & Tone" />

          <motion.div
            variants={fadeInUp}
            className="mb-8 grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="mb-4 text-sm font-semibold text-white">
                Principles
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#8c8c8c]">
                <li>Short, direct copy. No fluff.</li>
                <li>Technical but human.</li>
                <li>Confident, not arrogant.</li>
                <li>Show, don&apos;t tell — let the work speak.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="mb-4 text-sm font-semibold text-white">
                Examples
              </p>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-xs font-medium text-green-400/80">
                    Do
                  </p>
                  <p className="text-sm text-[#8c8c8c]">
                    &quot;We build digital products that matter.&quot;
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-[#dc5078]">
                    Don&apos;t
                  </p>
                  <p className="text-sm text-[#8c8c8c]">
                    &quot;We leverage cutting-edge synergies to disrupt the
                    paradigm.&quot;
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-green-400/80">
                    Do
                  </p>
                  <p className="text-sm text-[#8c8c8c]">
                    &quot;14-day pivot. Real events within weeks.&quot;
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-[#dc5078]">
                    Don&apos;t
                  </p>
                  <p className="text-sm text-[#8c8c8c]">
                    &quot;Our agile methodology enabled rapid iteration
                    cycles.&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Placeholder text="Full copywriting guide — coming soon" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 11. Do's & Don'ts ───────────────────────────────────── */}
      <section className="bg-black px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeading label="10" title="Do's & Don'ts" />

          <motion.div variants={fadeInUp} className="space-y-4">
            {dosDonts.map((item, i) => (
              <div
                key={i}
                className="grid gap-4 md:grid-cols-2"
              >
                <div className="flex items-start gap-3 rounded-xl border border-green-400/20 bg-green-400/5 p-4">
                  <span className="mt-0.5 text-green-400/80">&#10003;</span>
                  <p className="text-sm text-[#a3a5a9]">{item.do}</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-[#dc5078]/20 bg-[#dc5078]/5 p-4">
                  <span className="mt-0.5 text-[#dc5078]">&#10005;</span>
                  <p className="text-sm text-[#a3a5a9]">{item.dont}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Back ────────────────────────────────────────────────── */}
      <section className="bg-black px-6 pb-24">
        <div className="mx-auto max-w-[1140px]">
          <Link
            href="/"
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            &larr; Back to Nightlatte
          </Link>
        </div>
      </section>
    </>
  );
}
