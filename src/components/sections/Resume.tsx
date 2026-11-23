import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResumeShare } from "@/components/resume/ResumeShare";

export function Resume() {
  return (
    <AnimatedSection id="resume" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Resume & share"
          description="Download the PDF, copy a link, or scan the QR code on mobile."
        />
        <ResumeShare variant="card" />
      </div>
    </AnimatedSection>
  );
}
