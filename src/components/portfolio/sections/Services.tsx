"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/portfolio/data";
import { SectionHeader } from "./Work";

export function Services() {
  return (
    <section id="services" className="mx-auto mt-16 w-full max-w-[1400px] px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8 lg:mt-32 lg:px-10">
      <SectionHeader index="02" title="What I Do" meta="4 service lines" />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative border-b border-line p-5 sm:p-6 lg:p-8 [&:nth-child(odd)]:lg:border-r [&:nth-child(odd)]:lg:border-r-line"
            data-cursor="Explore"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-ash">{s.number}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {s.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ash sm:text-base">
              {s.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {s.deliverables.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink/80"
                >
                  {d}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
