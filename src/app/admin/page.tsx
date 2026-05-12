"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { addProject } from "@/app/actions/addProject";
import { updateProject } from "@/app/actions/updateProject";
import { deleteProject } from "@/app/actions/deleteProject";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    role: string;
    techStack: string[];
    challenge: string;
    solution: string;
    gallery: string[];
};

type FormValues = {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    role: string;
    techStack: string;
    challenge: string;
    solution: string;
    gallery: string;
};

const emptyFormValues: FormValues = {
    id: "",
    title: "",
    category: "",
    description: "",
    image: "",
    year: "",
    role: "",
    techStack: "",
    challenge: "",
    solution: "",
    gallery: "",
};

export default function AdminDashboard() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [formValues, setFormValues] = useState<FormValues>(emptyFormValues);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        try {
            const response = await fetch("/api/projects", { cache: "no-store" });
            if (!response.ok) {
                throw new Error("Failed to load projects");
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error("Unable to fetch projects:", error);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");

        try {
            const formData = new FormData(e.currentTarget);
            const result = isEditing && editingId
                ? await updateProject(formData)
                : await addProject(formData);

            if (result.success) {
                setStatus("success");
                setFormValues(emptyFormValues);
                setIsEditing(false);
                setEditingId(null);
                await fetchProjects();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    }

    function handleEditProject(project: Project) {
        setFormValues({
            id: project.id,
            title: project.title,
            category: project.category,
            description: project.description,
            image: project.image,
            year: project.year,
            role: project.role,
            techStack: project.techStack.join(", "),
            challenge: project.challenge,
            solution: project.solution,
            gallery: project.gallery.join(", "),
        });
        setIsEditing(true);
        setEditingId(project.id);
        setStatus("idle");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    async function handleDeleteProject(id: string) {
        if (!window.confirm("Delete this project permanently?")) {
            return;
        }

        setIsLoading(true);
        setStatus("idle");

        try {
            const result = await deleteProject(id);
            if (result.success) {
                setStatus("success");
                if (editingId === id) {
                    setIsEditing(false);
                    setEditingId(null);
                    setFormValues(emptyFormValues);
                }
                await fetchProjects();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setIsLoading(false);
        }
    }

    function handleCancelEdit() {
        setIsEditing(false);
        setEditingId(null);
        setFormValues(emptyFormValues);
        setStatus("idle");
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
                    <p className="text-gray-400 font-medium tracking-wide">Inject new case studies securely into the project storage layer. In production, changes are persisted through GitHub-backed storage when configured.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <input type="hidden" name="originalId" value={editingId ?? ""} />

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
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Unique ID (Slug)</label>
                            <input
                                required
                                name="id"
                                type="text"
                                value={formValues.id}
                                onChange={handleChange}
                                placeholder="e.g. quantum-os"
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Project Title</label>
                            <input
                                required
                                name="title"
                                type="text"
                                value={formValues.title}
                                onChange={handleChange}
                                placeholder="Quantum OS"
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Category / Type</label>
                            <input
                                required
                                name="category"
                                type="text"
                                value={formValues.category}
                                onChange={handleChange}
                                placeholder="Operating System"
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Completion Year</label>
                            <input
                                required
                                name="year"
                                type="text"
                                value={formValues.year}
                                onChange={handleChange}
                                placeholder="2025"
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Your Role</label>
                            <input
                                required
                                name="role"
                                type="text"
                                value={formValues.role}
                                onChange={handleChange}
                                placeholder="Lead Architect"
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Cover Image URL</label>
                            <input
                                required
                                name="image"
                                type="url"
                                value={formValues.image}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Tech Stack (Comma Separated)</label>
                        <input
                            required
                            name="techStack"
                            type="text"
                            value={formValues.techStack}
                            onChange={handleChange}
                            placeholder="React, Python, AWS, WebGL"
                            className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Short Summary</label>
                        <textarea
                            required
                            name="description"
                            rows={3}
                            value={formValues.description}
                            onChange={handleChange}
                            placeholder="A brief 1-2 sentence overview for the cards..."
                            className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">The Challenge (Case Study)</label>
                        <textarea
                            required
                            name="challenge"
                            rows={4}
                            value={formValues.challenge}
                            onChange={handleChange}
                            placeholder="Describe the problem you solved..."
                            className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">The Solution (Case Study)</label>
                        <textarea
                            required
                            name="solution"
                            rows={4}
                            value={formValues.solution}
                            onChange={handleChange}
                            placeholder="Describe how you engineered the solution..."
                            className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Gallery Image URLs (Comma Separated)</label>
                        <textarea
                            required
                            name="gallery"
                            rows={4}
                            value={formValues.gallery}
                            onChange={handleChange}
                            placeholder="https://..., https://..."
                            className="w-full bg-[#111] border border-white/10 px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                        />
                    </div>

                    <button disabled={isLoading} type="submit" className="mt-8 px-10 py-6 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase disabled:opacity-50">
                        {isLoading ? "Writing to Database..." : isEditing ? "Update Portfolio Project" : "Deploy to Portfolio"}
                    </button>
                </form>

                <section className="mt-20">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-green-500">Project Management</p>
                            <h2 className="text-4xl font-bold tracking-tighter">Edit or delete any existing case study.</h2>
                        </div>
                        {isEditing && (
                            <button type="button" onClick={handleCancelEdit} className="px-6 py-3 border border-white/10 text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors">
                                Cancel edit
                            </button>
                        )}
                    </div>

                    {projects.length === 0 ? (
                        <div className="rounded-sm border border-white/10 bg-[#111] p-8 text-gray-400">No projects found yet.</div>
                    ) : (
                        <div className="grid gap-6">
                            {projects.map((project) => (
                                <div key={project.id} className="rounded-sm border border-white/10 bg-[#111] p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-green-500">{project.category}</span>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">{project.year}</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.description}</p>
                                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                                            <span>{project.id}</span>
                                            <span>{project.role}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            type="button"
                                            onClick={() => handleEditProject(project)}
                                            className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteProject(project.id)}
                                            className="px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500/10 transition-colors text-xs font-bold uppercase tracking-[0.2em]"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}
