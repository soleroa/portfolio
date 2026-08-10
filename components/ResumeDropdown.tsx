"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./ResumeDropdown.module.css";

const RESUME_LINKS = {
  english: "https://drive.google.com/file/d/1h7KR-HdNBR3lF0k7brDs-rFa1zgLcE8t/view?usp=sharing",
  spanish: "https://drive.google.com/file/d/1QC9VC8tcvpPQ6U4zlU38PbGlPEih1ZQK/view?usp=sharing",
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
