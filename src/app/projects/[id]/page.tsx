import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import Contact from "@/components/Contact";
import Image from "next/image";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProjectCaseStudy(props: Props) {
    // Next.js 14+ requires awaiting dynamic params
    const params = await props.params;

    const project = projects.find(p => p.id === params.id);

    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-[#111] text-white selection:bg-white selection:text-black pt-32">
            
            {/* Top Minimal Header */}
            <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-50 mix-blend-difference">
                <Link href="/" className="text-xl md:text-2xl font-medium tracking-tight hover:opacity-75 transition-opacity">
                    Rashid
                </Link>
                <Link href="/" className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase hover:opacity-75 transition-opacity group">
                    {/* Back arrow */}
                    <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-500 group-hover:-translate-x-1"
                    >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>Back to Projects</span>
                </Link>
            </header>

            {/* Case Study Header Content */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 pt-16 md:pt-32 pb-16">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-end justify-between border-b border-white/10 pb-16">
                    
                    <div className="w-full md:w-3/5">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.05] text-balance">
                            {project.title}
                        </h1>
                    </div>

                    <div className="w-full md:w-2/5 flex flex-col gap-10">
                        <div className="grid grid-cols-2 gap-8 text-sm md:text-base text-gray-400 font-medium">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">Role</span>
                                <span className="text-white">{project.role}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">Year</span>
                                <span className="text-white">{project.year}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-4 py-2 rounded-full border border-white/20 text-xs text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cover Image */}
            <section className="w-full px-6 md:px-16 pb-32">
                <div className="w-full aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                </div>
            </section>

            {/* Documentation Core */}
            <section className="max-w-5xl mx-auto px-6 md:px-16 pb-32 flex flex-col gap-24">
                
                {/* Challenge */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                    <span className="w-full md:w-1/4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 relative">
                        ◆ The Challenge
                    </span>
                    <p className="w-full md:w-3/4 text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] text-balance">
                        {project.challenge}
                    </p>
                </div>

                {/* Solution */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                    <span className="w-full md:w-1/4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 relative">
                        ◆ The Solution
                    </span>
                    <p className="w-full md:w-3/4 text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.4] text-gray-400 text-balance">
                        {project.solution}
                    </p>
                </div>

            </section>

            {/* Extensive Gallery */}
            <section className="w-full px-6 md:px-16 pb-48 flex flex-col gap-10">
                {project.gallery.map((img, idx) => (
                    <div key={idx} className="w-full aspect-video relative rounded-3xl overflow-hidden border border-white/5">
                        <Image src={img} alt={`${project.title} Screen ${idx + 1}`} fill className="object-cover" />
                    </div>
                ))}
            </section>

            <Contact />
        </main>
    );
}
