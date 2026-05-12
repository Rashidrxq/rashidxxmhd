import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getProjects } from "@/lib/projectsStorage";

// Server-side metadata generation for SEO
export const metadata: Metadata = {
  title: "All Projects | Portfolio",
  description:
    "Explore all the case studies and projects built by Muhammed Rashid P P. Machine learning, full-stack development, and EdTech platforms.",
  keywords: [
    "projects",
    "case studies",
    "portfolio work",
    "web development",
    "machine learning",
  ],
  openGraph: {
    title: "All Projects | Muhammed Rashid Portfolio",
    description: "View complete portfolio of projects and case studies",
    url: "https://rashidxxmhd.vercel.app/projects",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Rashid Projects",
      },
    ],
  },
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black pt-32 pb-48 px-6 md:px-12">
            {/* Header Section */}
            <header className="max-w-[1400px] mx-auto mb-24 md:mb-40">
                <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-8">
                    <span className="text-[8px]">◆</span>
                    <span>Project Archive</span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none">
                    All Work.
                </h1>
            </header>

            {/* Projects Grid with Client-side Animations */}
            <ProjectsGrid projects={projects} />

            {/* Back Home Button */}
            <div className="max-w-[1400px] mx-auto mt-40 md:mt-60 flex justify-center">
                <Link href="/" className="group px-10 py-6 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1">
                        <path d="m12 19 7-7-7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
