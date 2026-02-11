import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { ChapterBlock } from "@/components/case-study/chapter-block";
import { MetricsGrid } from "@/components/case-study/metrics-grid";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyHero study={study} />

      <SectionWrapper>
        <MetricsGrid metrics={study.metrics} gradient={study.gradient} />
      </SectionWrapper>

      <SectionWrapper>
        {study.chapters.map((chapter, i) => (
          <ChapterBlock key={chapter.number} chapter={chapter} reversed={i % 2 !== 0} />
        ))}
      </SectionWrapper>

      {study.lessons.length > 0 && (
        <SectionWrapper className="border-t border-border">
          <FadeIn>
            <h3 className="mb-8 text-2xl font-bold md:text-3xl">
              Lessons Learned
            </h3>
            <ul className="space-y-4">
              {study.lessons.map((lesson, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-muted-foreground leading-relaxed"
                >
                  <span className="shrink-0 text-sm font-semibold text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {lesson}
                </li>
              ))}
            </ul>
          </FadeIn>
        </SectionWrapper>
      )}
    </>
  );
}
