"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { GitHubIcon } from "./Icons";
import type { Project } from "@/lib/data/projects";
import styles from "./WorkCard.module.css";

export function WorkCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal<HTMLElement>();
  const copy = t.projects[project.id];

  return (
    <article
      ref={ref}
      className={`${styles.card} reveal ${isVisible ? "isVisible" : ""}`}
    >
      {project.placeholder ? (
        <div className={styles.mediaType}>
          <span aria-hidden="true">{project.title.charAt(0)}</span>
        </div>
      ) : (
        <div className={styles.media}>
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={525}
            />
          )}
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3>{project.title}</h3>
          {"chip" in copy && <span className={styles.chip}>{copy.chip}</span>}
        </div>

        <p>{copy.desc}</p>

        {project.tags && (
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {project.links && (
          <div className={styles.links}>
            {project.links.visit && (
              <a
                href={project.links.visit}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkArrow}
              >
                <span>{t.work.visit}</span>
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkArrow}
              >
                <GitHubIcon />
                <span>{t.work.repo}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
