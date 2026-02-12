import { HeroScroll } from "@/components/v2/hero-scroll";
import { HoursSection } from "@/components/v2/hours-section";
import { LiquidEtherBg } from "@/components/v2/liquid-ether-bg";
import { V2Navbar } from "@/components/v2/v2-navbar";
import { WhereWeGoHard } from "@/components/v2/where-we-go-hard";

export default function HomePage() {
  return (
    <>
      <LiquidEtherBg />
      <div className="relative z-10">
        <V2Navbar />
        <HeroScroll />
        <WhereWeGoHard />
        <HoursSection />
      </div>
    </>
  );
}
