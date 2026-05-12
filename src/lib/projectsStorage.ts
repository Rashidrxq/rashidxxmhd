import fs from "fs";
import path from "path";

export interface Project {
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

const localFilePath = path.join(process.cwd(), "src", "data", "projects.json");
const githubRepo = process.env.GITHUB_REPO;
const githubToken = process.env.GITHUB_TOKEN;
const githubBranch = process.env.GITHUB_BRANCH ?? "main";
const githubApiBase = "https://api.github.com";

function isGitHubConfigured() {
  return Boolean(githubRepo && githubToken);
}

function readLocalProjects(): Project[] {
  const fileData = fs.readFileSync(localFilePath, "utf-8");
  return JSON.parse(fileData) as Project[];
}

function writeLocalProjects(projects: Project[]) {
  fs.writeFileSync(localFilePath, JSON.stringify(projects, null, 4));
}

async function fetchGitHubFile() {
  if (!githubRepo || !githubToken) {
    throw new Error("GitHub persistence is not configured. Set GITHUB_REPO and GITHUB_TOKEN.");
  }

  const url = `${githubApiBase}/repos/${githubRepo}/contents/${encodeURIComponent(
    "src/data/projects.json"
  )}?ref=${encodeURIComponent(githubBranch)}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub file fetch failed: ${response.status} ${body}`);
  }

  const data = await response.json();

  if (!data.content || !data.sha) {
    throw new Error("GitHub file response is missing content or sha.");
  }

  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { content, sha: data.sha };
}

async function persistToGitHub(projects: Project[], message: string) {
  const { content: existingContent, sha } = await fetchGitHubFile();
  const newContent = JSON.stringify(projects, null, 4);

  if (existingContent === newContent) {
    return;
  }

  const url = `${githubApiBase}/repos/${githubRepo}/contents/${encodeURIComponent(
    "src/data/projects.json"
  )}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(newContent, "utf-8").toString("base64"),
      sha,
      branch: githubBranch,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub file update failed: ${response.status} ${body}`);
  }
}

export async function getProjects(): Promise<Project[]> {
  if (isGitHubConfigured() && process.env.NODE_ENV === "production") {
    const { content } = await fetchGitHubFile();
    return JSON.parse(content) as Project[];
  }

  return readLocalProjects();
}

export async function getProjectById(id: string) {
  const projects = await getProjects();
  return projects.find((project) => project.id === id) ?? null;
}

export async function saveProjects(projects: Project[], message: string) {
  if (isGitHubConfigured() && process.env.NODE_ENV === "production") {
    await persistToGitHub(projects, message);
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    writeLocalProjects(projects);
    return;
  }

  throw new Error(
    "Persistent storage is not configured for production. Set GITHUB_REPO and GITHUB_TOKEN in your environment."
  );
}
