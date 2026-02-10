import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { CTASection } from "@/components/home/cta-section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UI/UX design, dashboard & app development, and motion design for ads. Full-stack digital product services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="End-to-end digital product services — from research and design to production code and motion."
        gradientClass="gradient-text-warm"
      />

      <SectionWrapper>
        <div className="space-y-20">
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <div
                    className="mb-6 h-1 w-16 rounded-full"
                    style={{ background: service.gradient }}
                  />
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: service.gradient }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="mt-20 border-b border-border" />
              )}
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
