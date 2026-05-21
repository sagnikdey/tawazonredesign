'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(resolved);
    if (resolved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="border-border bg-card/50 text-muted-foreground hover:bg-muted flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
      >
        <Icon icon="solar:sun-2-linear" width="18" strokeWidth="1.5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="border-border bg-card/50 text-muted-foreground hover:bg-muted flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
    >
      {theme === 'dark' ? (
        <Icon icon="solar:sun-2-linear" width="18" strokeWidth="1.5" />
      ) : (
        <Icon icon="solar:moon-linear" width="18" strokeWidth="1.5" />
      )}
    </button>
  );
}
