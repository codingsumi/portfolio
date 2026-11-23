"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionReady } from "@/hooks/useMotionReady";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "section" | "div" | "article";
}

/** Scroll-triggered fade/slide — waits for mount to avoid hydration mismatches. */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
  as = "section",
}: AnimatedSectionProps) {
  const ready = useMotionReady();
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      className={className}
      initial={ready ? { opacity: 0, y: 36, filter: "blur(6px)" } : false}
      whileInView={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
