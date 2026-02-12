import { HeroScroll } from "@/components/v2/hero-scroll";
import { HoursSection } from "@/components/v2/hours-section";
import { V2Navbar } from "@/components/v2/v2-navbar";
import { WhereWeGoHard } from "@/components/v2/where-we-go-hard";

export default function HomePage() {
  return (
    <>
      <V2Navbar />
      <HeroScroll />
      <WhereWeGoHard />
      <HoursSection />
    </>
  );
}
