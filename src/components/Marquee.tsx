"use client";
import { motion } from "framer-motion";

export default function Marquee() {
    const text = "FULLSTACK • ARTIFICIAL INTELLIGENCE • NEXT.JS • SCALABLE SYSTEMS • ";

    return (
        <section className="relative w-full py-8 md:py-16 bg-[#111111] overflow-hidden flex items-center justify-center border-t border-b border-white/10">
            {/* Dark gradient masks on edges for smooth fading effect */}
            <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

            <motion.div 
                className="flex whitespace-nowrap w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 30 
                }}
            >
                <div className="flex whitespace-nowrap pr-8">
                    <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter text-transparent uppercase select-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>
                        {text}
                    </h1>
                </div>
                <div className="flex whitespace-nowrap pr-8">
                    <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter text-transparent uppercase select-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>
                        {text}
                    </h1>
                </div>
            </motion.div>
        </section>
    );
}
