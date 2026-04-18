"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/app/actions/auth";

export default function Hero() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden font-sans bg-black">
            {/* Background Image & Overlay */}
            <div className={`absolute inset-0 z-0 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "scale-105" : "scale-100"}`}>
                <Image
                    src="https://i.pinimg.com/736x/2e/2e/93/2e2e93eef3e68b0b876169cf709584e1.jpg"
                    alt="Muhammed Rashid P P - Frontend Developer Background"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
            </div>

            {/* Top Header */}
            <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-20 text-white">
                <Link href="/" className="hover:opacity-75 transition-opacity">
                    <Image 
                        src="/logo.png" 
                        alt="Rashid Software Dev" 
                        width={80} 
                        height={80} 
                        className="w-16 h-16 md:w-20 md:h-20 object-contain mix-blend-screen" 
                    />
                </Link>

                <button className={`flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-75 transition-all duration-700 ${isMenuOpen ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M9 10l3-3 3 3" />
                        <path d="M12 7v7a4 4 0 0 0 4 4h1" />
                    </svg>
                    Let&apos;s Talk
                </button>
            </header>

            {/* Main Center Typography */}
            <div className={`relative z-10 flex items-center justify-center w-full h-full px-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "opacity-0 translate-y-12 blur-sm" : "opacity-100 translate-y-0 blur-0"}`}>
                <h1 className="max-w-5xl flex flex-col items-center text-center text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] md:leading-[1.1]">
                    <span className="block text-[10px] md:text-xs text-gray-400 mb-6 md:mb-8 font-bold tracking-[0.3em] uppercase">Muhammed Rashid P P • Frontend Developer</span>
                    <span>Exceptional digital experiences for those who build with vision.</span>
                </h1>
            </div>

            {/* Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "opacity-100 pointer-events-auto backdrop-blur-md bg-black/40" : "opacity-0 pointer-events-none backdrop-blur-none bg-black/0"
                    }`}
            >
                {/* Click outside to close */}
                <div className="absolute inset-0" onClick={() => setIsMenuOpen(false)}></div>

                {/* Modal Container */}
                <div
                    className={`relative w-[90%] max-w-md md:max-w-lg bg-[#111111] p-6 md:p-10 text-white shadow-2xl flex flex-col transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-y-0 scale-100" : "translate-y-32 scale-95"
                        }`}
                >
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 md:mb-8">
                        Menu
                    </div>

                    <nav className="flex flex-col gap-1 md:gap-2 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-10 md:mb-14">
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors w-fit">About</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors w-fit">Collection</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors w-fit">Projects</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors w-fit">Approach</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors w-fit">Contact</a>
                    </nav>

                    <div className="flex justify-between items-end gap-3 text-xs md:text-sm text-gray-300">
                        <div className="flex flex-col gap-1 md:gap-2">
                            <a href="#" className="hover:text-white transition-colors">News</a>
                            <a href="#" className="hover:text-white transition-colors">Showroom</a>
                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-2 font-light">
                            <a href="tel:+919745393044" className="hover:text-white transition-colors">+91 97453 93044</a>
                            <a href="mailto:rashid.mhd.pp@gmail.com" className="hover:text-white transition-colors">rashid.mhd.pp@gmail.com</a>
                        </div>
                    </div>

                    <button className="mt-10 md:mt-12 w-full py-4 bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/5">
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M9 10l3-3 3 3" />
                            <path d="M12 7v7a4 4 0 0 0 4 4h1" />
                        </svg>
                        Get a Quote
                    </button>

                    {/* Close 'X' Button sticking out of the bottom modal on mobile/desktop */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:bottom-[-3rem] w-12 h-12 bg-[#111] border border-white/5 flex items-center justify-center hover:bg-[#222] transition-colors cursor-pointer"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Floating Nav (Bottom middle to top-left on scroll) */}
            <div className={`fixed z-30 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "opacity-0 translate-y-8 pointer-events-none scale-95" : "opacity-100 scale-100"
                } ${isScrolled
                    ? "top-8 left-6 md:left-12 translate-x-0"
                    : "top-[calc(100dvh-6rem)] left-1/2 -translate-x-1/2"
                }`}>
                <div className={`flex items-center bg-[#1a1a1a]/80 backdrop-blur-xl rounded-full border border-white/10 text-white shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isScrolled ? "px-4 py-3 gap-6" : "px-6 py-3.5 gap-10 md:gap-16"
                    }`}>

                    {/* Logo / Icon (Admin Trigger) */}
                    <div 
                        className="flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
                        onClick={() => setIsAdminOpen(true)}
                    >
                        <svg
                            width="22" height="22" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                    </div>

                    {/* Current Page Text (Hidden on scroll) */}
                    <div className={`flex items-center overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "max-w-0 opacity-0" : "max-w-[100px] opacity-100"
                        }`}>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mt-0.5 whitespace-nowrap">
                            Home
                        </span>
                    </div>

                    {/* Hamburger Menu Trigger */}
                    <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-end gap-[5px] group p-1 cursor-pointer">
                        <span className="w-6 h-[1.5px] bg-white block transition-all duration-300 group-hover:w-4"></span>
                        <span className="w-4 h-[1.5px] bg-white block transition-all duration-300 group-hover:w-6"></span>
                    </button>

                </div>
            </div>

            {/* Secret Admin Login Modal */}
            <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isAdminOpen ? "opacity-100 pointer-events-auto backdrop-blur-sm bg-[#050505]/95" : "opacity-0 pointer-events-none backdrop-blur-none bg-black/0"}`}>
                
                {/* Click outside to close */}
                <div className="absolute inset-0" onClick={() => setIsAdminOpen(false)}></div>
                
                {/* Modal Container */}
                <div className={`relative w-[90%] max-w-md bg-[#0a0a0a] border border-white/10 p-10 md:p-14 text-white shadow-2xl flex flex-col transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAdminOpen ? "translate-y-0 scale-100" : "translate-y-24 scale-95"}`}>
                    
                    <div className="flex flex-col gap-2 mb-10 text-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-white mb-2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        </svg>
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight">System Login</h3>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Authorized Personnel Only</span>
                    </div>

                    <form 
                        className="flex flex-col gap-6" 
                        onSubmit={async (e) => { 
                            e.preventDefault(); 
                            const formData = new FormData(e.currentTarget);
                            const res = await login(formData);
                            
                            if (res.success) {
                                setIsAdminOpen(false);
                                router.push("/admin");
                            } else {
                                alert("Invalid Credentials!");
                            }
                        }}
                    >
                        
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Username</label>
                            <input 
                                name="username"
                                type="text" 
                                placeholder="Admin ID" 
                                className="w-full bg-[#111] border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Security Key</label>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="•••••••••" 
                                className="w-full bg-[#111] border border-white/10 px-4 py-4 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>

                        <button type="submit" className="mt-2 w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase">
                            Authenticate
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </form>

                    {/* Close Button */}
                    <button 
                        onClick={() => setIsAdminOpen(false)}
                        className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    );
}