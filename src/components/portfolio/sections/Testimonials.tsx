"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/portfolio/data";
import { SectionHeader } from "./Work";

export function Testimonials() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1400px] px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8 lg:mt-32 lg:px-10">
      <SectionHeader index="04" title="Kind Words" meta="From teams I shipped with" />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-line bg-card p-5 sm:p-6 xl:p-8"
          >
            <span className="font-display text-5xl leading-none text-ink/15">“</span>
            <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/90 md:text-base">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-display text-sm font-bold text-ink">
                {t.author
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.author}</div>
                <div className="text-xs text-ash">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
