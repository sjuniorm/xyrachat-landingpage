import Image from "next/image";
import { Particles } from "@/components/Particles";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
  return (
    <div
      className="gradient-bg noise-overlay"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Pulsing background orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            top: "8%",
            left: "-6%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(147,51,234,0.28)",
            filter: "blur(130px)",
          }}
        />
        <div
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            bottom: "-8%",
            right: "-8%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(236,72,153,0.25)",
            filter: "blur(120px)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 720,
            height: 720,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.14)",
            filter: "blur(160px)",
            animationDelay: "0.8s",
          }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(216,130,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(216,130,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Page */}
      <main
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 24px",
        }}
      >
        <section
          style={{ width: "100%", maxWidth: 560, textAlign: "center" }}
        >
          {/* Logo */}
          <div
            className="animate-fade-in-up"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <div className="animate-float">
              <Image
                src="/images/icon.png"
                alt="Xyra Chat"
                width={84}
                height={84}
                priority
                style={{
                  width: 84,
                  height: "auto",
                  filter: "drop-shadow(0 0 40px rgba(216,130,255,0.6))",
                }}
              />
            </div>
          </div>

          {/* Eyebrow */}
          <div
            className="animate-fade-in-up-delay-1"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(249,168,212,0.95)",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(244,114,182,0.35)",
                background: "rgba(244,114,182,0.08)",
              }}
            >
              <span
                className="animate-pulse-glow"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#f472b6",
                  boxShadow: "0 0 10px rgba(244,114,182,0.8)",
                }}
              />
              Early Access · Launching 2026
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up-delay-2">
            <h1
              className="animate-shimmer"
              style={{
                fontFamily: "inherit",
                fontSize: "clamp(36px, 6vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
                background:
                  "linear-gradient(90deg, #ffffff 0%, #e9d5ff 50%, #f9a8d4 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join the waitlist.
            </h1>
          </div>

          {/* Lede */}
          <p
            className="animate-fade-in-up-delay-2"
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(216,194,255,0.78)",
              lineHeight: 1.6,
              margin: "0 auto 8px",
              maxWidth: 460,
            }}
          >
            The next-generation chat automation platform. Be first in line when we launch.
          </p>

          {/* Triple cadence */}
          <p
            className="animate-fade-in-up-delay-2"
            style={{
              fontSize: 14,
              color: "rgba(249,168,212,0.95)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              margin: "0 0 40px",
            }}
          >
            Automate. Engage. Scale.
          </p>

          {/* Form */}
          <div className="animate-fade-in-up-delay-3">
            <EmailForm />
          </div>

          {/* Trust */}
          <div
            className="animate-fade-in-up-delay-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginTop: 26,
              fontSize: 12,
              color: "rgba(216,194,255,0.55)",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "2px solid #1a0a3e",
                  background: "linear-gradient(135deg, #7e22ce, #ec4899)",
                  boxShadow: "0 0 10px rgba(216,130,255,0.4)",
                }}
              />
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "2px solid #1a0a3e",
                  marginLeft: -7,
                  background: "linear-gradient(135deg, #8b5cf6, #f472b6)",
                  boxShadow: "0 0 10px rgba(216,130,255,0.4)",
                }}
              />
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "2px solid #1a0a3e",
                  marginLeft: -7,
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  boxShadow: "0 0 10px rgba(216,130,255,0.4)",
                }}
              />
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  border: "2px solid #1a0a3e",
                  marginLeft: -7,
                  background: "linear-gradient(135deg, #5c2d91, #d882ff)",
                  boxShadow: "0 0 10px rgba(216,130,255,0.4)",
                }}
              />
            </div>
            <span>
              <strong style={{ color: "#fff", fontWeight: 600 }}>1,200+</strong>{" "}
              teams already on the list.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
