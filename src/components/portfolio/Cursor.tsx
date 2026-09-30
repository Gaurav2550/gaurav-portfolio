"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor that follows the mouse with a smooth spring.
 * Hidden on touch / small screens.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");

    const update = () => setEnabled(mq.matches);
    update(); // initial sync (allowed: setState from a subscription setup is fine when called as the result of an external source)

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      if (t) {
        setHovering(true);
        setLabel(t.dataset.cursor ?? null);
      } else {
        setHovering(false);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    mq.addEventListener("change", update);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      mq.removeEventListener("change", update);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy, mixBlendMode: "difference" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white text-black"
        animate={{
          width: hovering ? 88 : 18,
          height: hovering ? 88 : 18,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.6 }}
      >
        <AnimatePresence>
          {label ? (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[11px] font-medium uppercase tracking-wider"
            >
              {label}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
