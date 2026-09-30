"use client";

import { STATS } from "@/lib/portfolio/data";

export function Marquee() {
  const words =  [
  "Backend",
  "Java",
  "Spring Boot",
  "Microservices",
  "System Design",
  "REST APIs",
  "Databases",
  "Cloud",
  "Docker",
  "Kafka",
  "Redis",
  "AI Engineering",
];
  const row = [...words, ...words];

  return (
    <section
      aria-hidden
      className="mt-16 border-y border-line bg-background py-4 sm:mt-20 sm:py-5 md:mt-24 lg:mt-32"
    >
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {row.map((w, i) => (
            <span
              key={i}
              className="mx-4 flex items-center gap-4 font-display text-xl font-medium text-ink/80 sm:mx-6 sm:gap-6 sm:text-2xl md:text-3xl"
            >
              {w}
              <span className="text-emerald-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-6 grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:mt-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-background px-3 py-5 text-center sm:px-6 sm:py-7 md:py-9"
          >
            <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ash md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
