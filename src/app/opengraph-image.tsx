import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cabinet d'Avocats 222 — Droit Pénal Toulouse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #3f0808 100%)",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#991b1b",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            background: "rgba(153, 27, 27, 0.15)",
            border: "1px solid rgba(153, 27, 27, 0.4)",
            borderRadius: "99px",
            padding: "6px 18px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#f87171",
            }}
          />
          <span
            style={{
              color: "#fca5a5",
              fontSize: "14px",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Cabinet spécialisé en droit pénal · Toulouse
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Cabinet d&apos;Avocats{" "}
          <span style={{ color: "#f87171" }}>222</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            marginBottom: "48px",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Défense pénale · Urgences 24h/24 · Toulouse
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {[
            { val: "3", lbl: "Avocates" },
            { val: "13", lbl: "Domaines pénaux" },
            { val: "24/7", lbl: "Urgences" },
          ].map((s) => (
            <div
              key={s.lbl}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRight: "1px solid rgba(255,255,255,0.1)",
                paddingRight: "32px",
              }}
            >
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: "#fff", lineHeight: 1 }}
              >
                {s.val}
              </span>
              <span style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
                {s.lbl}
              </span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div style={{ fontSize: "16px", color: "#64748b" }}>
              cabinet222-avocat.com
            </div>
            <div style={{ fontSize: "14px", color: "#475569", marginTop: "4px" }}>
              7 Rue des Prêtres, Toulouse
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
