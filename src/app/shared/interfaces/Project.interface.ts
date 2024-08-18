export interface Project {
  id: string;
  title: string;
  cover: string;
  video?: string;
  description: string;
  technologies: Array<string>;
  extraTools: Array<string | never>;
  deploy: Deploy;
  metaTag: string[];
  status: ProjectStatus;
}

export interface Deploy {
  repository: string;
  path: string;
  platform: string;
  icon: string;
}

export interface DataLink {
  name: string;
  repositoryLink: string;
  demoLink: string;
}

export type ProjectStatus = "completed" | "in-progress" | "features";

export interface ProjectIntro extends Pick<Project, "id" | "title" | "cover"> {}
