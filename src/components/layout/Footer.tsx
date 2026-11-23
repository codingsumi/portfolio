import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm font-medium text-foreground">
              {portfolio.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              © {year} · Built with Next.js · Open to relocate{" "}
              {portfolio.contact.relocate.toLowerCase()}
            </p>
          </div>
          <SocialLinks size="md" />
        </div>
        <div className="flex flex-wrap gap-4 border-t border-border pt-5 text-sm text-muted">
          <Link href="/resume" className="transition-colors hover:text-accent">
            Resume
          </Link>
          <a
            href={portfolio.resume.pdfPath}
            download={portfolio.resume.fileName}
            className="transition-colors hover:text-accent"
          >
            Download PDF
          </a>
          {portfolio.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
