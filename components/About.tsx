"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { SectionLabel } from "./SectionLabel";
import { ResumeDropdown } from "./ResumeDropdown";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`reveal ${isVisible ? "isVisible" : ""}`}>
      <div className="container">
        <SectionLabel num="01">{t.about.label}</SectionLabel>
        <h2>{t.about.heading}</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            {t.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <ResumeDropdown />
          </div>

          <div className={styles.photoFrame}>
            <Image
              src="/images/3881472c-22ef-4c6d-9dec-2a6ae1685103.jpg"
              alt="Portrait of Soledad Roa"
              fill
              sizes="(max-width: 860px) 320px, 40vw"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
