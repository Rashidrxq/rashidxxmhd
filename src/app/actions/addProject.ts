"use server";

import fs from "fs";
import path from "path";

export async function addProject(formData: FormData) {
    try {
        const id = formData.get("id") as string;
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const description = formData.get("description") as string;
        const image = formData.get("image") as string;
        const year = formData.get("year") as string;
        const role = formData.get("role") as string;
        
        // Convert comma separated strings to arrays
        const techStackString = formData.get("techStack") as string;
        const techStack = techStackString.split(",").map(s => s.trim()).filter(Boolean);

        const challenge = formData.get("challenge") as string;
        const solution = formData.get("solution") as string;

        const galleryString = formData.get("gallery") as string;
        const gallery = galleryString.split(",").map(s => s.trim()).filter(Boolean);

        // Construct the new project object
        const newProject = {
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
            gallery
        };

        // Locate the JSON DB file
        const filePath = path.join(process.cwd(), "src", "data", "projects.json");
        
        // Read existing array
        const fileData = fs.readFileSync(filePath, "utf-8");
        const projectsArray = JSON.parse(fileData);

        // Append the new object
        projectsArray.push(newProject);

        // Overwrite the file securely
        fs.writeFileSync(filePath, JSON.stringify(projectsArray, null, 4));

        return { success: true };
    } catch (error) {
        console.error("Failed to append project to DB:", error);
        return { success: false, error: "Failed to save project. Ensure local filesystem permissions." };
    }
}
