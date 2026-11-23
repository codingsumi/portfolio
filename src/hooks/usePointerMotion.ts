"use client";

import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import {
  useMotionValue,
  useSpring,
  type MotionValue,
  type SpringOptions,
} from "framer-motion";
import { useMotionReady } from "@/hooks/useMotionReady";

const DEFAULT_SPRING: SpringOptions = { stiffness: 90, damping: 22, mass: 0.4 };

export interface PointerMotion {
  /** Normalized X in [-0.5, 0.5] relative to the tracked element */
  x: MotionValue<number>;
  /** Normalized Y in [-0.5, 0.5] relative to the tracked element */
  y: MotionValue<number>;
  /** 0 → 1 spring for whether the pointer is over the element */
  active: MotionValue<number>;
  ready: boolean;
  onPointerMove: (event: PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
  /** Imperative reset (e.g. when leaving a parent stage) */
  reset: () => void;
}

/**
 * Spring-smoothed pointer position for mouse-playable motion.
 * Values stay at 0 until mount + motion is allowed (hydration-safe).
 */
export function usePointerMotion(
  spring: SpringOptions = DEFAULT_SPRING,
): PointerMotion {
  const ready = useMotionReady();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawActive = useMotionValue(0);

  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);
  const active = useSpring(rawActive, { stiffness: 120, damping: 28 });

  const frame = useRef(0);

  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawActive.set(0);
  }, [rawX, rawY, rawActive]);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!ready) return;
      // Ignore coarse pointers (touch) — tilt/parallax feels wrong there
      if (event.pointerType === "touch") return;

      const target = event.currentTarget;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const nx = (event.clientX - rect.left) / rect.width - 0.5;
        const ny = (event.clientY - rect.top) / rect.height - 0.5;
        rawX.set(nx);
        rawY.set(ny);
        rawActive.set(1);
      });
    },
    [ready, rawX, rawY, rawActive],
  );

  const onPointerLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    rawActive.set(0);
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY, rawActive]);

  useEffect(() => {
    if (!ready) reset();
    return () => cancelAnimationFrame(frame.current);
  }, [ready, reset]);

  return { x, y, active, ready, onPointerMove, onPointerLeave, reset };
}
