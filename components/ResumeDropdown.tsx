"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./ResumeDropdown.module.css";

const RESUME_LINKS = {
  english: "https://docs.google.com/document/d/1dphtK3IzYobIn0FQqylSBg4reekmsXhYZmXuwrapGsc/edit?usp=sharing",
  spanish: "https://docs.google.com/document/d/1Yo_Al0uWiFJAgw58cvujJgyFG9buq0ZDL8hTRB0uAGU/edit?usp=sharing",
};

export function ResumeDropdown() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.dropdown} ref={rootRef}>
      <button
        type="button"
        className={styles.btn}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {t.about.resumeBtn}
      </button>
      {isOpen && (
        <div className={styles.options}>
          <a href={RESUME_LINKS.english} target="_blank" rel="noopener noreferrer">
            {t.about.resumeEnglish}
          </a>
          <a href={RESUME_LINKS.spanish} target="_blank" rel="noopener noreferrer">
            {t.about.resumeSpanish}
          </a>
        </div>
      )}
    </div>
  );
}
