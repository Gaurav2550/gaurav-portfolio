"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-24 w-full max-w-[1400px] px-5 md:mt-32 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-paper md:px-16 md:py-24"
      >
        {/* Big background word */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-4 select-none font-display text-[26vw] font-bold leading-none text-paper/5 md:left-10 md:text-[20vw]"
        >
          hello?
        </span>

        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
            Let&apos;s build something
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Have a product that needs a clear, usable interface?
          </h2>
          <p className="mt-4 max-w-md text-paper/70">
            I take on a small number of new projects each quarter. Tell me
            about yours — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@dymasalfin.com"
              data-cursor="Email"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink"
            >
              hello@dymasalfin.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
            >
              Book a 30-min call
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-6 text-sm text-paper/70">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-paper"
              >
                {s.label}
                <span className="text-paper/40">{s.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
