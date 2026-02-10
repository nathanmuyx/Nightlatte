import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { CTASection } from "@/components/home/cta-section";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects — see how we design and build digital products that ship.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work"
        subtitle="Real projects, real impact. Here's what we've built."
        gradientClass="gradient-text-typid"
      />

      <SectionWrapper>
        <div className="grid gap-8">
          {caseStudies.map((study) => (
            <FadeIn key={study.slug}>
              <Link href={`/work/${study.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border/80">
                  <PlaceholderImage
                    label={`${study.title} — ${study.subtitle}`}
                    gradient={study.gradient}
                    className="h-48 rounded-none md:h-72"
                    aspectRatio=""
                  />
                  <div className="p-8 md:p-10">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {study.techStack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                      {study.title}
                    </h2>
                    <p className="mb-6 max-w-2xl text-muted-foreground">
                      {study.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-amber">
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
