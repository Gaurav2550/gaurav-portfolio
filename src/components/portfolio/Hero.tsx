"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Sparkles, Code2, Zap } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio/data";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const portraitWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useGSAP(
    () => {
      // Enhanced staggered reveal with more dynamic animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from("[data-hero='line-1'] .char", {
        yPercent: 120,
        rotate: 8,
        opacity: 0,
        stagger: 0.035,
        duration: 1.1,
        ease: "back.out(1.2)",
      })
        .from(
          "[data-hero='line-2'] .char",
          { yPercent: 120, rotate: -8, opacity: 0, stagger: 0.035, duration: 1.1, ease: "back.out(1.2)" },
          "-=0.9"
        )
        .from(
          "[data-hero='portrait']",
          { scale: 0.8, yPercent: 10, opacity: 0, duration: 1.2, ease: "expo.out" },
          "-=1.2"
        )
        .from(
          "[data-hero='badge']",
          { scale: 0, rotate: -180, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(2)" },
          "-=0.4"
        )
        .from(
          "[data-hero='title']",
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.6"
        )
        .from(
          "[data-hero='desc']",
          { y: 25, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
        .from(
          "[data-hero='cta']",
          { scale: 0.9, y: 20, opacity: 0, duration: 0.7, ease: "back.out(1.5)" },
          "-=0.5"
        )
        .from(
          "[data-hero='social']",
          { x: -40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.7"
        );

      // Enhanced 3D parallax effect on portrait
      const onMove = (e: MouseEvent) => {
        const rect = root.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(portraitWrap.current, {
          x: x * 30,
          y: y * 22,
          rotateY: x * 8,
          rotateX: -y * 8,
          duration: 0.9,
          ease: "power2.out",
        });
      };
      const node = root.current;
      node?.addEventListener("mousemove", onMove);
      return () => node?.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  const line1 = "Gaurav".split("");
  const line2 = "Thombare".split("");

  return (
    <section
      ref={root}
      id="top"
      className="relative mx-auto w-full max-w-[1400px] overflow-hidden px-5 pt-28 md:px-10 md:pt-36"
    >
      {/* Decorative grid pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating decorative shapes */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-ink/10 dark:bg-paper/10"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[25%] h-3 w-3 rounded-full bg-ink/10 dark:bg-paper/10"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-[5%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-ink/10 dark:bg-paper/10"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-32 w-32 opacity-[0.03] dark:opacity-[0.05]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L100 0 L0 100 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-32 w-32 rotate-180 opacity-[0.03] dark:opacity-[0.05]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L100 0 L0 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative">
        {/* Giant outlined name — line 1 */}
        <div className="relative">
          {/* Decorative line accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="absolute -left-5 top-[15%] h-[2px] w-16 origin-left bg-ink/20 dark:bg-paper/20 md:-left-10 md:w-24"
          />
          
          <h1
            data-hero="line-1"
            aria-label="Gaurav "
            className="pointer-events-none relative z-10 select-none font-display text-[22vw] font-bold leading-[2.15] tracking-tight md:text-[16vw] lg:text-[15vw]"
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
        </div>

        {/* Portrait + second line row */}
        <div className="relative z-10 -mt-[8vw] flex flex-col items-center justify-center md:-mt-[10vw]">
          {/* Decorative ring around portrait */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: [0, 360],
            }}
            transition={{
              scale: { delay: 1.3, duration: 0.8 },
              opacity: { delay: 1.3, duration: 0.8 },
              rotate: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
            className="pointer-events-none absolute z-0 h-[46vw] w-[62vw] rounded-[32px] border border-dashed border-ink/10 dark:border-paper/10 md:h-[40vw] md:w-[36vw] lg:h-[36vw] lg:w-[32vw]"
          />
          
          <div
            ref={portraitWrap}
            data-hero="portrait"
            data-cursor="Hello"
            className="relative z-20 will-change-transform"
            style={{ perspective: 1000 }}
          >
            {/* Subtle glow effect behind portrait */}
            <div className="absolute inset-0 -z-10 translate-y-4 scale-95 rounded-[28px] bg-ink/5 blur-2xl dark:bg-paper/5" />
            
            <div className="relative h-[44vw] w-[60vw] overflow-hidden rounded-[28px] bg-muted shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] md:h-[38vw] md:w-[34vw] lg:h-[34vw] lg:w-[30vw]">
              <img
                src="/images/Gaurav Thombare.png"
                alt="portrait of Gaurav Thomabare software engineer"
                className="h-full w-full object-cover object-[center_20%] grayscale-portrait dark:grayscale-0 dark:filter-none"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/5" />
              
              {/* Scan line effect */}
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-ink/20 to-transparent dark:via-paper/20"
                animate={{
                  top: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              />
            </div>

            {/* Floating label badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -right-3 top-6 hidden rotate-3 rounded-full border border-line bg-background px-3 py-1 text-[11px] font-medium text-ink shadow-sm md:block"
            >
              Based in Pune · IST
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
          <div className="relative">
            <h2
              data-hero="line-2"
              aria-hidden
              className="pointer-events-none -mt-[6vw] select-none font-sans text-[22vw] font-bold leading-[2.12] tracking-tight md:-mt-[4vw] md:text-[16vw] lg:text-[15vw]"
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
            
            {/* Decorative line accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="absolute -right-5 bottom-[25%] h-[2px] w-16 origin-right bg-ink/20 dark:bg-paper/20 md:-right-10 md:w-24"
            />
          </div>
        </div>

        {/* Lower row: title + desc + CTA (left), socials (right) */}
        <div className="mt-10 flex flex-col gap-10 md:mt-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p
              data-hero="title"
              className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
            >
              Software Engineer
            </p>
            <p
              data-hero="desc"
              className="mt-3 max-w-sm text-[15px] leading-relaxed text-ash md:text-base"
            >
              Passionate about building scalable, secure, and high-performance software solutions. I combine clean code with modern architecture to deliver seamless user experiences.
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
  case "GitHub":
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.35c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12C22 6.48 17.52 2 12 2Z" />
      </svg>
    );

  case "Twitter":
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="currentColor"
        aria-hidden
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26L22.827 21.75h-6.437l-5.04-6.57-5.76 6.57H2.28l7.73-8.835L1.667 2.25H8.27l4.556 6.025 5.418-6.025Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    );

  case "LinkedIn":
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="currentColor"
        aria-hidden
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
      </svg>
    );

  default:
    return null;
}
}
