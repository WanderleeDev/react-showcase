import { NextResponse, NextRequest } from "next/server";
import { projects } from "@/data/projects";

interface Context {
  params: {
    projectId: string | null;
  };
}

export async function GET(_req: NextRequest, context: Context) {
  const {
    params: { projectId },
  } = context;

  if (!projectId) {
    return NextResponse.json("Missing projectId", { status: 400 });
  }

  const projectSelected = projects.find(({ id }) => id === projectId);

  if (!projectSelected) {
    return NextResponse.json("Project not found", { status: 404 });
  }

  return NextResponse.json(projectSelected, { status: 200 });
}
