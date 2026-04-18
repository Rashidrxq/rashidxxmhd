"use client";

import { useState } from "react";
import Link from "next/link";
import { addProject } from "@/app/actions/addProject";

export default function AdminDashboard() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        
        try {
            const formData = new FormData(e.currentTarget);
            const res = await addProject(formData);
            
            if (res.success) {
                setStatus("success");
                e.currentTarget.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black pt-32 pb-32">
            
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="text-xl md:text-2xl font-medium tracking-tight hover:opacity-75 transition-opacity">
                    Rashid
                </Link>
                <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    System Online
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-6 w-full mt-10 md:mt-20">
                <div className="flex flex-col gap-4 mb-20 border-b border-white/10 pb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Command Center</h1>
                    <p className="text-gray-400 font-medium tracking-wide">Inject new case studies securely into the local JSON database. Changes are instantly reflected across the public interface.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    
                    {status === "success" && (
                        <div className="w-full bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-sm font-medium">
                            Project successfully saved to the database. It is now completely live.
                        </div>
                    )}
                    
                    {status === "error" && (
                        <div className="w-full bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-sm font-medium">
                            Failed to save project. Check Node.js filesystem permissions.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* ID */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Unique ID (Slug)</label>
                            <input required name="id" type="text" placeholder="e.g. quantum-os" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                        {/* Title */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Project Title</label>
                            <input required name="title" type="text" placeholder="Quantum OS" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                        {/* Category */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Category / Type</label>
                            <input required name="category" type="text" placeholder="Operating System" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                        {/* Year */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Completion Year</label>
                            <input required name="year" type="text" placeholder="2025" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                        {/* Role */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Your Role</label>
                            <input required name="role" type="text" placeholder="Lead Architect" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                        {/* Main Image */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Cover Image URL</label>
                            <input required name="image" type="url" placeholder="https://..." className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Tech Stack (Comma Separated)</label>
                        <input required name="techStack" type="text" placeholder="React, Python, AWS, WebGL" className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors" />
                    </div>

                    {/* Short Description */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Short Summary</label>
                        <textarea required name="description" rows={3} placeholder="A brief 1-2 sentence overview for the cards..." className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
                    </div>

                    {/* The Challenge */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">The Challenge (Case Study)</label>
                        <textarea required name="challenge" rows={4} placeholder="Describe the problem you solved..." className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
                    </div>

                    {/* The Solution */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">The Solution (Case Study)</label>
                        <textarea required name="solution" rows={4} placeholder="Describe how you engineered the solution..." className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
                    </div>

                    {/* Gallery */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Gallery Image URLs (Comma Separated)</label>
                        <textarea required name="gallery" rows={4} placeholder="https://..., https://..." className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"></textarea>
                    </div>

                    <button disabled={isLoading} type="submit" className="mt-8 px-10 py-6 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase disabled:opacity-50">
                        {isLoading ? "Writing to Database..." : "Deploy to Portfolio"}
                    </button>

                </form>
            </section>
        </main>
    );
}
