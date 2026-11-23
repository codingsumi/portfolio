"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Avoids SSR/client hydration mismatches from Framer Motion + useReducedMotion.
 * Animations only enable after mount when the user allows motion.
 */
export function useMotionReady(): boolean {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && !reduceMotion;
}
