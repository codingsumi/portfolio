import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import type { SocialLink } from "@/types/portfolio";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabels?: boolean;
}

function iconSize(size: SocialLinksProps["size"]) {
  if (size === "lg") return "h-5 w-5";
  if (size === "sm") return "h-3.5 w-3.5";
  return "h-4 w-4";
}

function buttonSize(size: SocialLinksProps["size"]) {
  if (size === "lg") return "h-12 w-12";
  if (size === "sm") return "h-9 w-9";
  return "h-10 w-10";
}

/** Brand icons as inline SVGs — Lucide no longer ships trademarked logos. */
function BrandIcon({
  platform,
  className,
}: {
  platform: SocialLink["platform"];
  className?: string;
}) {
  if (platform === "github") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function SocialLinks({
  size = "md",
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {portfolio.social.map((link) => (
        <li key={link.href}>
          <SocialIconLink link={link} size={size} showLabel={showLabels} />
        </li>
      ))}
    </ul>
  );
}

function SocialIconLink({
  link,
  size = "md",
  showLabel = false,
}: {
  link: SocialLink;
  size?: SocialLinksProps["size"];
  showLabel?: boolean;
}) {
  const icon: ReactNode = (
    <BrandIcon platform={link.platform} className={iconSize(size)} />
  );

  if (showLabel) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group fill-hover inline-flex items-center gap-2.5 rounded-2xl border border-border px-4 py-3 transition-colors hover:border-accent/40"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border text-accent transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
          <BrandIcon platform={link.platform} className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-sm font-medium text-foreground">
            {link.label}
          </span>
          <span className="block text-xs text-muted">
            {link.platform === "github" ? "codingsumi" : "sumit-jaiswal-dev"}
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`group relative inline-flex ${buttonSize(size)} items-center justify-center overflow-hidden rounded-full border border-border text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_var(--glow)]`}
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-br from-accent/15 to-accent-soft/15 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      <span className="relative">{icon}</span>
    </a>
  );
}
