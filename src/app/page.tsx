import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { WorkGrid } from "@/components/home/work-grid";
import { CaseStudyPreview } from "@/components/home/case-study-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <WorkGrid />
      <CaseStudyPreview />
      <CTASection />
    </>
  );
}
