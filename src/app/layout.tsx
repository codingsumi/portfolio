import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitjaiswal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: portfolio.resume.shareTitle,
    template: `%s · ${portfolio.name}`,
  },
  description: portfolio.resume.shareDescription,
  keywords: [
    "Sumit Jaiswal",
    "Senior Full Stack Developer",
    "Laravel",
    "PHP",
    "Next.js",
    "MERN",
    "Python",
    "AI",
    "AWS",
    "Docker",
    "Lucknow",
  ],
  authors: [{ name: portfolio.name, url: siteUrl }],
  creator: portfolio.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: portfolio.name,
    title: portfolio.resume.shareTitle,
    description: portfolio.resume.shareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.resume.shareTitle,
    description: portfolio.resume.shareDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh font-sans antialiased">
        <ThemeProvider>
          <div className="site-atmosphere" aria-hidden />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
