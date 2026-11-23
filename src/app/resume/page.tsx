import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ResumeShare } from "@/components/resume/ResumeShare";
import { SocialLinks } from "@/components/ui/SocialLinks";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitjaiswal.dev";

export const metadata: Metadata = {
  title: {
    absolute: portfolio.resume.shareTitle,
  },
  description: portfolio.resume.shareDescription,
  openGraph: {
    title: portfolio.resume.shareTitle,
    description: portfolio.resume.shareDescription,
    url: `${siteUrl}/resume`,
    type: "website",
    siteName: portfolio.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.resume.shareTitle,
    description: portfolio.resume.shareDescription,
  },
  alternates: {
    canonical: `${siteUrl}/resume`,
  },
};

export default function ResumePage() {
  const { name, title, resume, contact } = portfolio;

  return (
    <div className="mx-auto max-w-6xl px-5 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-28">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to portfolio
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
          Resume
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          <span className="text-gradient">{name}</span>
        </h1>
        <p className="mt-4 text-lg text-muted">{title}</p>
        <p className="mt-2 text-sm text-muted">
          {contact.location} · Open to relocate {contact.relocate.toLowerCase()}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={resume.pdfPath}
            download={resume.fileName}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
          >
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-soft transition-transform duration-500 group-hover:translate-x-0"
              aria-hidden
            />
            <Download className="relative h-4 w-4" aria-hidden />
            <span className="relative">Download PDF</span>
          </a>
          <a
            href={resume.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Open PDF
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <SocialLinks size="md" />
        </div>
      </header>

      {/* Embedded PDF viewer */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background-elevated/40">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <p className="truncate font-mono text-xs text-muted">
            {resume.fileName}
          </p>
          <a
            href={resume.pdfPath}
            download={resume.fileName}
            className="shrink-0 text-xs text-accent underline-offset-4 hover:underline"
          >
            Download
          </a>
        </div>
        <iframe
          title={`${name} resume PDF`}
          src={`${resume.pdfPath}#view=FitH`}
          className="h-[70vh] w-full bg-white"
        />
      </div>

      <div className="mt-10">
        <ResumeShare variant="card" />
      </div>
    </div>
  );
}
