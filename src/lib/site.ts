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
  // Cache-bust query so WhatsApp/Telegram fetch fresh OG tags after rebrands
  // (platforms cache previews aggressively; og:url stays canonical on the page).
  return `${getSiteUrl()}${portfolio.resume.sharePath}?v=senior-fs`;
}

/** Absolute URL for the raw PDF asset. */
export function getResumePdfUrl(): string {
  return `${getSiteUrl()}${portfolio.resume.pdfPath}`;
}
