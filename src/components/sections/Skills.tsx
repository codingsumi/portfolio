"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { TechLogo } from "@/components/tech/TechLogo";
import { TechMarquee } from "@/components/tech/TechMarquee";
import { TechOrbit } from "@/components/tech/TechOrbit";
import { ParticleField } from "@/components/tech/ParticleField";
import { portfolio } from "@/data/portfolio";
import { techStack, techCategories, type TechCategory } from "@/data/techStack";
import { useMotionReady } from "@/hooks/useMotionReady";

export function Skills() {
  const [filter, setFilter] = useState<TechCategory | "All">("All");
  const ready = useMotionReady();

  const filtered =
    filter === "All"
      ? techStack
      : techStack.filter((t) => t.category === filter);

  return (
    <AnimatedSection id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <ParticleField className="opacity-60" count={28} interactive />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills & Tech"
          title="A toolkit tuned for production."
          description="MERN, React, Next.js, Node.js, Python, Laravel/PHP, cloud, and AI — a production toolkit that ships."
        />

        {/* Infinite marquee strip */}
        <div className="mb-14 -mx-5 sm:-mx-8">
          <TechMarquee />
        </div>

        {/* Orbit + category grid */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <TechOrbit />

          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {(["All", ...techCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wide transition-all ${
                    filter === cat
                      ? "border-accent/50 bg-accent/15 text-accent shadow-[0_0_20px_var(--glow)]"
                      : "border-border text-muted hover:border-accent/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <ul className="grid grid-cols-3 gap-x-3 gap-y-10 sm:grid-cols-4 md:grid-cols-5">
              {filtered.map((tech, index) => (
                <li key={tech.name}>
                  <TechLogo tech={tech} index={index} float size="md" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={ready ? { opacity: 0, y: 20 } : false}
          whileInView={ready ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Proficiency
          </p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {portfolio.skills.map((category, catIndex) => (
              <article
                key={category.title}
                className="futuristic-card glass scan-line rounded-2xl p-6"
              >
                <h3 className="mb-5 font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={catIndex * 0.05 + skillIndex * 0.08}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
