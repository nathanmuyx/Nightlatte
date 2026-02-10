import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "typid",
    title: "Typid",
    subtitle: "Event Ticketing, Reimagined",
    description:
      "How a failed finance app pivoted into a full-featured event ticketing platform in just 14 days — and powered real events within weeks.",
    client: "Typid",
    year: "2024",
    duration: "14-day pivot + ongoing",
    role: "Full-Stack Design & Development",
    techStack: [
      "Next.js 14",
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "QR Code API",
    ],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)",
    metrics: [
      { value: "14", label: "Day Pivot" },
      { value: "2", label: "Real Events" },
      { value: "5", label: "Ticket Tiers" },
      { value: "100%", label: "QR Check-in Rate" },
    ],
    chapters: [
      {
        number: 1,
        title: "The Original Vision",
        content: [
          "Typid started life as a personal finance app built with Flutter. The concept was ambitious: a multi-wallet expense tracker that would help users manage spending across different accounts and categories.",
          "After launching to a small group of ~70 users, the data told a clear story. Retention was poor, engagement was dropping week over week, and users weren't forming the daily habit the product needed to survive.",
          "The finance space was crowded, and without significant differentiation, Typid was heading toward becoming another abandoned side project.",
        ],
        visual: {
          label: "Finance App Dashboard — Original Flutter Build",
          gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
        },
      },
      {
        number: 2,
        title: "The 14-Day Pivot",
        content: [
          "The turning point came at a church community event. Organizers were tracking attendance and expenses manually — paper lists, spreadsheets, and cash-in-hand payments. The friction was visible.",
          "Within 48 hours, the decision was made: pivot Typid into an event ticketing platform. Not a generic one, but specifically designed for community events, church gatherings, and local festivals in the Philippines.",
          "A 14-day sprint began. The Flutter codebase was shelved entirely. The new stack: Next.js 14 for the frontend, Supabase for auth and database, and a laser focus on getting to a working MVP.",
        ],
        visual: {
          label: "Pivot Decision — Whiteboard Session",
          gradient: "linear-gradient(135deg, #312e81, #4c1d95)",
        },
      },
      {
        number: 3,
        title: "Building the Platform",
        content: [
          "Architecture decisions were made for speed without sacrificing quality. Next.js App Router provided server-side rendering and API routes in one framework. Supabase handled auth, database, and real-time subscriptions — eliminating the need for a separate backend.",
          "The design system was built from scratch: dark theme, clean typography, and a purple-violet gradient identity that felt premium without being corporate. Every screen was designed mobile-first, since most users would access it from their phones.",
          "Row Level Security in Supabase ensured organizers could only see their own events and attendee data. The QR code system was built to work offline-first — check-ins would sync when connectivity returned.",
        ],
        visual: {
          label: "Platform Architecture Diagram",
          gradient: "linear-gradient(135deg, #4c1d95, #6d28d9)",
        },
      },
      {
        number: 4,
        title: "Key Features",
        content: [
          "Event Creation & Management: Organizers can create events with custom descriptions, dates, venues, and cover images. Multi-day events and recurring series are supported.",
          "Multi-Tier Ticketing: Up to 5 ticket tiers per event — from free community passes to premium VIP access. Each tier has independent inventory, pricing, and descriptions.",
          "QR Code Check-In: Every ticket generates a unique QR code. Organizers scan at the door with their phone camera — no special hardware needed. Real-time attendance tracking updates instantly.",
          "Organizer Dashboard: A clean, real-time dashboard showing ticket sales, revenue breakdown, check-in rates, and attendee demographics. Data exports to CSV for post-event analysis.",
          "Local Payment Integration: GCash and Maya payment support — the two dominant mobile wallets in the Philippines. No credit card required, matching how the target audience actually pays.",
        ],
        visual: {
          label: "Typid Dashboard — Event Management View",
          gradient: "linear-gradient(135deg, #6d28d9, #7c3aed)",
        },
      },
      {
        number: 5,
        title: "Real-World Validation",
        content: [
          "The first real test came with Himaya, a community church event. Typid handled ticket distribution, check-in, and post-event analytics. The organizer reported that what used to take 3 people and 2 hours of manual work was now handled by one person with a phone.",
          "The second event, Aisen Fest, was larger — a local festival with multiple ticket tiers and higher volume. The platform held up. QR check-in averaged under 3 seconds per attendee, and the real-time dashboard gave organizers confidence they'd never had before.",
          "Both events surfaced valuable feedback that went straight into the product roadmap: better notification systems, post-event surveys, and a public event discovery page.",
        ],
        visual: {
          label: "Aisen Fest — Live Event Check-in",
          gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
        },
      },
      {
        number: 6,
        title: "Results & Impact",
        content: [
          "What started as a failing finance app became a working event platform in 14 days. Two real events were powered within the first month, with organizers reporting significant time savings and better attendee data than they'd ever had.",
          "The 100% QR check-in success rate validated the technical approach. The local payment integration removed the biggest barrier to ticket purchases in the Philippine market.",
          "Typid proved that sometimes the best product decision is knowing when to pivot — and having the technical agility to execute fast when you do.",
        ],
        visual: {
          label: "Results Dashboard — Event Analytics",
          gradient: "linear-gradient(135deg, #a855f7, #d946ef)",
        },
      },
    ],
    lessons: [
      "Kill your darlings early — 70 users with poor retention is a signal, not a setback.",
      "Build for a specific audience first. Community events in the Philippines, not 'events globally'.",
      "Speed compounds. A 14-day MVP that ships beats a 6-month product that doesn't.",
      "Local payment methods aren't a nice-to-have — they're the entire conversion funnel.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
