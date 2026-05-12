"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type NewsBoxProps = {
  visible: boolean;
  onClose?: () => void;
};

export default function NewsBox({ visible, onClose }: NewsBoxProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!onClose || !visible) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [onClose, visible]);

  if (!visible) return null;

  return (
    <motion.div
      ref={boxRef}
      drag
      dragMomentum={false}
      dragElastic={0.18}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 18, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="pointer-events-auto max-w-[240px] rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-slate-950/95 via-[#080808]/95 to-[#0f0f0f]/95 p-4 text-xs text-white shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      whileDrag={{ scale: 0.98, boxShadow: "0 45px 120px rgba(0,0,0,0.35)" }}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-400">What’s new</p>
          <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">Studio dispatch</h2>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-lg leading-none"
            aria-label="Close news panel"
          >
            ×
          </button>
        ) : null}
      </div>

      <div className="mt-4 space-y-3 text-[0.82rem] leading-6 text-slate-200">
        <article className="rounded-3xl border border-white/5 bg-white/5 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 mb-1">This week</p>
          <h3 className="text-sm font-semibold text-white">Polishing motion-led storytelling</h3>
          <p className="mt-1 text-slate-300">Experimenting with refined transitions and immersive UI details that feel premium and intuitive.</p>
        </article>

        <article className="rounded-3xl border border-white/5 bg-white/5 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 mb-1">Now</p>
          <h3 className="text-sm font-semibold text-white">Sharpening the portfolio narrative</h3>
          <p className="mt-1 text-slate-300">Highlighting the work in progress and the design decisions behind each creative direction.</p>
        </article>
      </div>
    </motion.div>
  );
}
