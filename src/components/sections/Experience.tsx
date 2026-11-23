"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { useMotionReady } from "@/hooks/useMotionReady";

export function Experience() {
  const ready = useMotionReady();

  return (
    <AnimatedSection id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="Leading teams and owning delivery across AI products and full-stack platforms."
        />

        <ol className="relative space-y-0 border-l border-border pl-8 sm:pl-10">
          {portfolio.experience.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              className="relative pb-12 last:pb-0"
              initial={ready ? { opacity: 0, x: -16 } : false}
              whileInView={ready ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Timeline node */}
              <span
                className={`absolute top-1.5 -left-[2.15rem] h-3.5 w-3.5 rounded-full border-2 sm:-left-[2.65rem] ${
                  job.current
                    ? "border-accent bg-accent shadow-[0_0_18px_var(--glow)]"
                    : "border-border bg-background-elevated"
                }`}
                aria-hidden
              />

              <div className="fill-hover rounded-2xl border border-border p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {job.role}
                  </h3>
                  {job.current ? (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase">
                      Present
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-accent">{job.company}</p>
                <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>

                {job.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
