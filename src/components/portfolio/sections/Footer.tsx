"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-24 w-full max-w-[1400px] px-5 pb-10 md:mt-32 md:px-10">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-paper">
            GT
          </div>
          <div>
            <div className="text-sm font-semibold text-ink">Gaurav Thombare</div>
            <div className="text-xs text-ash">Software Engineer · Pune, MH</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-ash">
          <span>© {year} — All rights reserved</span>
          <span className="hidden md:inline">·</span>
        </div>

        <a
          href="#top"
          data-cursor="Top"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
