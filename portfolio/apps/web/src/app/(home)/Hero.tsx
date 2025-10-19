"use client";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-10 md:py-16">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="uppercase tracking-wide text-brand-700 dark:text-brand-300 text-sm">Portfolio</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="text-4xl md:text-6xl font-bold mt-2">Building delightful digital experiences</motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">I design and develop professional web and mobile applications with animations and 3D.</motion.p>
    </section>
  );
}
