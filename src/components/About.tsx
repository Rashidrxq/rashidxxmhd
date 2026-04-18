"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 md:py-48 px-6 flex flex-col items-center justify-center bg-[#f4f4f2] text-[#111111]">
            <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-12">
                <span className="text-[8px] md:text-[10px]">◆</span>
                <span>About Me</span>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[1000px] text-center space-y-8 md:space-y-12"
            >
                <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2] md:leading-[1.1] text-balance">
                    I'm Muhammed Rashid P P, a Software & Frontend Developer building intelligent digital experiences. 
                    Focused on AI and scalable architecture, I create systems that solve real problems 
                    with precision, simplicity, and impact.
                </p>

                <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2] md:leading-[1.1] text-balance text-black/70">
                    Driven by curiosity and execution, I turn ideas into scalable products — 
                    from concept to deployment.
                </p>
            </motion.div>

            <Link href="/about" className="group mt-16 md:mt-24 px-8 py-5 bg-[#111111] hover:bg-white text-white hover:text-[#111111] border border-[#111] transition-colors duration-500 overflow-hidden flex items-center justify-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                >
                    <path d="M9 10l3-3 3 3" />
                    <path d="M12 7v7a4 4 0 0 0 4 4h1" />
                </svg>
                <span className="relative inline-block overflow-hidden h-4 leading-4">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">More About Me</span>
                    <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">More About Me</span>
                </span>
            </Link>
        </section>
    );
}
