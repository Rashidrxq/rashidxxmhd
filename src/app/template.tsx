"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* 
                1. The Curtain Reveal 
                A solid dark block that starts fully covering the screen and smoothly shrinks upwards to reveal the new page.
            */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-[#111111] z-[9000] pointer-events-none"
                style={{ transformOrigin: "top" }}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* 
                2. The Content Fade 
                The actual page starts slightly pushed down and fades up into position right after the curtain lifts.
            */}
            <motion.main
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
                {children}
            </motion.main>
        </>
    );
}
