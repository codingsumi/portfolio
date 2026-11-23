"use client";

import { type ReactNode } from "react";
import { motion, useTransform } from "framer-motion";
import { usePointerMotion } from "@/hooks/usePointerMotion";

interface MagneticTiltProps {
  children: ReactNode;
  className?: string;
  /** Max rotateX/Y in degrees */
  maxTilt?: number;
  /** Spotlight glow that follows the pointer */
  spotlight?: boolean;
  /** Perspective in px */
  perspective?: number;
}

/**
 * 3D tilt + optional spotlight that follows the mouse.
 * Used as an interaction shell around existing action cards.
 */
export function MagneticTilt({
  children,
  className = "",
  maxTilt = 8,
  spotlight = true,
  perspective = 900,
}: MagneticTiltProps) {
  const { x, y, active, ready, onPointerMove, onPointerLeave } =
    usePointerMotion({ stiffness: 140, damping: 18, mass: 0.35 });

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(active, [0, 1], [0, 0.5]);
  const spotlightBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(420px circle at ${gx} ${gy}, color-mix(in oklab, var(--accent) 32%, transparent), transparent 55%)`,
  );

  return (
    <motion.div
      className={`relative ${className}`}
      style={
        ready
          ? {
              perspective,
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }
          : undefined
      }
      onPointerMove={ready ? onPointerMove : undefined}
      onPointerLeave={ready ? onPointerLeave : undefined}
    >
      {children}
      {spotlight ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] mix-blend-soft-light"
          style={{
            opacity: ready ? glareOpacity : 0,
            background: spotlightBg,
          }}
          aria-hidden
        />
      ) : null}
    </motion.div>
  );
}
