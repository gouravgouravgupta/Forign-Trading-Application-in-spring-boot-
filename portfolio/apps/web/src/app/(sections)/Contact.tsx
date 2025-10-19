"use client";
import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
        <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const mailto = `mailto:gouravgouravgupta@gmail.com?subject=${encodeURIComponent(String(data.get('name')||''))}%20-%20Portfolio%20Inquiry&body=${encodeURIComponent(String(data.get('message')||''))}`;
            window.location.href = mailto;
          }}
        >
          <input name="name" placeholder="Your name" className="border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-transparent" required />
          <input name="email" type="email" placeholder="Your email" className="border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-transparent" required />
          <textarea name="message" placeholder="Message" className="md:col-span-2 border border-gray-300 dark:border-gray-700 rounded px-4 py-3 bg-transparent min-h-[120px]" required />
          <button className="md:col-span-2 px-5 py-3 rounded bg-brand-600 text-white">Send</button>
        </motion.form>
      </div>
    </section>
  );
}
