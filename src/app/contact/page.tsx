"use client";

import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Have a project in mind? Let's talk about it."
        gradientClass="gradient-text-blue"
      />

      <SectionWrapper>
        <div className="grid gap-16 md:grid-cols-2">
          {/* Form */}
          <FadeIn>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-xl bg-card border-border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-xl bg-card border-border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="rounded-xl bg-card border-border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="rounded-xl bg-card border-border"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-10">
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Let&apos;s build something together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a clear spec or just a rough idea, we&apos;d
                  love to hear about it. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>hello@nightlatte.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>Philippines (Remote-first)</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="mb-2 text-sm font-semibold">
                  Typical response time
                </h4>
                <p className="text-2xl font-bold">
                  &lt; 24 hours
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We&apos;ll get back to you with initial thoughts and next steps.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
