"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const metrics = [
  { value: "14", label: "Day Pivot" },
  { value: "2", label: "Real Events" },
  { value: "5", label: "Ticket Tiers" },
  { value: "100%", label: "QR Check-in Rate" },
];

const chapters = [
  {
    number: 1,
    title: "The Original Vision",
    content:
      "Typid started life as a personal finance app built with Flutter. After launching to ~70 users, retention was poor and engagement dropped week over week. The finance space was crowded, and without significant differentiation, Typid was heading toward becoming another abandoned side project.",
  },
  {
    number: 2,
    title: "The 14-Day Pivot",
    content:
      "The turning point came at a church community event. Organizers were tracking attendance manually — paper lists, spreadsheets, cash-in-hand. Within 48 hours, the decision was made: pivot Typid into an event ticketing platform built for community events in the Philippines. The Flutter codebase was shelved. The new stack: Next.js 14 + Supabase.",
  },
  {
    number: 3,
    title: "Building the Platform",
    content:
      "Next.js App Router provided SSR and API routes in one framework. Supabase handled auth, database, and real-time subscriptions. The design system was built from scratch — dark theme, clean typography, mobile-first. Row Level Security ensured organizers could only see their own data. The QR system was built offline-first.",
  },
  {
    number: 4,
    title: "Key Features",
    content:
      "Multi-tier ticketing with up to 5 tiers per event. QR code check-in averaging under 3 seconds per attendee. Real-time organizer dashboard with sales, revenue, and attendance data. GCash and Maya payment integration — matching how the Philippine market actually pays.",
  },
  {
    number: 5,
    title: "Real-World Validation",
    content:
      "Himaya, a community church event, was the first real test. What used to take 3 people and 2 hours of manual work was handled by one person with a phone. Aisen Fest, a larger local festival, confirmed the platform held up at scale. Both events surfaced feedback that went straight into the roadmap.",
  },
  {
    number: 6,
    title: "Results & Impact",
    content:
      "A failing finance app became a working event platform in 14 days. Two real events powered within the first month. 100% QR check-in success rate validated the technical approach. Local payment integration removed the biggest barrier to ticket purchases.",
  },
];

const lessons = [
  "Kill your darlings early — 70 users with poor retention is a signal, not a setback.",
  "Build for a specific audience first. Community events in the Philippines, not 'events globally'.",
  "Speed compounds. A 14-day MVP that ships beats a 6-month product that doesn't.",
  "Local payment methods aren't a nice-to-have — they're the entire conversion funnel.",
];

const techStack = [
  "Next.js 14",
  "Supabase",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "QR Code API",
];

export default function TypidCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-6 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, #6366f1 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #d946ef 0%, transparent 50%)",
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
            Case Study
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-[clamp(48px,8vw,110px)] font-normal leading-[1.1] tracking-[-0.07em]"
          >
            <span className="gradient-text-typid">Typid</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-[clamp(20px,3vw,32px)] font-medium text-white/60"
          >
            Event Ticketing, Reimagined
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a5a9]"
          >
            How a failed finance app pivoted into a full-featured event
            ticketing platform in just 14 days — and powered real events
            within weeks.
          </motion.p>

          {/* Meta */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { label: "Client", value: "Typid" },
              { label: "Year", value: "2024" },
              { label: "Timeline", value: "14-day pivot + ongoing" },
              { label: "Role", value: "Full-Stack Design & Dev" },
            ].map((item) => (
              <div key={item.label}>
                <p className="mb-1 text-xs font-medium tracking-widest uppercase text-[#a3a5a9]">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="bg-black px-6 py-16">
        <motion.div
          className="mx-auto max-w-[1140px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m) => (
              <motion.div key={m.label} variants={fadeInUp} className="text-center">
                <div className="gradient-text-typid text-[clamp(40px,6vw,72px)] font-bold tracking-tight">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-[#a3a5a9]">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Phone showcase */}
      <section className="relative overflow-hidden bg-black px-6 py-16 md:py-24">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-[500px] w-[500px] rounded-full bg-[#17bff9]"
            style={{ filter: "blur(100px)", opacity: 0.1 }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[1000px] items-center justify-center gap-4 md:gap-8">
          {[
            { src: "/images/typid-phone-1.png", alt: "Typid home screen" },
            { src: "/images/typid-phone-2.png", alt: "Typid event setup" },
            { src: "/images/typid-phone-3.png", alt: "Typid QR check-in" },
            { src: "/images/typid-phone-4.png", alt: "Typid transactions" },
          ].map((phone, i) => (
            <motion.div
              key={phone.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative h-[280px] w-[140px] overflow-hidden rounded-[20px] border-[3px] border-white/10 shadow-2xl md:h-[480px] md:w-[220px] md:rounded-[28px]"
            >
              <Image
                src={phone.src}
                alt={phone.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 140px, 220px"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-black px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="mb-20 last:mb-0"
            >
              <p className="mb-2 text-sm font-semibold text-amber">
                Chapter {chapter.number}
              </p>
              <h3 className="mb-6 text-[clamp(24px,4vw,40px)] font-medium tracking-[-0.03em] text-white">
                {chapter.title}
              </h3>
              <p className="text-lg leading-relaxed text-[#a3a5a9]">
                {chapter.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard screenshots */}
      <section className="bg-black px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1140px] gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[280px] overflow-hidden rounded-[24px] bg-[#0a0a0a] md:h-[360px]"
          >
            <div className="absolute -left-[80px] -top-[40px]">
              <div
                className="h-[300px] w-[300px] rounded-full bg-[#17bff9]"
                style={{ filter: "blur(60px)", opacity: 0.2 }}
              />
            </div>
            <Image
              src="/images/typid-dashboard.png"
              alt="Typid event management dashboard"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[280px] overflow-hidden rounded-[24px] bg-[#0a0a0a] md:h-[360px]"
          >
            <div className="absolute -right-[60px] -top-[30px]">
              <div
                className="h-[250px] w-[250px] rounded-full bg-[#8b5cf6]"
                style={{ filter: "blur(50px)", opacity: 0.2 }}
              />
            </div>
            <Image
              src="/images/typid-analytics.png"
              alt="Typid analytics dashboard"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </motion.div>
        </div>
      </section>

      {/* Lessons */}
      <section className="bg-black px-6 py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-[800px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h3
            variants={fadeInUp}
            className="mb-12 text-[clamp(32px,5vw,48px)] font-medium tracking-[-0.04em] text-white"
          >
            Lessons Learned
          </motion.h3>
          <div className="space-y-6">
            {lessons.map((lesson, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <span className="shrink-0 text-sm font-semibold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-[#a3a5a9]">
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Back to home */}
      <section className="bg-black px-6 pb-24">
        <div className="mx-auto max-w-[800px]">
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
