"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { SkillItem } from "@/types/portfolio";
import { useMotionReady } from "@/hooks/useMotionReady";

interface SkillBarProps {
  skill: SkillItem;
  delay?: number;
}

/** Animated proficiency fill — triggers once when scrolled into view. */
export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const ready = useMotionReady();

  const targetWidth = `${skill.level}%`;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        {ready ? (
          <motion.div
            className="skill-fill"
            initial={{ width: 0 }}
            animate={inView ? { width: targetWidth } : { width: 0 }}
            transition={{
              duration: 1.05,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ) : (
          <div className="skill-fill" style={{ width: 0 }} />
        )}
      </div>
    </div>
  );
}
