"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SectionLabel } from "./SectionLabel";
import { WorkCard } from "./WorkCard";
import { projects } from "@/lib/data/projects";
import styles from "./Work.module.css";

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work">
      <div className="container">
        <SectionLabel num="02">{t.work.label}</SectionLabel>
        <h2>{t.work.heading}</h2>

        <div className={styles.list}>
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
