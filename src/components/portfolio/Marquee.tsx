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
      className="mt-24 border-y border-line bg-background py-5 md:mt-32"
    >
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {row.map((w, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-6 font-display text-2xl font-medium text-ink/80 md:text-3xl"
            >
              {w}
              <span className="text-emerald-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-8 grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-background px-6 py-7 text-center md:py-9"
          >
            <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
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
