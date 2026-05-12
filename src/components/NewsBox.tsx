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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-auto max-w-[280px] rounded-3xl border border-white/10 bg-[#0f0f0f]/95 p-4 text-xs text-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.3em] text-gray-400">News</p>
          <ul className="space-y-2 text-[0.78rem] leading-5 text-gray-100">
            <li>👋 Building my portfolio and UX-first interfaces.</li>
            <li>💡 Currently exploring animation, motion design, and API-driven projects.</li>
            <li>🚀 Open to collaboration on React/Next.js builds.</li>
          </ul>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close news panel"
          >
            ×
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}
