"use client";

import { useState, type FormEvent } from "react";

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(168,85,247,0.22)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderRadius: 20,
  padding: "28px 24px",
  boxShadow:
    "0 0 40px rgba(216,130,255,0.25), 0 0 80px rgba(216,130,255,0.10), inset 0 1px 0 rgba(255,255,255,0.08)",
};

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setAlreadySubscribed(Boolean(data.alreadySubscribed));
      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div style={{ ...cardStyle, textAlign: "center", padding: "32px 24px" }}>
        <div
          style={{
            fontSize: 40,
            marginBottom: 12,
            filter: "drop-shadow(0 0 20px rgba(216,130,255,0.6))",
          }}
        >
          ✨
        </div>
        <p
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.01em",
            margin: "0 0 8px",
          }}
        >
          {alreadySubscribed ? "You're already on the list." : "You're on the list."}
        </p>
        <p
          style={{
            color: "rgba(216,194,255,0.70)",
            fontSize: 14,
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          We&apos;ll ping you the moment Xyra Chat launches — no spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={cardStyle}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={status === "loading"}
          aria-label="Email address"
          style={{
            flex: 1,
            minWidth: 0,
            height: 52,
            padding: "0 18px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${focused ? "rgba(244,114,182,0.55)" : "rgba(168,85,247,0.22)"}`,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            fontFamily: "inherit",
            fontSize: 15,
            outline: "none",
            boxShadow: focused
              ? "0 0 0 3px rgba(244,114,182,0.15), 0 0 20px rgba(216,130,255,0.15)"
              : "none",
            transition: "all 300ms ease",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            height: 52,
            padding: "0 28px",
            border: 0,
            borderRadius: 12,
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: 14,
            color: "#fff",
            whiteSpace: "nowrap",
            background: hovering
              ? "linear-gradient(90deg, #9333ea 0%, #f472b6 100%)"
              : "linear-gradient(90deg, #7e22ce 0%, #ec4899 100%)",
            boxShadow: hovering
              ? "0 0 40px rgba(216,130,255,0.55), 0 0 80px rgba(216,130,255,0.22)"
              : "0 0 30px rgba(216,130,255,0.35), 0 0 60px rgba(216,130,255,0.12)",
            cursor: status === "loading" ? "wait" : "pointer",
            transition: "all 300ms ease",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            opacity: status === "loading" ? 0.6 : 1,
            transform: hovering ? "translateY(-1px)" : "none",
          }}
        >
          {status === "loading" ? (
            "Sending…"
          ) : (
            <>
              Notify Me
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  width: 14,
                  height: 14,
                  transition: "transform 200ms ease",
                  transform: hovering ? "translateX(3px)" : "none",
                }}
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 14,
          fontSize: 12,
          color: "rgba(216,194,255,0.65)",
          cursor: "pointer",
          userSelect: "none",
          justifyContent: "center",
        }}
      >
        <input
          type="checkbox"
          checked={wantsUpdates}
          onChange={(e) => setWantsUpdates(e.target.checked)}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        />
        <span
          style={{
            width: 16,
            height: 16,
            flexShrink: 0,
            borderRadius: 5,
            border: wantsUpdates
              ? "1px solid transparent"
              : "1px solid rgba(168,85,247,0.40)",
            background: wantsUpdates
              ? "linear-gradient(135deg, #7e22ce, #ec4899)"
              : "rgba(255,255,255,0.04)",
            display: "inline-grid",
            placeItems: "center",
            boxShadow: wantsUpdates ? "0 0 10px rgba(216,130,255,0.5)" : "none",
            transition: "all 200ms ease",
          }}
        >
          {wantsUpdates && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path
                d="M2 5.5 L4 7.5 L8 2.5"
                stroke="#fff"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        Send me occasional build updates — no spam, one-click unsubscribe.
      </label>

      {error && (
        <p
          style={{
            marginTop: 12,
            textAlign: "center",
            fontSize: 13,
            color: "rgba(249,168,212,0.90)",
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
