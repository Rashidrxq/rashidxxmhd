"use server";

import { getProjects, saveProjects } from "@/lib/projectsStorage";

export async function deleteProject(id: string) {
    try {
        if (!id) {
            throw new Error("Project id is required for deletion.");
        }

        const projectsArray = await getProjects();
        const filteredProjects = projectsArray.filter((project) => project.id !== id);

        if (filteredProjects.length === projectsArray.length) {
            throw new Error("Project not found for deletion.");
        }

        await saveProjects(filteredProjects, `Delete project ${id}`);
        return { success: true };
    } catch (error) {
        console.error("Failed to delete project:", error);
        return { success: false, error: "Failed to delete project. Ensure storage is configured." };
    }
}
