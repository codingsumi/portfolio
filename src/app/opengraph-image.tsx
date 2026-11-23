import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = portfolio.resume.shareTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Homepage share card — Senior Full Stack branding. */
export default function HomeOgImage() {
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
          Portfolio
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
            {portfolio.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#67e8f9",
              lineHeight: 1.3,
              maxWidth: 1000,
            }}
          >
            {portfolio.title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 20, color: "#94a3b8" }}>
          Frontend · Backend · Databases · Cloud · AI integrations
        </div>
      </div>
    ),
    { ...size },
  );
}
