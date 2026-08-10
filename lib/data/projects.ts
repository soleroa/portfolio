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
    id: "order-summary",
    title: "Order Summary Component",
    image: "/images/ordersummary.png",
    tags: ["HTML", "SCSS", "JavaScript", "Parcel"],
    links: {
      visit: "https://order-summary-component-main-blue.vercel.app/",
      repo: "https://github.com/soleroa/order-summary-component-main",
    },
  },
  {
    id: "landcap",
    title: "Landcap",
    placeholder: true,
  },
];
