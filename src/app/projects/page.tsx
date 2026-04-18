"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black pt-32 pb-48 px-6 md:px-12">
            
            {/* Header Section */}
            <header className="max-w-[1400px] mx-auto mb-24 md:mb-40">
                <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">
                    <span className="text-[8px]">◆</span>
                    <span>Project Archive</span>
                </div>
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none"
                >
                    All Work.
                </motion.h1>
            </header>

            {/* Staggered Masonry-ish Grid */}
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-24 md:gap-y-48">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: index % 2 * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`group flex flex-col ${index % 2 !== 0 ? "md:mt-32" : ""}`}
                    >
                        <Link href={`/projects/${project.id}`} className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-8 cursor-pointer" data-cursor="VIEW">
                            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                            <Image 
                                fill
                                src={project.image} 
                                alt={project.title} 
                                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </Link>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                                    {project.title}
                                </h2>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 pb-1">
                                {project.year}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Back Home Button */}
            <div className="max-w-[1400px] mx-auto mt-40 md:mt-60 flex justify-center">
                <Link href="/" className="group px-10 py-6 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1">
                        <path d="m12 19 7-7-7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back to Home
                </Link>
            </div>
            
        </main>
    );
}
