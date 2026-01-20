"use client";

import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark,
    resolvedTheme,
    systemTheme,
  };
}
