"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useSimpleThemeTransition } from "@/hooks/useSimpleThemeTransition";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { toggleTheme } = useSimpleThemeTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-background/70 backdrop-blur" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => toggleTheme()}
      data-cursor="Toggle theme"
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-background/70 backdrop-blur transition-all hover:border-ink/20 hover:bg-background"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative h-5 w-5">
        {/* Sun icon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-ink" />
        </motion.div>

        {/* Moon icon */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-ink" />
        </motion.div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-ink/5"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
}
