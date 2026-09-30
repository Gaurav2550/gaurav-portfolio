"use client";

import { useTheme } from "next-themes";

/**
 * Simple, performant theme transition without circular reveal
 * Use this if you experience lag with the full animation
 */
export function useSimpleThemeTransition() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Check if browser supports View Transitions API
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    // Simple cross-fade transition - very performant
    (document as any).startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return { toggleTheme };
}
