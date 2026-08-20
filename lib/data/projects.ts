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
    id: "cinematch",
    title: "CineMatch",
    placeholder: true,
    tags: ["Python", "FastAPI", "React", "Groq", "ReAct", "Hugging Face"],
    links: {
      repo: "https://github.com/soleroa/CineMatch",
    },
  },
  {
    id: "landcap",
    title: "Landcap",
    image: "/images/landcap.png",
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
    links: {
      visit: "https://landcap.dev",
    },
  },
  {
    id: "movie-review-classifier",
    title: "Movie Review Classifier",
    placeholder: true,
    tags: ["Python", "PyTorch", "Transformers", "DistilBERT"],
    links: {
      repo: "https://github.com/soleroa/movie-review-classifier",
    },
  },
];

export const freelanceProjects: Project[] = [
  {
    id: "riovista",
    title: "Río Vista Inmobiliaria",
    image: "/images/riovista.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Strapi", "PostgreSQL", "Docker"],
    links: {
      visit: "https://riovista.com.ar",
    },
  },
];
