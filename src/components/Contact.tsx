"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative w-full bg-[#f4f4f2] text-[#111111] pt-32 md:pt-48 pb-12 px-6 md:px-12 flex flex-col items-center">
            
            {/* Header Content */}
            <div className="w-full max-w-6xl flex flex-col items-start mb-24 md:mb-40">
                <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">
                    <span className="text-[8px] text-[#111]">◆</span>
                    <span>Get in Touch</span>
                </div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.05] text-balance mb-16"
                >
                    Let's build something <br className="hidden lg:block"/>extraordinary together.
                </motion.h2>

                <div className="w-full h-[1px] bg-[#111111]/10 mb-16"></div>

                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0">
                    {/* Contact Links */}
                    <div className="flex flex-col gap-10 md:gap-16 w-full lg:w-auto">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Email</span>
                            <a href="mailto:muhammerashid12345@gmail.com" className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight hover:opacity-60 transition-opacity break-all">
                                muhammerashid12345@gmail.com
                            </a>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Phone & WhatsApp</span>
                            <a href="tel:+919745393044" className="text-2xl md:text-4xl font-medium tracking-tight hover:opacity-60 transition-opacity">
                                +91 97453 93044
                            </a>
                        </div>
                    </div>

                    {/* Socials & Address */}
                    <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Socials</span>
                            <div className="flex flex-col gap-3 font-medium text-sm md:text-base">
                                <a href="https://linkedin.com/in/rashidxxmhd" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                                <a href="https://github.com/Rashidrxq" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">GitHub</a>
                                <a href="https://instagram.com/rshidxxmhd" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Instagram</a>
                                <a href="https://wa.me/919745393044" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">WhatsApp</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Location</span>
                            <div className="flex flex-col gap-1 font-medium text-sm md:text-base text-gray-500">
                                <p>Working globally.</p>
                                <p>Currently based in <br/><span className="text-[#111]">India</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Area */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-[#111111]/10 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                <p>© {new Date().getFullYear()} Rashid. All Rights Reserved.</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for freelance opportunities
                </div>
            </div>
            
        </section>
    );
}
