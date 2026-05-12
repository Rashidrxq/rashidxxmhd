"use server";

import { getProjects, saveProjects, type Project } from "@/lib/projectsStorage";

export async function addProject(formData: FormData) {
    try {
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

        const newProject: Project = {
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

        const projectsArray = await getProjects();
        projectsArray.push(newProject);
        await saveProjects(projectsArray, `Add project ${title}`);

        return { success: true };
    } catch (error) {
        console.error("Failed to append project to DB:", error);
        return { success: false, error: "Failed to save project. Ensure storage is configured." };
    }
}
