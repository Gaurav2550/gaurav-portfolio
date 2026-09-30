"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/portfolio/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 w-full max-w-[1400px] items-center justify-between px-5 md:px-10">
        {/* Left — availability badge */}
        <a
          href="#top"
          data-cursor="Home"
          className="group flex items-center gap-2.5 rounded-full border border-line bg-background/70 px-3 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[13px] font-medium text-ink">
            Available for New Project
          </span>
        </a>

        {/* Center — nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-cursor="View"
              className="group relative rounded-full px-3.5 py-2 text-sm text-ink/80 transition-colors hover:text-ink"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {item.label}
                {item.meta ? (
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-ash group-hover:bg-ink group-hover:text-paper transition-colors">
                    {item.meta}
                  </span>
                ) : null}
              </span>
            </a>
          ))}
        </nav>

        {/* Right — CTA + mobile menu button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            data-cursor="Say hi"
            className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-all hover:gap-3 sm:flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-lg font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1 px-5">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-baseline justify-between border-b border-line py-4"
                >
                  <span className="font-display text-3xl font-semibold">
                    {item.label}
                  </span>
                  {item.meta ? (
                    <span className="text-sm text-ash">{item.meta}</span>
                  ) : null}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-paper"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
