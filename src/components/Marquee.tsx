"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Marquee() {
    const row1 = [
        { text: "FULLSTACK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
        { text: "AI EXPERT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", invert: false },
        { text: "NEXT.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", invert: false },
        { text: "SOFTWARE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", invert: false },
        { text: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", invert: false },
        { text: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invert: false }
    ];

    const row2 = [
        { text: "FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", invert: false },
        { text: "BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", invert: false },
        { text: "DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", invert: false },
        { text: "CREATIVE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
        { text: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", invert: false },
        { text: "ANGULAR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", invert: false },
        { text: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", invert: false }
    ];

    return (
        <section className="relative w-full py-12 md:py-20 bg-[#111111] overflow-hidden flex flex-col gap-6 border-t border-b border-white/10">
            {/* Dark gradient masks on edges for depth */}
            <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

            {/* Row 1 - Moving Left (Outlined Text) */}
            <motion.div 
                className="flex whitespace-nowrap w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center whitespace-nowrap gap-8 pr-8">
                        {row1.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-8">
                                <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-transparent uppercase select-none transition-all duration-500 hover:text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
                                    {item.text}
                                </h1>
                                <div className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Image src={item.icon} alt={item.text} fill className={`object-contain ${item.invert ? 'invert' : ''}`} unoptimized />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>

            {/* Row 2 - Moving Right (Solid Text) */}
            <motion.div 
                className="flex whitespace-nowrap w-max items-center"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center whitespace-nowrap gap-8 pr-8">
                        {row2.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-8">
                                <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-white uppercase select-none opacity-90">
                                    {item.text}
                                </h1>
                                <div className="relative w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <Image src={item.icon} alt={item.text} fill className={`object-contain ${item.invert ? 'invert' : ''}`} unoptimized />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
