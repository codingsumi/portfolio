"use client";

import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import QRCode from "react-qr-code";
import {
  Check,
  Copy,
  Download,
  FileText,
  Link2,
  Share2,
  X,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { getResumeShareUrl } from "@/lib/site";
import { useMotionReady } from "@/hooks/useMotionReady";

interface ResumeShareProps {
  /** Inline card for a page section */
  variant?: "card" | "floating";
  className?: string;
}

/** Reusable resume download / share / QR experience. */
export function ResumeShare({
  variant = "card",
  className = "",
}: ResumeShareProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const titleId = useId();
  const ready = useMotionReady();

  // Resolve absolute URL on the client so QR always matches the live origin
  useEffect(() => {
    setShareUrl(getResumeShareUrl());
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  const copyLink = useCallback(async () => {
    // Safe to resolve at click-time — never during render (avoids hydration mismatch)
    const url = shareUrl || getResumeShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }, [shareUrl]);

  const nativeShare = useCallback(async () => {
    const url = shareUrl || getResumeShareUrl();
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: portfolio.resume.shareTitle,
          text: portfolio.resume.shareDescription,
          url,
        });
        return;
      } catch {
        // User cancelled or share failed — fall through to copy
      }
    }
    await copyLink();
  }, [shareUrl, copyLink]);

  // Only the post-mount value — never call getResumeShareUrl() during render
  // (it reads window.location on the client and the env fallback on the server).
  return (
    <>
      {variant === "floating" ? (
        <FloatingTrigger
          className={className}
          onOpen={() => setModalOpen(true)}
        />
      ) : (
        <ResumeCard
          className={className}
          qrValue={shareUrl}
          shareUrl={shareUrl}
          onShare={() => setModalOpen(true)}
          onCopy={copyLink}
          copied={copied}
        />
      )}

      <AnimatePresence>
        {modalOpen ? (
          <ResumeModal
            titleId={titleId}
            qrValue={shareUrl}
            shareUrl={shareUrl}
            copied={copied}
            ready={ready}
            onClose={() => setModalOpen(false)}
            onCopy={copyLink}
            onNativeShare={nativeShare}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function FloatingTrigger({
  onOpen,
  className,
}: {
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 overflow-hidden rounded-full border border-border bg-background-elevated/90 px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] backdrop-blur-md transition-transform hover:scale-[1.03] sm:right-8 sm:bottom-8 ${className}`}
      aria-label="Share resume with QR code and link"
    >
      <span
        className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-accent/20 to-accent-soft/20 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      <Share2 className="relative h-4 w-4 text-accent" aria-hidden />
      <span className="relative hidden sm:inline">Share resume</span>
    </button>
  );
}

function ResumeCard({
  qrValue,
  shareUrl,
  onShare,
  onCopy,
  copied,
  className,
}: {
  qrValue: string;
  shareUrl: string;
  onShare: () => void;
  onCopy: () => void;
  copied: boolean;
  className?: string;
}) {
  const { resume } = portfolio;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-border ${className}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-soft/10"
        aria-hidden
      />
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_auto] lg:items-center lg:gap-10 lg:p-10">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
            Resume
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Download or share my CV
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Share both the QR code and the link — scan on mobile or copy the URL
            for email, WhatsApp, and LinkedIn.
          </p>

          {/* Always-visible shareable link next to actions */}
          <div className="mt-5 flex max-w-xl items-center gap-2 rounded-2xl border border-border bg-background/40 p-2 pl-3">
            <Link2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <p className="min-w-0 flex-1 truncate font-mono text-xs text-muted sm:text-sm">
              {shareUrl || "…"}
            </p>
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              aria-label="Copy resume link"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
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
            <button
              type="button"
              onClick={onShare}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Share2 className="h-4 w-4" aria-hidden />
              Share QR + link
            </button>
          </div>
        </div>

        {/* QR + link preview — both always visible */}
        <button
          type="button"
          onClick={onShare}
          className="mx-auto flex w-full max-w-[240px] flex-col items-center gap-3 rounded-2xl border border-border bg-background/50 p-5 text-center transition-colors hover:border-accent/40 lg:mx-0"
          aria-label="Open share panel with QR code and link"
        >
          <span className="rounded-xl bg-white p-3 shadow-[var(--shadow-soft)]">
            <ClientQr value={qrValue} size={148} />
          </span>
          <span className="w-full truncate font-mono text-[10px] text-muted">
            {shareUrl || "/resume"}
          </span>
          <span className="text-xs font-medium text-accent">
            Tap to share QR + link
          </span>
        </button>
      </div>
    </div>
  );
}

function ResumeModal({
  titleId,
  qrValue,
  shareUrl,
  copied,
  ready,
  onClose,
  onCopy,
  onNativeShare,
}: {
  titleId: string;
  qrValue: string;
  shareUrl: string;
  copied: boolean;
  ready: boolean;
  onClose: () => void;
  onCopy: () => void;
  onNativeShare: () => void;
}) {
  const { resume, name } = portfolio;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      initial={ready ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      exit={ready ? { opacity: 0 } : undefined}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close resume share dialog"
        onClick={onClose}
      />

      <motion.div
        className="glass relative z-10 w-full max-w-lg overflow-hidden rounded-3xl"
        initial={ready ? { opacity: 0, y: 24, scale: 0.98 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={ready ? { opacity: 0, y: 16, scale: 0.98 } : undefined}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
              Share resume
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-xl font-semibold text-foreground"
            >
              QR code + link
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 px-5 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:px-6">
          {/* QR */}
          <div className="mx-auto rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
            <QRCode
              value={qrValue}
              size={200}
              level="H"
              bgColor="#ffffff"
              fgColor="#030712"
              title={`QR code linking to ${name}'s resume`}
            />
          </div>

          {/* Link + actions */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted">
              Scan the QR code on any phone, or copy / share the link below.
              Both open the same resume page.
            </p>

            <div className="rounded-2xl border border-border bg-background/50 p-3">
              <p className="mb-2 font-mono text-[10px] tracking-wider text-accent uppercase">
                Shareable link
              </p>
              <p className="break-all font-mono text-xs text-foreground sm:text-sm">
                {shareUrl}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:flex-none"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" aria-hidden />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden />
                )}
                {copied ? "Link copied" : "Copy link"}
              </button>
              <button
                type="button"
                onClick={onNativeShare}
                className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background sm:flex-none"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent to-accent-soft transition-transform duration-500 group-hover:translate-x-0"
                  aria-hidden
                />
                <Share2 className="relative h-4 w-4" aria-hidden />
                <span className="relative">Share link</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-2 border-t border-border p-4 sm:grid-cols-2 sm:p-5">
          <ActionButton
            href={resume.pdfPath}
            download={resume.fileName}
            icon={<Download className="h-4 w-4" />}
            label="Download PDF"
          />
          <ActionButton
            href={resume.sharePath}
            icon={<FileText className="h-4 w-4" />}
            label="Open resume page"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActionButton({
  href,
  download,
  icon,
  label,
}: {
  href: string;
  download?: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      download={download}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
    >
      {icon}
      {label}
    </a>
  );
}

/** Tiny QR for the card preview — avoids SSR size flicker. */
function ClientQr({ value, size }: { value: string; size: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Wait for mount + a resolved URL so we never encode an empty string
  if (!mounted || !value) {
    return (
      <span
        className="block animate-pulse rounded bg-slate-100"
        style={{ width: size, height: size }}
        aria-hidden
      />
    );
  }

  return (
    <QRCode
      value={value}
      size={size}
      level="M"
      bgColor="#ffffff"
      fgColor="#030712"
    />
  );
}
