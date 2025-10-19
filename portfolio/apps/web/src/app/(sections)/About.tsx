"use client";
import React from "react";
import resume from "@content/resume.json";

export function About() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">About</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
        {resume.summary || "I am a web and mobile developer focused on building high-quality products."}
      </p>
    </section>
  );
}
