'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg bg-slate-200/50 dark:bg-slate-800/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/50 text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900 focus:outline-none dark:border-slate-800 dark:bg-[#12192c]/50 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-100"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px] text-amber-500 transition-all hover:rotate-12" />
      ) : (
        <Moon className="h-[18px] w-[18px] text-indigo-500 transition-all hover:-rotate-12" />
      )}
    </button>
  );
}
