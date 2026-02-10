import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nightlatte — a digital product agency building interfaces, apps, and motion that ship fast and scale well.",
};

const story = [
  "Nightlatte started with a simple belief: the best digital products come from teams that design and build together — no handoffs, no silos, no lost context.",
  "We're a small, focused agency that partners with ambitious brands to ship products that actually work. We've seen too many projects die in committee, lost in translation between design and development teams. So we eliminated the gap.",
  "Every project starts with understanding the problem. Not the tech stack, not the visual style — the problem. Once we know what we're solving, we move fast. Design and code happen in parallel. Feedback loops are measured in hours, not weeks.",
];

const principles = [
  {
    title: "Ship Fast, Iterate Faster",
    description:
      "We'd rather put a working product in front of real users in 2 weeks than spend 6 months perfecting something nobody's tested.",
  },
  {
    title: "Craft Meets Pragmatism",
    description:
      "We care deeply about design quality and code architecture — but never at the expense of actually shipping.",
  },
  {
    title: "Transparency by Default",
    description:
      "You'll know exactly where your project stands at every point. No surprises, no scope creep without conversation.",
  },
  {
    title: "Built to Last",
    description:
      "We write code that future developers (including us) will thank us for. Clean architecture, typed interfaces, documented decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="A small agency doing focused work for ambitious brands."
      />

      <SectionWrapper>
        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold md:text-3xl">Our Story</h2>
          </FadeIn>
          <div className="space-y-6">
            {story.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-muted-foreground leading-relaxed">{p}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-border">
        <FadeIn>
          <h2 className="mb-12 text-2xl font-bold md:text-3xl">
            What We Believe
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="glass glass-hover rounded-2xl p-8 transition-all duration-300">
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-muted-foreground">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
