"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";
import styles from "./BackToTop.module.css";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 700);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      title="Back to Top"
      aria-label="Back to top"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
    >
      <ArrowUpIcon />
    </a>
  );
}
