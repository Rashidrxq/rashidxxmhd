"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

export default function SplitText({ text, className = "", delay = 0, stagger = 0.02 }: SplitTextProps) {
    const words = text.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay },
        },
    };

    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: "100%",
            rotate: 2
        },
        visible: {
            opacity: 1,
            y: "0%",
            rotate: 0,
            transition: {
                ease: [0.16, 1, 0.3, 1],
                duration: 0.8,
            },
        },
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "inline-flex", overflow: "hidden", paddingRight: "0.25em" }}>
                    {word.split("").map((character, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={childVariants}
                            style={{ display: "inline-block", willChange: "transform, opacity" }}
                        >
                            {character}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
}
