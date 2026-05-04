import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), "src", "data", "projects.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const projects = JSON.parse(fileData);
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Failed to read projects.json:", error);
        return NextResponse.json({ error: "Unable to load projects." }, { status: 500 });
    }
}
