"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalendlyModal } from "./calendly-modal";

const switzer = "var(--font-switzer)";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs that need to ship fast.",
    price: "$2,500",
    period: "per project",
    features: [
      "UI/UX Design (up to 5 pages)",
      "Responsive development",
      "1 round of revisions",
      "72-hour turnaround",
      "Source files included",
    ],
    cta: "Get Started",
    href: "#contact",
    highlight: false,
  },
  {
    name: "Growth",
    description: "For teams building products that need to scale and impress.",
    price: "$5,000",
    period: "per project",
    features: [
      "Full UI/UX Design system",
      "Next.js / React development",
      "Dashboard & app builds",
      "3 rounds of revisions",
      "Priority 48-hour turnaround",
      "Dedicated project lead",
    ],
    cta: "Book a Call",
    href: "#contact",
    highlight: true,
  },
  {
    name: "Scale",
    description: "End-to-end digital product design and development.",
    price: "Custom",
    period: "let's talk",
    features: [
      "Everything in Growth",
      "Motion design & ad creatives",
      "Full-stack development",
      "API & database architecture",
      "Unlimited revisions",
      "Ongoing support & iteration",
    ],
    cta: "Contact Us",
    href: "#contact",
    highlight: false,
  },
];

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <section id="pricing" className="relative bg-black py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p
            className="text-white/40 uppercase mb-4"
            style={{
              fontFamily: switzer,
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.1em",
            }}
          >
            Pricing
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: switzer,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(36px, 7vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            Simple, honest pricing
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 md:p-10 transition-all duration-300",
                plan.highlight
                  ? "bg-white text-black"
                  : "bg-[#171717] text-white border border-white/[0.06]",
                hoveredIndex !== null && hoveredIndex !== i && "opacity-60"
              )}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Plan name */}
              <p
                className={cn(
                  "uppercase mb-3",
                  plan.highlight ? "text-black/50" : "text-white/40"
                )}
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <p
                style={{
                  fontFamily: switzer,
                  fontWeight: 700,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {plan.price}
              </p>
              <p
                className={cn(
                  "mt-1 mb-6",
                  plan.highlight ? "text-black/50" : "text-white/50"
                )}
                style={{
                  fontFamily: switzer,
                  fontWeight: 400,
                  fontSize: 14,
                }}
              >
                {plan.period}
              </p>

              {/* Description */}
              <p
                className={cn(
                  "mb-8",
                  plan.highlight ? "text-black/70" : "text-white/60"
                )}
                style={{
                  fontFamily: switzer,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mb-10 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-3",
                      plan.highlight ? "text-black/80" : "text-white/70"
                    )}
                    style={{
                      fontFamily: switzer,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      className={cn(
                        "mt-[2px] shrink-0",
                        plan.highlight ? "text-black" : "text-white/50"
                      )}
                    >
                      &#10003;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setCalendlyOpen(true)}
                className={cn(
                  "block w-full rounded-full py-4 text-center uppercase transition-colors cursor-pointer",
                  plan.highlight
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white text-black hover:bg-white/90"
                )}
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </section>
  );
}
