"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/portfolio/data";
import { SectionHeader } from "./Work";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto mt-24 w-full max-w-[1400px] px-5 md:mt-32 md:px-10"
    >
      <SectionHeader index="03" title="Experience" meta="1+ years working" />

      <div className="mt-6 divide-y divide-line border-t border-line">
        {EXPERIENCE.map((item, i) => (
          <motion.div
            key={item.role + item.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-6 md:py-8"
            data-cursor="View"
          >
            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-ash">
                {item.period}
              </span>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm text-ash">
                {item.company} · {item.location}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="text-sm leading-relaxed text-ash">
                {item.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
