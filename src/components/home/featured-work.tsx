"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { caseStudies } from "@/data/case-studies";

export function FeaturedWork() {
  const featured = caseStudies[0];

  return (
    <SectionWrapper>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeInUp}
          className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Featured Work
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-3xl font-bold tracking-tight md:text-5xl"
        >
          Case Studies
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <Link href={`/work/${featured.slug}`} className="group block">
            <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border/80">
              <PlaceholderImage
                label={`${featured.title} — ${featured.subtitle}`}
                gradient={featured.gradient}
                className="h-64 rounded-none md:h-96"
                aspectRatio=""
              />
              <div className="p-8 md:p-10">
                <div className="mb-4 flex flex-wrap gap-2">
                  {featured.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mb-6 max-w-2xl text-muted-foreground">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-amber">
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
