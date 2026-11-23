import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

const highlights = [
  { label: "Years building", value: "6+" },
  { label: "Focus", value: "Laravel · AI" },
  { label: "Open to", value: "Relocate" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Shipping systems that scale — and teams that do too."
          description="From Laravel backends to AI-powered features, I own products end-to-end."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {portfolio.summary}
          </p>

          <ul className="flex flex-col gap-4">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="fill-hover rounded-2xl border border-border px-5 py-4"
              >
                <p className="font-mono text-xs tracking-wider text-accent uppercase">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">
                  {item.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
