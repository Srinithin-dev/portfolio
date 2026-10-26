import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Srinithin Thangadurai — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Runs once at `next build` (this route is static). Satori can't fetch a
  // relative path like "/srinithin.png", so read a pre-sized copy of the photo
  // from disk and inline it as a base64 data URL.
  const photo = await readFile(join(process.cwd(), "assets/og-photo.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#16181d",
          color: "#ffffff",
          borderTop: "12px solid #af47ff",
        }}
      >
        {/* Left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "64px 0 64px 80px",
          }}
        >
          <div style={{ display: "flex", fontSize: 36, color: "#af47ff" }}>
            {"<ST />"}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: -2,
                lineHeight: 1.05,
              }}
            >
              Srinithin Thangadurai
            </div>
            <div style={{ fontSize: 40, marginTop: 16, color: "#d4d4d8" }}>
              Full Stack Developer · 4 years
            </div>
            <div style={{ fontSize: 28, marginTop: 24, color: "#a1a1aa" }}>
              React · Next.js · Node.js · MongoDB
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 28, color: "#af47ff" }}>
            srinithin-portfolio.vercel.app
          </div>
        </div>

        {/* Right: photo on an accent circle */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: 440,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 380,
              height: 380,
              borderRadius: 9999,
              background: "#2a1640",
              bottom: 40,
              left: 30,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={430} height={414} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
