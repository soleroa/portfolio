"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Nav.module.css";

export function Nav() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.row}`}>
        <a href="#top" className={styles.mark} aria-label="Back to top">
          SR
        </a>

        <ul className={styles.items}>
          <li>
            <a href="#about" className={styles.link}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#work" className={styles.link}>
              {t.nav.work}
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              {t.nav.contact}
            </a>
          </li>
        </ul>

        <div className={styles.langToggle} role="group" aria-label="Language selector">
          <button
            type="button"
            className={`${styles.langBtn} ${lang === "en" ? styles.isActive : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`${styles.langBtn} ${lang === "es" ? styles.isActive : ""}`}
            onClick={() => setLang("es")}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
}
