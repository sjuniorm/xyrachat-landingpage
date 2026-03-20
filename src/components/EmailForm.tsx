"use client";

import { useState, type FormEvent } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center p-6 rounded-2xl bg-white/5 border border-purple-400/20 backdrop-blur-sm glow-box">
        <div className="text-3xl mb-3">✨</div>
        <p className="text-white font-medium text-lg">You&apos;re on the list!</p>
        <p className="text-purple-200/60 text-sm mt-1">
          We&apos;ll notify you when Xyra Chat launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <p className="text-center text-sm text-purple-200/60 mb-4">
        Get notified when we launch
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur-sm text-white placeholder-purple-300/40 outline-none focus:border-pink-400/50 focus:ring-1 focus:ring-pink-400/30 transition-all duration-300 text-sm"
        />
        <button
          type="submit"
          className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all duration-300 glow-box glow-box-hover cursor-pointer whitespace-nowrap"
        >
          Notify Me
        </button>
      </div>
    </form>
  );
}
