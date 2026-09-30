"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-16 w-full max-w-[1400px] px-4 sm:mt-20 sm:px-6 md:mt-24 md:px-8 lg:mt-32 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink to-ink/95 px-5 py-14 text-paper sm:rounded-3xl sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24"
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-pink-500/20 to-orange-500/20 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Big background word with enhanced effect */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-4 select-none font-display text-[18vw] font-black uppercase leading-none tracking-tighter text-paper/[0.08] md:left-10 md:text-[16vw]"
          animate={{
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Contact
        </motion.span>

        <div className="relative">
          {/* Section label with icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 backdrop-blur-sm"
          >
        
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/80">
              Let&apos;s build something
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Have Software that needs{" "}
            <span className="inline-block bg-gradient-to-t  from-black to-white/95 bg-clip-text text-transparent">
              Scalable, Fast & Secure
            </span>{" "}
            Solutions?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            I take on a small number of new projects each quarter. Tell me about
            yours — I usually reply within a day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="mailto:thombareg216@gmail.com"
              data-cursor="Email"
              className="group relative flex w-full overflow-hidden rounded-full bg-paper px-5 py-4 text-xs font-semibold text-ink transition-all hover:shadow-2xl hover:shadow-paper/20 sm:w-auto sm:px-8 sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex min-w-0 items-center justify-center gap-2 break-all sm:gap-2.5">
                <Mail className="h-4 w-4" />
                thombareg216@gmail.com
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#top"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-paper/30 bg-paper/5 px-5 py-4 text-sm font-semibold text-paper backdrop-blur-sm transition-all hover:border-paper/50 hover:bg-paper/10 sm:w-auto sm:px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="h-4 w-4" />
              Book a 30-min call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

          {/* Social Links with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 space-y-4 sm:mt-16"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/20 to-transparent" />
            
            <div className="flex flex-col gap-3 pt-4 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:gap-5 sm:gap-6">
              {SOCIAL_LINKS.map((s, index) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="text-paper/40">{s.handle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
