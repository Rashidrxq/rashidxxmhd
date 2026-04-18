"use client";

import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("D$#@!G+B!@#D+S$@!E");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Stage 1: Initial scrambled text -> Semi-decoded
    const t1 = setTimeout(() => {
      setText("D$#@!G.B!@#D.S$@!E");
    }, 800);

    // Stage 2: Semi-decoded -> Completely decoded
    const t2 = setTimeout(() => {
      setText("DESIGN. BUILD. SCALE.");
    }, 1600);

    // Stage 3: Start fade out
    const t3 = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    // Stage 4: Unmount component
    const t4 = setTimeout(() => {
      onComplete();
    }, 3100); // 700ms for fade out transition

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <h1
        className="text-sm md:text-base lg:text-lg font-bold tracking-[0.2em] text-black text-center px-4"
        style={{ fontFamily: "'Petrov Sans', sans-serif" }}
      >
        {text}
      </h1>
    </div>
  );
}
