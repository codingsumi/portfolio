"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { TechItem } from "@/data/techStack";
import { techIconMap } from "@/components/tech/iconMap";
import { useMotionReady } from "@/hooks/useMotionReady";

interface TechLogoProps {
  tech: TechItem;
  index?: number;
  size?: "sm" | "md" | "lg";
  /** Enable floating CSS animation */
  float?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { box: "h-14 w-14", icon: 22 },
  md: { box: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]", icon: 28 },
  lg: { box: "h-20 w-20", icon: 34 },
};

/** Single tech mark — glow hover, tooltip, optional float + stagger. */
export function TechLogo({
  tech,
  index = 0,
  size = "md",
  float = false,
  className = "",
}: TechLogoProps) {
  const ready = useMotionReady();
  const Icon = techIconMap[tech.icon];
  const dims = sizeMap[size];

  if (!Icon) return null;

  return (
    <motion.div
      className={`group relative ${className}`}
      initial={ready ? { opacity: 0, y: 18, scale: 0.92 } : false}
      whileInView={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`tech-logo ${float ? "tech-float" : ""} ${dims.box} relative mx-auto flex items-center justify-center rounded-2xl border border-border bg-background-elevated/50 text-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/45 group-hover:text-accent`}
        style={
          {
            "--tech-glow": tech.glow ?? "var(--accent)",
            animationDelay: float ? `${(index % 7) * 0.35}s` : undefined,
          } as CSSProperties
        }
        title={tech.name}
      >
        <span className="tech-logo-glow" aria-hidden />
        <Icon size={dims.icon} aria-hidden className="relative z-[1]" />
        <span className="sr-only">{tech.name}</span>
      </div>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border bg-background-elevated px-2.5 py-1 font-mono text-[10px] tracking-wide whitespace-nowrap text-muted opacity-0 shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      >
        {tech.name}
      </span>
    </motion.div>
  );
}
