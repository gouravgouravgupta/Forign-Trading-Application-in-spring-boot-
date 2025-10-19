"use client";
import React from "react";
import resume from "@content/resume.json";

export function ResumeSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Experience</h2>
      <div className="space-y-4">
        {resume.experience?.map((item) => (
          <article key={item.company + item.role} className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">{item.role} — {item.company}</h3>
              <span className="text-sm text-gray-500">{item.period}</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.summary}</p>
            {item.technologies?.length ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.technologies.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">{t}</span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
