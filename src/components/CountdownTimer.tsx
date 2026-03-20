"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2025-06-01T00:00:00Z");

function calcTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-white/5 border border-purple-400/20 backdrop-blur-sm glow-box">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-400/10 to-transparent pointer-events-none" />
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-purple-300/60 font-medium">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <TimeBlock key={label} value={0} label={label} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6">
      <TimeBlock value={time.days} label="Days" />
      <TimeBlock value={time.hours} label="Hours" />
      <TimeBlock value={time.minutes} label="Minutes" />
      <TimeBlock value={time.seconds} label="Seconds" />
    </div>
  );
}
