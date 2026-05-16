import { ImageResponse } from "next/og";

  export const alt = "LLM Pricing Comparison | Compare AI Subscription Plans";
  export const size = { width: 1200, height: 630 };
  export const contentType = "image/png";

  export default async function Image() {
    return new ImageResponse(
      (
        <div
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #6b21a8 50%, #be185d 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "80px",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              display: "flex",
            }}
          >
            LLM Pricing
          </div>
          <div
            style={{
              fontSize: 48,
              opacity: 0.95,
              marginTop: 24,
              textAlign: "center",
              display: "flex",
            }}
          >
            Compare AI Subscription Plans
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.75,
              marginTop: 60,
              textAlign: "center",
              display: "flex",
            }}
          >
            ChatGPT · Claude · Gemini · Perplexity · Cursor · +8 more
          </div>
          <div
            style={{
              fontSize: 24,
              opacity: 0.6,
              marginTop: 80,
              display: "flex",
            }}
          >
            llmpricing.io
          </div>
        </div>
      ),
      { ...size }
    );
  }