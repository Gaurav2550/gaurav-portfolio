"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio/data";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const portraitWrap = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered reveal of hero text lines + portrait
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from("[data-hero='line-1'] .char", {
        yPercent: 110,
        rotate: 4,
        stagger: 0.04,
        duration: 1,
      })
        .from(
          "[data-hero='line-2'] .char",
          { yPercent: 110, rotate: -3, stagger: 0.04, duration: 1 },
          "-=0.85"
        )
        .from(
          "[data-hero='portrait']",
          { yPercent: 8, opacity: 0, duration: 1.1, ease: "expo.out" },
          "-=1.1"
        )
        .from(
          "[data-hero='title']",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.6"
        )
        .from(
          "[data-hero='desc']",
          { y: 20, opacity: 0, duration: 0.7 },
          "-=0.5"
        )
        .from(
          "[data-hero='cta']",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.5"
        )
        .from(
          "[data-hero='social']",
          { x: 30, opacity: 0, duration: 0.6, stagger: 0.08 },
          "-=0.6"
        );

      // Subtle parallax on portrait following the cursor
      const onMove = (e: MouseEvent) => {
        const rect = root.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(portraitWrap.current, {
          x: x * 24,
          y: y * 18,
          rotateY: x * 6,
          rotateX: -y * 6,
          duration: 0.8,
          ease: "power2.out",
        });
      };
      const node = root.current;
      node?.addEventListener("mousemove", onMove);
      return () => node?.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  const line1 = "DYMAS".split("");
  const line2 = "ALFIN".split("");

  return (
    <section
      ref={root}
      id="top"
      className="relative mx-auto w-full max-w-[1400px] px-5 pt-28 md:px-10 md:pt-36"
    >
      <div className="relative">
        {/* Giant outlined name — line 1 */}
        <h1
          data-hero="line-1"
          aria-label="Dymas Alfin"
          className="pointer-events-none select-none font-display text-[22vw] font-bold leading-[0.82] tracking-tight md:text-[16vw] lg:text-[15vw]"
        >
          <span className="block overflow-hidden">
            {line1.map((c, i) => (
              <span
                key={i}
                className="char inline-block text-stroke will-change-transform"
              >
                {c}
              </span>
            ))}
          </span>
        </h1>

        {/* Portrait + second line row */}
        <div className="relative z-10 -mt-[8vw] flex flex-col items-center justify-center md:-mt-[10vw]">
          <div
            ref={portraitWrap}
            data-hero="portrait"
            data-cursor="Hello"
            className="relative z-20 will-change-transform"
            style={{ perspective: 1000 }}
          >
            <div className="relative h-[44vw] w-[60vw] overflow-hidden rounded-[28px] bg-muted shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] md:h-[38vw] md:w-[34vw] lg:h-[34vw] lg:w-[30vw]">
              <img
                src="/portrait/portrait.png"
                alt="Portrait of Dymas Alfin, UI/UX Designer"
                className="h-full w-full object-cover grayscale-portrait"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5" />
            </div>

            {/* Floating label badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -right-3 top-6 hidden rotate-3 rounded-full border border-line bg-background px-3 py-1 text-[11px] font-medium text-ink shadow-sm md:block"
            >
              Based in Jakarta · GMT+7
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="absolute -left-4 bottom-8 hidden -rotate-3 rounded-full border border-line bg-background px-3 py-1 text-[11px] font-medium text-ink shadow-sm md:block"
            >
              Open to remote · Worldwide
            </motion.div>
          </div>

          {/* Giant solid name — line 2 */}
          <h2
            data-hero="line-2"
            aria-hidden
            className="pointer-events-none -mt-[6vw] select-none font-display text-[22vw] font-bold leading-[0.82] tracking-tight md:-mt-[8vw] md:text-[16vw] lg:text-[15vw]"
          >
            <span className="block overflow-hidden text-center">
              {line2.map((c, i) => (
                <span
                  key={i}
                  className="char inline-block text-ink will-change-transform"
                >
                  {c}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Lower row: title + desc + CTA (left), socials (right) */}
        <div className="mt-10 flex flex-col gap-10 md:mt-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p
              data-hero="title"
              className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
            >
              UI/UX Designer
            </p>
            <p
              data-hero="desc"
              className="mt-3 max-w-sm text-[15px] leading-relaxed text-ash md:text-base"
            >
              Designing digital products that are clear, usable, and conversion
              focused. I help teams ship interfaces people actually want to
              use.
            </p>
            <motion.a
              data-hero="cta"
              href="#work"
              data-cursor="See work"
              whileHover={{ y: -2 }}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
            >
              Let&apos;s collaborate
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Social links — vertical on desktop, horizontal scroll on mobile */}
          <div className="flex gap-3 md:flex-col md:gap-2.5">
            {SOCIAL_LINKS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="Follow"
                data-hero="social"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 rounded-full border border-line bg-background px-4 py-2.5 text-sm font-medium text-ink"
              >
                <SocialIcon name={s.label} />
                <span>{s.label}</span>
                <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-ash transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const cls = "h-4 w-4";
  switch (name) {
    case "Dribbble":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.62a8.46 8.46 0 0 1 1.92 5.3c-.28-.06-3.08-.63-5.9-.27-.06-.15-.12-.3-.19-.45-.18-.42-.38-.84-.59-1.24 3.12-1.27 4.54-3.1 4.76-3.34ZM12 3.5c2.18 0 4.17.82 5.68 2.16-.18.26-1.45 1.97-4.46 3.1A39.7 39.7 0 0 0 9.4 4.05 8.5 8.5 0 0 1 12 3.5ZM7.78 4.65a46.7 46.7 0 0 1 3.8 4.62c-4.84 1.29-9.1 1.26-9.56 1.26A8.53 8.53 0 0 1 7.78 4.65ZM3.51 12v-.26c.45.01 5.41.07 10.57-1.46.3.58.58 1.17.84 1.76l-.4.12c-5.3 1.71-8.13 6.4-8.37 6.79A8.46 8.46 0 0 1 3.51 12Zm8.49 8.5a8.43 8.43 0 0 1-5.22-1.79c.18-.37 2.24-4.34 8.04-6.36l.07-.02c1.45 3.77 2.05 6.93 2.2 7.83A8.45 8.45 0 0 1 12 20.5Zm3.7-1.5c-.1-.61-.65-3.62-1.99-7.34 2.65-.42 4.97.27 5.26.36a8.5 8.5 0 0 1-3.27 6.98Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.9a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
        </svg>
      );
    default:
      return null;
  }
}
