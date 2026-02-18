"use client";

import { useState } from "react";
import { CalendlyModal } from "./calendly-modal";

const switzer = "var(--font-switzer)";
const pencerio = "var(--font-pencerio)";

const plans = [
  {
    name: "Launch",
    delivery: "72 hours",
    price: "$2,500",
    description: "One page. Designed, built, and live in three days.",
    features: [
      "Custom-designed landing page",
      "Mobile-ready & responsive",
      "Contact form & basic SEO",
      "Smooth animations",
      "1 revision round",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Grow",
    delivery: "10–14 days",
    price: "$5,000",
    description: "A full website for businesses ready to show up properly online.",
    features: [
      "Up to 5 custom pages",
      "UI/UX design from scratch",
      "Blog or portfolio section",
      "Motion & micro-interactions",
      "Performance tuned",
      "2 revision rounds",
    ],
    cta: "Book a Call",
    popular: true,
  },
  {
    name: "Scale",
    delivery: "2–3 weeks",
    price: "$8,500",
    description: "For brands that need everything — strategy, design, integrations, and post-launch care.",
    features: [
      "8–12 pages",
      "UX strategy & wireframes",
      "Advanced animations & motion",
      "CRM & booking integrations",
      "SEO & speed optimized",
      "30-day post-launch support",
      "3 revision rounds",
    ],
    cta: "Book a Call",
    popular: false,
  },
];

export function PricingSection() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <section id="pricing" className="relative bg-black py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <p
            className="text-white/30 uppercase mb-6"
            style={{
              fontFamily: switzer,
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.15em",
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
              fontSize: "clamp(40px, 7vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Websites that launch
            <br />
            <span style={{ fontFamily: pencerio, fontWeight: 100, fontStyle: "normal" }}>
              while others plan
            </span>
          </h2>
        </div>

        {/* Plans */}
        <div className="grid gap-px md:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.08]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col bg-[#0f0f0f] p-8 md:p-10"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-8 right-8 md:top-10 md:right-10 rounded-full bg-white px-4 py-1.5"
                  style={{
                    fontFamily: switzer,
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.05em",
                    color: "black",
                  }}
                >
                  Most popular
                </div>
              )}

              {/* Name + delivery */}
              <p
                className="text-white/40 uppercase"
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                }}
              >
                {plan.name}
              </p>
              <p
                className="mt-1 text-white/20"
                style={{
                  fontFamily: switzer,
                  fontWeight: 400,
                  fontSize: 13,
                }}
              >
                {plan.delivery}
              </p>

              {/* Price */}
              <p
                className="mt-6 text-white"
                style={{
                  fontFamily: switzer,
                  fontWeight: 600,
                  fontSize: "clamp(40px, 4vw, 64px)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {plan.price}
              </p>

              {/* Description */}
              <p
                className="mt-4 mb-8 text-white/50"
                style={{
                  fontFamily: switzer,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.08] mb-8" />

              {/* Features — minimal, no checkmarks */}
              <div className="flex flex-col gap-3.5 flex-1 mb-10">
                {plan.features.map((feature) => (
                  <p
                    key={feature}
                    className="text-white/60"
                    style={{
                      fontFamily: switzer,
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.4,
                    }}
                  >
                    {feature}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setCalendlyOpen(true)}
                className="block w-full rounded-full border border-white/[0.15] py-4 text-center text-white uppercase transition-all hover:bg-white hover:text-black cursor-pointer"
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom / Enterprise row */}
        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[600px]">
              <p
                className="text-white/40 uppercase mb-2"
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.15em",
                }}
              >
                Custom Build
              </p>
              <p
                className="text-white"
                style={{
                  fontFamily: switzer,
                  fontWeight: 500,
                  fontSize: "clamp(20px, 3vw, 28px)",
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                }}
              >
                Mobile apps, dashboards, or something we haven&apos;t built yet.
              </p>
              <p
                className="mt-2 text-white/40"
                style={{
                  fontFamily: switzer,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.5,
                }}
              >
                Scoped and priced per project. We&apos;ll figure it out together.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setCalendlyOpen(true)}
              className="shrink-0 rounded-full bg-white px-10 py-4 text-center text-black uppercase transition-colors hover:bg-white/90 cursor-pointer"
              style={{
                fontFamily: switzer,
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.06em",
              }}
            >
              Book a Call
            </button>
          </div>
        </div>

        {/* Footnote */}
        <p
          className="mt-8 text-center text-white/20"
          style={{
            fontFamily: switzer,
            fontWeight: 400,
            fontSize: 13,
          }}
        >
          All plans include full design & development. Domain and hosting not included.
        </p>
      </div>

      <CalendlyModal open={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </section>
  );
}
