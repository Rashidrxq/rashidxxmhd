import { NextResponse } from "next/server";
import { getProjects } from "@/lib/projectsStorage";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const projects = await getProjects();
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Failed to load projects:", error);
        return NextResponse.json({ error: "Unable to load projects." }, { status: 500 });
    }
}
