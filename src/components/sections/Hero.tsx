"use client";

import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { HeroEffects } from "@/components/tech/HeroEffects";
import { usePointerMotion } from "@/hooks/usePointerMotion";

export function Hero() {
  const { x, y, active, ready, onPointerMove, onPointerLeave } =
    usePointerMotion({ stiffness: 70, damping: 20, mass: 0.5 });

  const contentX = useTransform(x, [-0.5, 0.5], [-14, 14]);
  const contentY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32"
      aria-labelledby="hero-name"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <HeroEffects
        pointerX={x}
        pointerY={y}
        pointerActive={active}
        ready={ready}
      />

      <motion.div
        className="relative mx-auto w-full max-w-6xl px-5 sm:px-8"
        style={ready ? { x: contentX, y: contentY } : undefined}
      >
        <p className="hero-reveal mb-5 font-mono text-xs tracking-[0.24em] text-accent uppercase [animation-delay:60ms]">
          Available for opportunities · Relocate anywhere
        </p>

        {/* Brand-first: name is the hero signal */}
        <h1
          id="hero-name"
          className="hero-reveal font-display text-[clamp(2.75rem,9vw,5.75rem)] leading-[0.95] font-semibold tracking-tight text-foreground [animation-delay:120ms]"
        >
          <span className="text-gradient">{portfolio.name}</span>
        </h1>

        <p className="hero-reveal mt-5 max-w-2xl text-lg text-muted sm:text-xl [animation-delay:220ms]">
          {portfolio.title}
        </p>

        <p className="hero-reveal mt-4 max-w-xl text-base leading-relaxed text-muted/90 [animation-delay:300ms]">
          {portfolio.shortIntro}
        </p>

        <div className="hero-reveal mt-8 flex flex-wrap items-center gap-3 [animation-delay:380ms]">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-soft transition-transform duration-500 group-hover:translate-x-0"
              aria-hidden
            />
            <svg
              className="relative h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            </svg>
            <span className="relative">Get in touch</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            View projects
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Resume
          </Link>
        </div>

        <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4 [animation-delay:440ms]">
          <SocialLinks size="md" />
          <p className="flex items-center gap-2 text-sm text-muted">
            <svg
              className="h-4 w-4 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {portfolio.contact.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
