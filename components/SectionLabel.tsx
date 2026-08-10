import type { ReactNode } from "react";
import styles from "./SectionLabel.module.css";

export function SectionLabel({ num, children }: { num: string; children: ReactNode }) {
  return (
    <p className={styles.label}>
      <span className={styles.num}>{num}</span>
      <span>{children}</span>
    </p>
  );
}
