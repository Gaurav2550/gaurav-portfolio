"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

/**
 * Optimized custom cursor with smooth animations
 * Performance-focused with reduced re-renders
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const { theme } = useTheme();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.3 });

  // Theme-aware colors (memoized)
  const isDark = theme === "dark";
  const cursorColor = isDark ? "bg-white" : "bg-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const textColor = isDark ? "text-black" : "text-white";

  const move = useCallback((e: MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  }, [x, y]);

  const over = useCallback((e: MouseEvent) => {
    const t = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
    if (t) {
      setHovering(true);
      setLabel(t.dataset.cursor ?? null);
    } else {
      setHovering(false);
      setLabel(null);
    }
  }, []);

  const down = useCallback(() => setClicking(true), []);
  const up = useCallback(() => setClicking(false), []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    mq.addEventListener("change", update);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      mq.removeEventListener("change", update);
    };
  }, [move, over, down, up]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      {/* Outer ring */}
      <motion.div
        className={`absolute rounded-full border-2 ${borderColor}`}
        style={{
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: hovering ? 100 : clicking ? 20 : 32,
          height: hovering ? 100 : clicking ? 20 : 32,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      />

      {/* Inner dot */}
      <motion.div
        className={`absolute flex items-center justify-center rounded-full ${cursorColor} ${textColor}`}
        style={{
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: hovering ? 88 : clicking ? 12 : 8,
          height: hovering ? 88 : clicking ? 12 : 8,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {label && (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 flex items-center justify-center p-2"
            >
              <span 
                className="font-semibold uppercase tracking-tight text-center leading-tight"
                style={{
                  fontSize: '10px',
                  maxWidth: '72px',
                  wordBreak: 'break-word',
                }}
              >
                {label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Simplified pulse effect */}
      {hovering && (
        <motion.div
          className={`absolute rounded-full border ${borderColor}`}
          style={{
            x: "-50%",
            y: "-50%",
            opacity: 0.3,
          }}
          initial={{ width: 88, height: 88 }}
          animate={{ width: 110, height: 110, opacity: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
}
