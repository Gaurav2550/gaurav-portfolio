"use client";

import { useTheme } from "next-themes";

export function useThemeTransition() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (event?: React.MouseEvent<HTMLElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Check if browser supports View Transitions API and user hasn't disabled animations
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    // Get click position for ripple effect
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    // Calculate the maximum distance for the ripple
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Use View Transition API for smooth theme change
    const transition = (document as any).startViewTransition(async () => {
      setTheme(newTheme);
    });

    // Apply circular reveal animation when ready
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 500,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return { toggleTheme };
}
