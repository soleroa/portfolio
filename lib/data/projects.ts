import type { ProjectId } from "@/lib/i18n/translations";

export type Project = {
  id: ProjectId;
  title: string;
  image?: string;
  tags?: string[];
  links?: {
    visit?: string;
    repo?: string;
  };
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "movie-review-classifier",
    title: "Movie Review Classifier",
    placeholder: true,
    tags: ["Python", "PyTorch", "Transformers", "DistilBERT"],
    links: {
      repo: "https://github.com/soleroa/movie-review-classifier",
    },
  },
  {
    id: "landcap",
    title: "Landcap",
    placeholder: true,
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "OpenAI GPT-4.1",
    ],
  },
];
