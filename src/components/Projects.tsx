"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative w-full bg-[#111111] text-white py-32 md:py-48 px-6 md:px-12 flex flex-col items-center overflow-hidden">
            
            {/* Minimalist Header */}
            <div className="w-full max-w-[1400px] flex flex-col items-start mb-20 md:mb-32">
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
                    <span className="text-[8px]">◆</span>
                    <span>Selected Work</span>
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter text-white leading-[1.1]"
                >
                    Case Studies.
                </motion.h2>
            </div>

            {/* Elite Interactive List */}
            <div className="w-full max-w-[1400px] flex flex-col border-t border-white/10">
                {projects.map((project, index) => (
                    <Link 
                        href={`/projects/${project.id}`} 
                        key={project.id} 
                        className="group relative w-full flex items-center justify-between py-12 md:py-20 border-b border-white/10 hover:pl-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        data-cursor="VIEW"
                    >
                        
                        {/* Massive Typography Title */}
                        <div className="flex items-start gap-4 md:gap-12 z-20 mix-blend-difference relative">
                            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/40 mt-3 md:mt-6 transition-colors duration-500 group-hover:text-white">
                                0{index + 1}
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter text-white transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-30 group-hover:italic group-hover:translate-x-4">
                                {project.title}
                            </h2>
                        </div>

                        {/* Category Label (Hidden on small screens) */}
                        <div className="hidden lg:block text-sm font-bold tracking-[0.2em] uppercase text-white/40 z-20 mix-blend-difference group-hover:text-white transition-colors duration-500 pt-8">
                            {project.category}
                        </div>

                        {/* Hover Image Reveal */}
                        <div className="absolute top-1/2 left-[50%] md:left-[60%] lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] md:aspect-[16/10] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none rounded-lg md:rounded-2xl overflow-hidden rotate-[-5deg] group-hover:rotate-[2deg] shadow-2xl">
                            {/* Overlay to dim the image slightly when first zooming in */}
                            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700 group-hover:bg-black/0"></div>
                            <Image 
                                src={project.image} 
                                alt={`Muhammed Rashid P P Project - ${project.title}`} 
                                fill
                                className="object-cover scale-125 group-hover:scale-100 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="w-full max-w-[1400px] flex justify-center mt-24 md:mt-32">
                <Link href="/projects" className="group px-8 py-5 bg-[#111111] hover:bg-white text-white hover:text-[#111111] border border-white/20 hover:border-white transition-colors duration-500 overflow-hidden flex items-center justify-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                    >
                        <path d="M9 10l3-3 3 3" />
                        <path d="M12 7v7a4 4 0 0 0 4 4h1" />
                    </svg>
                    <span className="relative inline-block overflow-hidden h-4 leading-4">
                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">All Projects</span>
                        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">All Projects</span>
                    </span>
                </Link>
            </div>
            
        </section>
    );
}
