"use client";

import { techStack } from "@/data/techStack";
import { techIconMap } from "@/components/tech/iconMap";

/** Infinite horizontal marquee of tech logos — CSS-driven for performance. */
export function TechMarquee() {
  const row = [...techStack, ...techStack];

  return (
    <div
      className="tech-marquee relative overflow-hidden py-2"
      aria-label="Technology stack scrolling showcase"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div className="tech-marquee-track flex w-max gap-4">
        {row.map((tech, index) => {
          const Icon = techIconMap[tech.icon];
          if (!Icon) return null;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="tech-logo group flex h-14 w-[9.5rem] shrink-0 items-center gap-3 rounded-2xl border border-border bg-background-elevated/40 px-4 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_24px_var(--glow)]"
              style={{ "--tech-glow": tech.glow ?? "var(--accent)" } as React.CSSProperties}
            >
              <span className="tech-logo-glow opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              <Icon
                size={22}
                className="relative z-[1] shrink-0 text-foreground transition-colors group-hover:text-accent"
                aria-hidden
              />
              <span className="relative z-[1] truncate text-sm font-medium text-muted transition-colors group-hover:text-foreground">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
