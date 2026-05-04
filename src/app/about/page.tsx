import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me | Frontend Developer | Muhammed Rashid P P",
  description:
    "Learn about Muhammed Rashid P P's journey, expertise, and approach to frontend development. Passionate about creating elegant digital experiences with React and Next.js.",
  keywords: [
    "about",
    "frontend developer",
    "experience",
    "skills",
    "approach",
    "biography",
  ],
  openGraph: {
    title: "About Muhammed Rashid P P",
    description:
      "Discover the story and expertise of a passionate frontend developer from Kerala, India.",
    url: "https://rashidxxmhd.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Muhammed Rashid",
      },
    ],
  },
  alternates: {
    canonical: "https://rashidxxmhd.vercel.app/about",
  },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">

            {/* Top Minimal Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="text-xl md:text-2xl font-medium tracking-tight hover:opacity-75 transition-opacity">
                    Rashid
                </Link>
                <Link href="/" className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-75 transition-opacity group">
                    {/* Back arrow */}
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-500 group-hover:-translate-x-1"
                    >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Home
                </Link>
            </header>

            {/* Section 1: Hero / Who am I */}
            <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
                {/* Background Video & Overlay */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/aboutme.mp4" type="video/mp4" />
                    </video>


                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
                        <span className="text-[8px]">◆</span>
                        <span>Who Am I</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1] md:leading-[1.05] text-balance">
                        I&apos;m Rashid, a creative software developer who turns complex problems into elegant, beautifully engineered digital experiences.
                    </h1>
                </div>
            </section>

            {/* Section 2: What I Do (Dark Manifesto Style) */}
            <section className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-[#212121] text-[#f4f4f4] overflow-hidden">
                {/* Diagonal aesthetic lines */}
                <div className="absolute top-[10%] right-0 w-[200%] h-[1px] bg-white/5 -rotate-[15deg] origin-top-right"></div>
                <div className="absolute top-[60%] right-0 w-[200%] h-[1px] bg-white/5 -rotate-[15deg] origin-top-right"></div>

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">

                    {/* Top Row: Label & Small Paragraph */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                            <span className="text-[8px]">◆</span>
                            <span>What I Do</span>
                        </div>

                        <div className="w-full md:w-5/12 text-sm md:text-base leading-relaxed text-gray-400">
                            I architect systems that aren&apos;t just functional, but genuinely delightful to interact with. Using cutting-edge technologies like Next.js, React, and robust AI integrations, I take full ownership of the product lifecycle from concept to scalable deployment.
                        </div>
                    </div>

                    {/* Middle: Huge Text */}
                    <div className="w-full md:w-11/12 lg:w-10/12">
                        <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1.1] md:leading-[1.1] text-balance">
                            Each phase of my work carries the same intent; to understand before I create, to refine before I build, and to craft code with care that lasts.
                        </h2>
                    </div>

                    {/* Bottom: Button */}
                    <div>
                        <Link href="#approach" className="group inline-flex items-center justify-center gap-4 px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-transparent transition-all duration-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                            <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                            >
                                <path d="M9 10l3-3 3 3" />
                                <path d="M12 7v7a4 4 0 0 0 4 4h1" />
                            </svg>
                            <span className="relative inline-block overflow-hidden h-4 leading-4">
                                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">My Approach</span>
                                <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">My Approach</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 3: My Vision */}
            <section className="w-full py-32 md:py-48 px-6 md:px-16 bg-[#0a0a0a] text-white">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-12">
                        <span className="text-[8px]">◆</span>
                        <span>My Vision</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] md:leading-[1.1] text-balance">
                        To build the invisible foundation of the future. The best software feels like magic — intuitive, fast, and entirely effortless.
                    </h2>

                    <div className="mt-20 md:mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-left border-t border-white/10 pt-16">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">01</span>
                            <h3 className="text-2xl font-medium">Precision</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">Every pixel and every line of code matters. I strive for pixel-perfect implementations and zero-compromise architecture.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">02</span>
                            <h3 className="text-2xl font-medium">Innovation</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">Staying at the bleeding edge of AI and web technologies to deliver modern, next-generation platforms.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold">03</span>
                            <h3 className="text-2xl font-medium">Scale</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">Writing modular, maintainable, and highly efficient code that scales seamlessly from concept to massive deployment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outro / Footer CTA */}
            <section className="w-full py-24 md:py-32 px-6 bg-black text-white flex flex-col items-center justify-center border-t border-white/5">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 text-center">Ready to build?</h3>
                <Link href="/" className="group inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                    <span className="relative inline-block overflow-hidden h-4 leading-4">
                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">Start a Project</span>
                        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">Start a Project</span>
                    </span>
                </Link>
            </section>

        </main>
    );
}
