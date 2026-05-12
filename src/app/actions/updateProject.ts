"use server";

import { getProjects, saveProjects, type Project } from "@/lib/projectsStorage";

export async function updateProject(formData: FormData) {
    try {
        const originalId = formData.get("originalId") as string;
        const id = formData.get("id") as string;
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const description = formData.get("description") as string;
        const image = formData.get("image") as string;
        const year = formData.get("year") as string;
        const role = formData.get("role") as string;
        const techStackString = formData.get("techStack") as string;
        const techStack = techStackString.split(",").map((s) => s.trim()).filter(Boolean);
        const challenge = formData.get("challenge") as string;
        const solution = formData.get("solution") as string;
        const galleryString = formData.get("gallery") as string;
        const gallery = galleryString.split(",").map((s) => s.trim()).filter(Boolean);

        if (!originalId) {
            throw new Error("Original project id is required for updates.");
        }

        const projectsArray = await getProjects();
        const projectIndex = projectsArray.findIndex((project) => project.id === originalId);
        if (projectIndex === -1) {
            throw new Error("Project not found for update.");
        }

        const updatedProject: Project = {
            id,
            title,
            category,
            description,
            image,
            year,
            role,
            techStack,
            challenge,
            solution,
            gallery,
        };

        projectsArray[projectIndex] = updatedProject;
        await saveProjects(projectsArray, `Update project ${title}`);

        return { success: true };
    } catch (error) {
        console.error("Failed to update project:", error);
        return { success: false, error: "Failed to update project. Ensure storage is configured." };
    }
}
