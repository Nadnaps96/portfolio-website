"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-border-primary" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-bg-secondary border border-border-primary hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-[#d4a55a] transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-5 h-5 text-[#6b6560] transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
}
