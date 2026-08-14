"use client";

import { useReveal } from "@/lib/useReveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <footer ref={ref} className={`${styles.footer} reveal ${isVisible ? "isVisible" : ""}`}>
      <div className={`container ${styles.row}`}>
        <p className={styles.copy}>&copy; {year} Soledad Roa</p>

        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/soleroa"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/soledadroa"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="mailto:msoleroa@gmail.com" title="Email" aria-label="Email">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
