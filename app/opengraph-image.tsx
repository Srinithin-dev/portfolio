import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getYearsOfExperience } from "./lib/profile";

export const alt = "Srinithin Thangadurai — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

const C = {
  page: "#fbfbfd",
  surface: "#ffffff",
  surface2: "#f5f6fa",
  line: "#e6e8ee",
  lineStrong: "#d7dae4",
  ink: "#16181d",
  ink2: "#545a6b",
  ink3: "#878da0",
  accent: "#af47ff",
  accentText: "#7c3aed",
  accentWash: "#f4ecff",
};

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

const asset = (p: string) => readFile(join(process.cwd(), "assets", p));

export default async function OpengraphImage() {
  const years = getYearsOfExperience();

  const [regular, semibold, bold, mono, photo] = await Promise.all([
    asset("fonts/Geist-Regular.ttf"),
    asset("fonts/Geist-SemiBold.ttf"),
    asset("fonts/Geist-Bold.ttf"),
    asset("fonts/GeistMono-Medium.ttf"),
    asset("og-photo.png"),
  ]);
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 64,
        fontFamily: "Geist",
        color: C.ink,
        backgroundColor: C.page,
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(175,71,255,0.09), rgba(175,71,255,0) 55%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingRight: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 28,
              color: C.accentText,
            }}
          >
            {"<ST />"}
          </div>
          <div
            style={{
              display: "flex",
              width: 1,
              height: 24,
              backgroundColor: C.lineStrong,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: C.ink3,
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              backgroundColor: C.accentWash,
              color: C.accentText,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: C.accent,
              }}
            />
            {`${years} years · Coimbatore, India`}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            <div style={{ display: "flex" }}>Srinithin</div>
            <div style={{ display: "flex" }}>Thangadurai</div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 32,
              color: C.ink2,
            }}
          >
            Full Stack Developer
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 26 }}>
            {STACK.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "6px 13px",
                  borderRadius: 10,
                  border: `1.5px solid ${C.lineStrong}`,
                  backgroundColor: C.surface,
                  fontSize: 19,
                  fontWeight: 600,
                  color: C.ink2,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: C.ink3,
          }}
        >
          <div style={{ display: "flex", color: C.accent }}>→</div>
          srinithin-portfolio.vercel.app
        </div>
      </div>

      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "flex-end",
          justifyContent: "center",
          width: 420,
          height: "100%",
          borderRadius: 40,
          border: `2px solid ${C.line}`,
          overflow: "hidden",
          backgroundImage: `linear-gradient(180deg, ${C.accentWash} 0%, ${C.surface2} 100%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 36,
            right: 36,
            top: 64,
            bottom: 0,
            borderRadius: "200px 200px 0 0",
            backgroundColor: "rgba(255,255,255,0.65)",
          }}
        />
        <img src={photoSrc} width={416} height={400} alt="" />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
