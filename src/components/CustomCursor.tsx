"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const pointerFine = window.matchMedia("(pointer: fine)").matches;
        const hoverSupported = window.matchMedia("(hover: hover)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const shouldEnable = pointerFine && hoverSupported && !prefersReducedMotion;

        if (!shouldEnable) {
            setEnabled(false);
            return;
        }

        setEnabled(true);
        document.body.classList.add("hide-cursor");

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            const target = e.target as HTMLElement;
            const customCursorEl = target.closest('[data-cursor]') as HTMLElement;

            if (customCursorEl) {
                setCursorText(customCursorEl.getAttribute("data-cursor") || "");
                setIsPointer(true);
            } else {
                setCursorText("");
                const isClickable = target.closest("a, button, input, select, textarea, [role='button'], .cursor-pointer");
                setIsPointer(!!isClickable);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.body.classList.remove("hide-cursor");
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [isVisible]);

    if (!enabled) {
        return null;
    }

    return (
        <div
            className={`fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{
                transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`,
                width: cursorText ? "80px" : isPointer ? "50px" : "16px",
                height: cursorText ? "80px" : isPointer ? "50px" : "16px",
                transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.1s linear",
            }}
        >
            <div
                className={`absolute inset-0 bg-white rounded-full transition-all duration-300 ease-out`}
            />

            <span className={`relative text-black text-[10px] font-bold tracking-widest uppercase transition-opacity duration-300 ${cursorText ? "opacity-100 delay-100" : "opacity-0"}`}>
                {cursorText}
            </span>
        </div>
    );
}
