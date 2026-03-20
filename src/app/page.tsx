import Image from "next/image";
import { Particles } from "@/components/Particles";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
  return (
    <div className="relative min-h-screen gradient-bg noise-overlay overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        {/* Logo */}
        <div className="animate-fade-in-up mb-2">
          <div className="animate-float">
            <Image
              src="/images/logo.png"
              alt="Xyra Chat"
              width={320}
              height={320}
              priority
              className="w-56 sm:w-72 md:w-80 h-auto drop-shadow-[0_0_40px_rgba(216,130,255,0.5)]"
            />
          </div>
        </div>

        {/* Coming Soon text */}
        <div className="animate-fade-in-up-delay-1 text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent animate-shimmer">
              Coming Soon
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up-delay-2 text-center mb-10 max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100/80 font-light leading-relaxed">
            The next-generation chat automation platform.
            <br className="hidden sm:block" />
            <span className="text-pink-300/90 font-medium">Automate. Engage. Scale.</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up-delay-3 mb-12">
          <CountdownTimer />
        </div>

        {/* Email signup */}
        <div className="animate-fade-in-up-delay-4 w-full max-w-md">
          <EmailForm />
        </div>

        {/* Platform link */}
        <div className="animate-fade-in-up-delay-4 mt-8 text-center">
          <p className="text-sm text-purple-300/60">
            Already have access?{" "}
            <a
              href="https://www.xyra.chat/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300/80 hover:text-pink-300 underline underline-offset-4 transition-colors duration-300"
            >
              Sign in to the platform
            </a>
          </p>
        </div>

        {/* Bottom branding */}
        <div className="absolute bottom-6 text-center">
          <p className="text-xs text-purple-300/40 tracking-widest uppercase">
            Powered by Axion Labs
          </p>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(216,130,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(216,130,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>
    </div>
  );
}
