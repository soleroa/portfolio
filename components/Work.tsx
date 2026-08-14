"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { SectionLabel } from "./SectionLabel";
import { WorkCard } from "./WorkCard";
import { projects } from "@/lib/data/projects";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="work">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "isVisible" : ""}`}>
          <SectionLabel num="02">{t.work.label}</SectionLabel>
          <h2>{t.work.heading}</h2>
        </div>

        <div className={styles.list}>
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
