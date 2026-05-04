"use server";

import fs from "fs";
import path from "path";

export async function deleteProject(id: string) {
    try {
        if (!id) {
            throw new Error("Project id is required for deletion.");
        }

        const filePath = path.join(process.cwd(), "src", "data", "projects.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const projectsArray = JSON.parse(fileData);

        const filteredProjects = projectsArray.filter((project: any) => project.id !== id);
        if (filteredProjects.length === projectsArray.length) {
            throw new Error("Project not found for deletion.");
        }

        fs.writeFileSync(filePath, JSON.stringify(filteredProjects, null, 4));
        return { success: true };
    } catch (error) {
        console.error("Failed to delete project:", error);
        return { success: false, error: "Failed to delete project. Ensure local filesystem permissions." };
    }
}
