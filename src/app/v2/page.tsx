import { HeroScroll } from "@/components/v2/hero-scroll";
import { HoursSection } from "@/components/v2/hours-section";
import { V2Navbar } from "@/components/v2/v2-navbar";

export default function V2Page() {
  return (
    <>
      <V2Navbar />
      <HeroScroll />
      <HoursSection />
    </>
  );
}
