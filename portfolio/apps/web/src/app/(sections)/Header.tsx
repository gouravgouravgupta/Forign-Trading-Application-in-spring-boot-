"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 z-20">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold">Gourav Gupta</a>
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-6">
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-brand-600">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-brand-600">Contact</a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </motion.nav>
      </div>
    </header>
  );
}
