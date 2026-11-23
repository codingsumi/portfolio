"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticTilt } from "@/components/ui/MagneticTilt";
import { portfolio } from "@/data/portfolio";
import { useMotionReady } from "@/hooks/useMotionReady";

export function Projects() {
  const ready = useMotionReady();

  return (
    <AnimatedSection id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Enterprise full-stack platforms spanning promotions, on-demand services, AI fitness commerce, mobility, and knowledge systems — built for real production load."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => {
            const CardInner = (
              <>
                <div
                  className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-br from-accent/10 via-accent-soft/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />

                <div className="relative z-[2] flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      {project.featured ? (
                        <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                          Featured
                        </p>
                      ) : null}
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent"
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );

            return (
              <motion.div
                key={project.title}
                initial={ready ? { opacity: 0, y: 24 } : false}
                whileInView={ready ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <MagneticTilt
                  className="h-full rounded-2xl"
                  maxTilt={7}
                  spotlight
                >
                  <article className="futuristic-card scan-line group relative h-full overflow-hidden rounded-2xl border border-border bg-background-elevated/40">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                        aria-label={`Open ${project.title} website`}
                      >
                        {CardInner}
                      </a>
                    ) : (
                      CardInner
                    )}
                  </article>
                </MagneticTilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
