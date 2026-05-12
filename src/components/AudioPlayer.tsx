"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio only on client side to avoid hydration errors
    useEffect(() => {
        audioRef.current = new Audio("/Motivational.mp3");
        audioRef.current.loop = true;
        
        // Try to autoplay, but handle the browser block gracefully
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    setHasInteracted(true);
                })
                .catch(() => {
                    // Autoplay blocked (expected behavior)
                    setIsPlaying(false);
                });
        }

        // Cleanup
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlayback = () => {
        setHasInteracted(true);

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch((error) => {
                            console.error("Audio playback error:", error);
                            setIsPlaying(false);
                        });
                }
            }
        }
    };

    return (
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] flex flex-col items-end gap-4">

            <motion.div 
                className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-opacity duration-500 overflow-hidden ${hasInteracted ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100'}`}
            >
                Start Background Music
            </motion.div>

            <button 
                onClick={togglePlayback}
                className="group relative w-12 h-12 rounded-full border border-white/20 bg-[#111111]/80 backdrop-blur-md flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 shadow-2xl"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <div className="relative w-4 h-4 flex items-center justify-center">
                    {/* Pause Bars (Visible when playing) */}
                    <div className={`absolute inset-0 flex items-center justify-center gap-1 transition-all duration-300 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="w-[3px] h-full bg-white group-hover:bg-black rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                        <div className="w-[3px] h-full bg-white group-hover:bg-black rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.2s]"></div>
                        <div className="w-[3px] h-full bg-white group-hover:bg-black rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.4s]"></div>
                    </div>
                    
                    {/* Play Triangle (Visible when paused) */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${!isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black ml-1">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    );
}
