"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useReveal } from "@/lib/useReveal";
import { SectionLabel } from "./SectionLabel";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className={styles.section}>
      <div
        ref={ref}
        className={`container reveal ${isVisible ? "isVisible" : ""}`}
      >
        <SectionLabel num="03">{t.contact.label}</SectionLabel>
        <h2>{t.contact.heading}</h2>

        <div className={styles.grid}>
          <p className={styles.body}>{t.contact.body}</p>
          <a href="mailto:msoleroa@gmail.com" className={styles.email}>
            msoleroa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
