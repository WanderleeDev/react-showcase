import { NextResponse, NextRequest } from "next/server";
import { projects } from "@/data/projects";
import { ProjectIntro } from "@/app/shared/interfaces/Project.interface";

export async function GET() {
  const listProjects: ProjectIntro[] = projects.map(({ title, cover, id }) => ({
    title,
    cover,
    id,
  }));
  return NextResponse.json(listProjects, { status: 200 });
}
