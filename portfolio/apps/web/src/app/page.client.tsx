"use client";
import React from "react";
import { Header } from "../app/(sections)";
import { Hero } from "./(home)";
import { Projects, Contact } from "../app/(sections)";
import { About } from "../app/(sections)/About";
import ThemeProviders from "@components/ThemeProviders";

export default function ClientHome() {
  return (
    <ThemeProviders>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeProviders>
  );
}
