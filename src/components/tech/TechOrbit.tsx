"use client";

import type { CSSProperties } from "react";
import { motion, useTransform } from "framer-motion";
import { techStack } from "@/data/techStack";
import { techIconMap } from "@/components/tech/iconMap";
import { usePointerMotion } from "@/hooks/usePointerMotion";

/** Lightweight CSS orbit of featured technologies — tilts with the mouse. */
export function TechOrbit() {
  const featured = techStack.filter((t) => t.featured).slice(0, 8);
  const { x, y, ready, onPointerMove, onPointerLeave } = usePointerMotion({
    stiffness: 100,
    damping: 16,
    mass: 0.4,
  });

  const rotateX = useTransform(y, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-16, 16]);

  return (
    <motion.div
      className="tech-orbit relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[380px]"
      aria-label="Featured technologies orbit"
      style={
        ready
          ? {
              perspective: 1000,
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }
          : undefined
      }
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="absolute top-1/2 left-1/2 z-[1] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-background-elevated/80 text-center shadow-[0_0_40px_var(--glow)] backdrop-blur-md sm:h-24 sm:w-24">
        <span className="font-display text-sm font-semibold text-gradient sm:text-base">
          Stack
        </span>
        <span className="font-mono text-[9px] tracking-wider text-muted uppercase">
          Core
        </span>
      </div>

      <div
        className="tech-orbit-ring absolute inset-[12%] rounded-full border border-border/60"
        aria-hidden
      />
      <div
        className="tech-orbit-ring absolute inset-[2%] rounded-full border border-dashed border-accent/20"
        aria-hidden
      />

      <ul className="tech-orbit-spin absolute inset-0 m-0 list-none p-0">
        {featured.map((tech, index) => {
          const Icon = techIconMap[tech.icon];
          if (!Icon) return null;
          const angle = (360 / featured.length) * index;
          return (
            <li
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(var(--orbit-radius) * -1))`,
              }}
            >
              <div className="tech-orbit-counter">
                <div
                  className="tech-logo group flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-background-elevated/90 text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-110 hover:border-accent/50 hover:text-accent sm:h-14 sm:w-14"
                  style={
                    {
                      "--tech-glow": tech.glow ?? "var(--accent)",
                    } as CSSProperties
                  }
                  title={tech.name}
                >
                  <span className="tech-logo-glow" aria-hidden />
                  <Icon size={22} className="relative z-[1]" aria-hidden />
                  <span className="sr-only">{tech.name}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
