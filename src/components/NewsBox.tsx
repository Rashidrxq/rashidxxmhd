"use client";
import { motion } from "framer-motion";

type NewsBoxProps = {
  visible: boolean;
  onClose?: () => void;
};

export default function NewsBox({ visible, onClose }: NewsBoxProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 18, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="pointer-events-auto w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/95 via-[#080808]/95 to-[#0f0f0f]/95 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
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

      <div className="mt-5 space-y-4 text-[0.82rem] leading-6 text-slate-200">
        <article className="rounded-3xl border border-white/5 bg-white/5 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">This week</p>
          <h3 className="text-sm font-semibold text-white">Crafting motion-driven interfaces</h3>
          <p className="mt-2 text-slate-300">Experimenting with elegant transitions that feel as polished as a product launch — from hover states to page journeys.</p>
        </article>

        <article className="rounded-3xl border border-white/5 bg-white/5 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">Now</p>
          <h3 className="text-sm font-semibold text-white">Building digital storytelling</h3>
          <p className="mt-2 text-slate-300">Sharing updates on creative experiments, projects and collaborations that bring product stories to life.</p>
        </article>

        <article className="rounded-3xl border border-white/5 bg-white/5 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">Next</p>
          <h3 className="text-sm font-semibold text-white">Launching a refined portfolio update</h3>
          <p className="mt-2 text-slate-300">Preparing a premium showcase of recent work with immersive visuals and faster, smoother interactions.</p>
        </article>
      </div>
    </motion.div>
  );
}
