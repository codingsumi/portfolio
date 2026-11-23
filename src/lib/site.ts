import { portfolio } from "@/data/portfolio";

/** Canonical site origin — set NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitjaiswal.dev";
}

/** Absolute shareable URL for the resume viewer page. */
export function getResumeShareUrl(): string {
  return `${getSiteUrl()}${portfolio.resume.sharePath}`;
}

/** Absolute URL for the raw PDF asset. */
export function getResumePdfUrl(): string {
  return `${getSiteUrl()}${portfolio.resume.pdfPath}`;
}
