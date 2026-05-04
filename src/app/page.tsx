import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Frontend Developer | React & Next.js | Muhammed Rashid P P",
  description:
    "Welcome to the portfolio of Muhammed Rashid P P. Discover exceptional digital experiences built with React, Next.js, and AI integration. Frontend Developer from Kerala, India.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js",
    "portfolio",
    "web development",
    "UI developer",
  ],
  openGraph: {
    title: "Muhammed Rashid P P | Frontend Developer",
    description:
      "Explore the portfolio of a Frontend Developer specializing in React, Next.js, and AI applications.",
    url: "https://rashidxxmhd.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rashid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rashid P P | Frontend Developer",
    description: "Discover exceptional digital experiences and projects",
  },
};

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
