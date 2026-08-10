"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header id="top" className={styles.hero}>
      <p className={styles.kicker}>{t.hero.kicker}</p>
      <h1 className={styles.name}>Soledad Roa</h1>
      <p className={styles.tagline}>{t.hero.tagline}</p>
      <a href="#contact" className={styles.cta}>
        {t.hero.cta}
      </a>
    </header>
  );
}
