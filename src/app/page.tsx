import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { WorkGrid } from "@/components/home/work-grid";
import { BigMetric } from "@/components/home/big-metric";
import { MockupsSection } from "@/components/home/mockups-section";
import { EngineeringSection } from "@/components/home/engineering-section";
import { TechNumber } from "@/components/home/tech-number";
import { ServicesBento } from "@/components/home/services-bento";
import { ValuesSection } from "@/components/home/values-section";
import { QuoteSection } from "@/components/home/quote-section";
import { CaseStudyPreview } from "@/components/home/case-study-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WorkGrid />
      <BigMetric />
      <MockupsSection />
      <EngineeringSection />
      <TechNumber />
      <ServicesBento />
      <ValuesSection />
      <QuoteSection />
      <CaseStudyPreview />
      <CTASection />
    </>
  );
}
