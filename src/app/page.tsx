import Image from "next/image";
import { Particles } from "@/components/Particles";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
  return (
    <div className="relative min-h-screen gradient-bg noise-overlay overflow-hidden">
      {/* Pulsing background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[8%] -left-[6%] w-[520px] h-[520px] rounded-full bg-purple-600/25 blur-[130px] animate-pulse-glow" />
        <div
          className="absolute -bottom-[8%] -right-[8%] w-[560px] h-[560px] rounded-full bg-pink-500/25 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-violet-500/15 blur-[160px] animate-pulse-glow"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16">
        <div className="w-full max-w-xl text-center">
          {/* Logo */}
          <div className="animate-fade-in-up flex justify-center mb-7">
            <div className="animate-float">
              <Image
                src="/images/icon.png"
                alt="Xyra Chat"
                width={96}
                height={96}
                priority
                className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_40px_rgba(216,130,255,0.6)]"
              />
            </div>
          </div>

          {/* Eyebrow pill */}
          <div className="animate-fade-in-up-delay-1 flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-semibold text-pink-300/90 px-3.5 py-1.5 rounded-full border border-pink-400/35 bg-pink-400/10">
              <span
                className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse-glow"
                style={{ boxShadow: "0 0 10px rgba(244,114,182,0.8)" }}
              />
              Early Access · Launching 2026
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up-delay-2 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent animate-shimmer">
                Join the waitlist.
              </span>
            </h1>
          </div>

          {/* Lede + triple cadence */}
          <div className="animate-fade-in-up-delay-2 mb-10">
            <p className="text-center text-base sm:text-lg text-purple-100/80 leading-relaxed mx-auto max-w-[28rem]">
              The next-generation chat automation platform. Be first in line when we launch.
            </p>
            <p className="mt-3 text-center text-sm sm:text-base text-pink-300/90 font-semibold tracking-[0.12em]">
              Automate. Engage. Scale.
            </p>
          </div>

          {/* Form card */}
          <div className="animate-fade-in-up-delay-3">
            <EmailForm />
          </div>

          {/* Trust row */}
          <div className="animate-fade-in-up-delay-4 mt-7 flex items-center justify-center gap-3 text-xs text-purple-200/55">
            <div className="flex">
              <span className="w-6 h-6 rounded-full border-2 border-[#1a0a3e] bg-gradient-to-br from-purple-700 to-pink-500 shadow-[0_0_10px_rgba(216,130,255,0.4)]" />
              <span className="w-6 h-6 rounded-full border-2 border-[#1a0a3e] -ml-2 bg-gradient-to-br from-violet-500 to-pink-400 shadow-[0_0_10px_rgba(216,130,255,0.4)]" />
              <span className="w-6 h-6 rounded-full border-2 border-[#1a0a3e] -ml-2 bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(216,130,255,0.4)]" />
              <span className="w-6 h-6 rounded-full border-2 border-[#1a0a3e] -ml-2 bg-gradient-to-br from-[#5c2d91] to-[#d882ff] shadow-[0_0_10px_rgba(216,130,255,0.4)]" />
            </div>
            <span>
              <strong className="text-white font-semibold">1,200+</strong> teams already on the list.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(216,130,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(216,130,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </div>
  );
}
