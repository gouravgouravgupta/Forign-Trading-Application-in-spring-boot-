"use client";
import React from "react";
import { motion } from "framer-motion";

export function Projects() {
  const items = [
    {
      title: "Trade Platform",
      description: "Event-driven microservices with Kafka, Redis, and Spring Boot",
      tags: ["Java", "Spring", "Kafka", "Redis"],
      href: "#"
    },
    {
      title: "Rates API",
      description: "Fast REST API with caching and observability",
      tags: ["Java", "Spring", "Prometheus", "NGINX"],
      href: "#"
    },
    {
      title: "Portfolio",
      description: "Next.js + Expo unified portfolio with 3D",
      tags: ["Next.js", "Expo", "Three.js"],
      href: "#"
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg transition bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-brand-50 text-brand-700 dark:bg-brand-800/30 dark:text-brand-200 border border-brand-200/60 dark:border-brand-700/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
