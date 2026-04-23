"use client";

import { useState, type FormEvent } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

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
      <div className="text-center px-6 py-8 rounded-2xl bg-white/5 border border-purple-400/20 backdrop-blur-sm glow-box">
        <div className="text-4xl mb-3 drop-shadow-[0_0_20px_rgba(216,130,255,0.6)]">✨</div>
        <p className="text-white font-semibold text-lg tracking-tight">
          {alreadySubscribed ? "You're already on the list." : "You're on the list."}
        </p>
        <p className="text-purple-200/70 text-sm mt-2 leading-relaxed">
          {alreadySubscribed
            ? "We'll notify you the moment Xyra Chat launches."
            : "We'll ping you the moment Xyra Chat launches — no spam."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex justify-center mb-5">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-pink-300/90 px-3.5 py-1.5 rounded-full border border-pink-400/35 bg-pink-400/10">
          <span
            className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse-glow"
            style={{ boxShadow: "0 0 10px rgba(244,114,182,0.8)" }}
          />
          Early Access
        </span>
      </div>

      <p className="text-center text-sm text-purple-200/70 mb-4">
        Be first in line. We&apos;ll notify you at launch.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          aria-label="Email address"
          className="flex-1 min-w-0 px-5 py-3.5 rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur-sm text-white placeholder-purple-300/40 outline-none focus:border-pink-400/60 focus:ring-2 focus:ring-pink-400/25 transition-all duration-300 text-sm disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 glow-box glow-box-hover cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-wait"
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
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {error ? (
        <p className="mt-3 text-center text-sm text-pink-300/90">{error}</p>
      ) : (
        <p className="mt-3 text-center text-xs text-purple-200/50">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
