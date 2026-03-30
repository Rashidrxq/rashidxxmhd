"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}
