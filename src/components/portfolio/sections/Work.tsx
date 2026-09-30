"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/portfolio/data";

export function Work() {
  return (
    <section id="work" className="mx-auto mt-24 w-full max-w-[1400px] px-5 md:mt-32 md:px-10">
      <SectionHeader index="01" title="Selected Work" meta="4+ projects Build" />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#contact"
          data-cursor="More"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          View full case studies
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const spanClass =
    project.span === "wide"
      ? "md:col-span-4"
      : project.span === "tall"
      ? "md:col-span-2 md:row-span-2"
      : "md:col-span-2";

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.4), ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card ${spanClass}`}
      data-cursor="Open"
    >
      {/* Thumbnail */}
      <div className={`relative aspect-[16/10] overflow-hidden ${project.accent}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {project.thumbnail ? (
            // Display actual project thumbnail
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            // Fallback: Abstract project "preview" — pure CSS, no extra assets
            <div className="relative h-[78%] w-[78%] rounded-xl bg-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-transform duration-700 group-hover:scale-[1.04]">
              <div className="absolute left-4 top-4 h-2 w-16 rounded-full bg-ink/15" />
              <div className="absolute left-4 top-8 h-2 w-28 rounded-full bg-ink/10" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="h-10 rounded-md bg-ink/10" />
                <div className="h-10 rounded-md bg-ink/10" />
                <div className="h-10 rounded-md bg-ink/15" />
              </div>
            </div>
          )}
        </div>

        <div className="absolute right-4 top-4 z-10 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
          {project.year}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-ash transition-all group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ash">
          {project.category}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function SectionHeader({
  index,
  title,
  meta,
}: {
  index: string;
  title: string;
  meta?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-end justify-between border-b border-line pb-5"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-ash">[{index}]</span>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {meta ? (
        <span className="hidden text-sm text-ash md:block">{meta}</span>
      ) : null}
    </motion.div>
  );
}
