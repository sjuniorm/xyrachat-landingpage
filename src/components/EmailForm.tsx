"use client";

import { useState, type FormEvent } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(true);
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

  const cardClasses =
    "rounded-[20px] border border-purple-400/25 bg-white/[0.06] backdrop-blur-md " +
    "shadow-[0_0_40px_rgba(216,130,255,0.25),0_0_80px_rgba(216,130,255,0.10),inset_0_1px_0_rgba(255,255,255,0.08)]";

  if (status === "success") {
    return (
      <div className={`${cardClasses} px-6 py-8 text-center`}>
        <div className="text-4xl mb-3 drop-shadow-[0_0_20px_rgba(216,130,255,0.6)]">
          ✨
        </div>
        <p className="text-white font-semibold text-lg tracking-tight">
          {alreadySubscribed ? "You're already on the list." : "You're on the list."}
        </p>
        <p className="text-purple-200/70 text-sm mt-2 leading-relaxed">
          We&apos;ll ping you the moment Xyra Chat launches — no spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${cardClasses} px-6 py-6 sm:px-7 sm:py-7`}
    >
      <div className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          aria-label="Email address"
          className="w-full h-[52px] px-5 rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur-sm text-white placeholder-purple-300/40 outline-none focus:border-pink-400/60 focus:ring-2 focus:ring-pink-400/25 transition-all duration-300 text-[15px] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-2 w-full h-[52px] px-7 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 glow-box glow-box-hover cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-wait"
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

      <label className="flex items-center justify-center gap-2.5 mt-4 text-xs text-purple-200/60 cursor-pointer select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={wantsUpdates}
          onChange={(e) => setWantsUpdates(e.target.checked)}
        />
        <span className="w-4 h-4 rounded-[5px] border border-purple-400/40 bg-white/5 inline-grid place-items-center transition-all duration-200 peer-checked:bg-gradient-to-br peer-checked:from-purple-700 peer-checked:to-pink-500 peer-checked:border-transparent peer-checked:shadow-[0_0_10px_rgba(216,130,255,0.5)]">
          <svg
            viewBox="0 0 10 10"
            fill="none"
            className={`w-2.5 h-2.5 ${wantsUpdates ? "opacity-100" : "opacity-0"} transition-opacity`}
            aria-hidden
          >
            <path
              d="M2 5.5 L4 7.5 L8 2.5"
              stroke="#fff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Send me occasional build updates — no spam, one-click unsubscribe.
      </label>

      {error && (
        <p className="mt-3 text-center text-sm text-pink-300/90">{error}</p>
      )}
    </form>
  );
}
