"use client";

import {
  motion,
  motionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ParticleField } from "@/components/tech/ParticleField";

const idle = motionValue(0);

interface HeroEffectsProps {
  /** Normalized pointer X [-0.5, 0.5] from the hero stage */
  pointerX?: MotionValue<number>;
  /** Normalized pointer Y [-0.5, 0.5] from the hero stage */
  pointerY?: MotionValue<number>;
  /** 0–1 whether the pointer is over the hero */
  pointerActive?: MotionValue<number>;
  ready?: boolean;
}

/** Client-only hero atmosphere: particles + scanning accent + mouse parallax. */
export function HeroEffects({
  pointerX = idle,
  pointerY = idle,
  pointerActive = idle,
  ready = false,
}: HeroEffectsProps) {
  const orbA_x = useTransform(pointerX, [-0.5, 0.5], [-36, 36]);
  const orbA_y = useTransform(pointerY, [-0.5, 0.5], [-28, 28]);
  const orbB_x = useTransform(pointerX, [-0.5, 0.5], [28, -28]);
  const orbB_y = useTransform(pointerY, [-0.5, 0.5], [22, -22]);
  const spotX = useTransform(pointerX, [-0.5, 0.5], ["0%", "100%"]);
  const spotY = useTransform(pointerY, [-0.5, 0.5], ["0%", "100%"]);
  const spotOpacity = useTransform(pointerActive, [0, 1], [0, 0.7]);
  const spotBg = useTransform(
    [spotX, spotY],
    ([sx, sy]) =>
      `radial-gradient(520px circle at ${sx} ${sy}, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)`,
  );

  return (
    <>
      <ParticleField className="opacity-70" count={42} interactive />
      <div
        className="hero-scan pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -top-24 right-[8%] h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        style={ready ? { x: orbA_x, y: orbA_y } : undefined}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 left-[5%] h-48 w-48 rounded-full bg-accent-soft/10 blur-3xl"
        style={ready ? { x: orbB_x, y: orbB_y } : undefined}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: ready ? spotOpacity : 0,
          background: spotBg,
        }}
        aria-hidden
      />
    </>
  );
}
