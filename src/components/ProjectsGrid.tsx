"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Project {
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
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-24 md:gap-y-48">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            delay: (index % 2) * 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`group flex flex-col ${index % 2 !== 0 ? "md:mt-32" : ""}`}
        >
          <Link
            href={`/projects/${project.id}`}
            className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-8 cursor-pointer"
            data-cursor="VIEW"
          >
            <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            <Image
              fill
              src={project.image}
              alt={`${project.title} - ${project.category} project`}
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                {project.title}
              </h2>
            </div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 pb-1">
              {project.year}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
