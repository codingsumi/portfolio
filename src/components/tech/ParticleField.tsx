"use client";

import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  className?: string;
  /** Particle count — keep modest for performance */
  count?: number;
  /** Attract particles toward the pointer */
  interactive?: boolean;
}

/**
 * Lightweight canvas particles — soft drifting dots + faint links.
 * Optional mouse magnetism when `interactive` is set.
 * Disabled when prefers-reduced-motion is set.
 */
export function ParticleField({
  className = "",
  count = 36,
  interactive = false,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: 0.5, y: 0.5, active: false };

    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      r: 1 + Math.random() * 1.6,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const isDark = () => document.documentElement.classList.contains("dark");

    const onPointerMove = (event: PointerEvent) => {
      if (!interactive || event.pointerType === "touch") return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse.x = (event.clientX - rect.left) / rect.width;
      mouse.y = (event.clientY - rect.top) / rect.height;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const dot = dark ? "rgba(34, 211, 238, 0.55)" : "rgba(8, 145, 178, 0.35)";
      const line = dark ? "rgba(34, 211, 238, 0.12)" : "rgba(8, 145, 178, 0.1)";

      for (const p of particles) {
        if (interactive && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx * width, dy * height);
          if (dist < 160 && dist > 0.001) {
            const force = (1 - dist / 160) * 0.00045;
            p.vx += dx * force;
            p.vy += dy * force;
          }
        }

        p.vx *= 0.992;
        p.vy *= 0.992;
        // Keep a little ambient drift so the field never freezes
        p.vx += (Math.random() - 0.5) * 0.00002;
        p.vy += (Math.random() - 0.5) * 0.00002;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        p.x = Math.min(1, Math.max(0, p.x));
        p.y = Math.min(1, Math.max(0, p.y));
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = line;
            ctx.globalAlpha = 1 - dist / 110;
            ctx.beginPath();
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = dot;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft cursor bloom
      if (interactive && mouse.active) {
        const gx = mouse.x * width;
        const gy = mouse.y * height;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 120);
        grad.addColorStop(
          0,
          dark ? "rgba(34, 211, 238, 0.12)" : "rgba(8, 145, 178, 0.1)",
        );
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(gx, gy, 120, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    const parent = canvas.parentElement;
    if (interactive && parent) {
      parent.addEventListener("pointermove", onPointerMove);
      parent.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (interactive && parent) {
        parent.removeEventListener("pointermove", onPointerMove);
        parent.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, [count, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    />
  );
}
