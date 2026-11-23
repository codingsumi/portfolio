"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Frontend-only demo — wire to an API route or form service later
    setSubmitted(true);
  };

  const { contact } = portfolio;

  return (
    <AnimatedSection id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something excellent."
          description="Open to full-time roles, consulting, and interesting AI + web challenges."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <aside className="space-y-5">
            <a
              href={`mailto:${contact.email}`}
              className="fill-hover flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors hover:border-accent/40"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="mt-1 break-all text-sm text-muted">{contact.email}</p>
              </div>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="fill-hover flex items-start gap-3 rounded-2xl border border-border p-5 transition-colors hover:border-accent/40"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="mt-1 text-sm text-muted">{contact.phone}</p>
              </div>
            </a>
            <div className="fill-hover flex items-start gap-3 rounded-2xl border border-border p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="mt-1 text-sm text-muted">
                  {contact.location} · Willing to relocate {contact.relocate.toLowerCase()}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-foreground">Social</p>
              <SocialLinks showLabels className="flex-col sm:flex-row" />
            </div>
          </aside>

          <div className="glass rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div
                className="flex min-h-[280px] flex-col items-center justify-center gap-3 text-center"
                role="status"
              >
                <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden />
                <p className="font-display text-xl font-semibold text-foreground">
                  Message captured
                </p>
                <p className="max-w-sm text-sm text-muted">
                  This is a frontend demo. Connect an API or email service to deliver
                  messages in production.
                </p>
                <button
                  type="button"
                  className="mt-2 text-sm text-accent underline-offset-4 hover:underline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-foreground">Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-foreground">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                    />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-foreground">Subject</span>
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-foreground">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role, project, or idea…"
                    className="w-full resize-y rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background sm:w-auto"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-soft transition-transform duration-500 group-hover:translate-x-0"
                    aria-hidden
                  />
                  <Send className="relative h-4 w-4" />
                  <span className="relative">Send message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
