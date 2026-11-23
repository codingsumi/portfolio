import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function Education() {
  return (
    <AnimatedSection id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Formal training that anchors a hands-on engineering career."
        />

        <ul className="grid gap-5 sm:grid-cols-2">
          {portfolio.education.map((item) => (
            <li
              key={item.degree}
              className="fill-hover flex gap-4 rounded-2xl border border-border p-6"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-2 font-mono text-xs text-accent">{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
