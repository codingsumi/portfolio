import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = portfolio.resume.shareTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded share card for WhatsApp / LinkedIn / Telegram. */
export default function ResumeOgImage() {
  const { name, resume } = portfolio;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #030712 0%, #0a1220 55%, #083344 100%)",
          color: "#e8eef7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#22d3ee",
            fontWeight: 600,
          }}
        >
          Resume
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              color: "#67e8f9",
              lineHeight: 1.25,
              maxWidth: 980,
            }}
          >
            Senior Full Stack Developer | MERN · React · Next.js · Node · AI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            {resume.shareDescription.slice(0, 140)}…
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#94a3b8",
          }}
        >
          <span>6+ years · End-to-end delivery · Cloud & AI</span>
          <span style={{ color: "#22d3ee" }}>sumit-jaiswal.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
