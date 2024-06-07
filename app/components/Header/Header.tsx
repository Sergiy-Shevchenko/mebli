"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo/Logo";

import styles from "./header.module.css";

export default function Header() {
  const pahtname = usePathname();

  return (
    <header className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
          <h3 className={styles.logo_text}>М Е Б Л І</h3>
        </div>
        <nav className={styles.navigation}>
          <Link href="/" className={pahtname === "/" ? styles.active : ""}>
            <p className={styles.link_text}>Про нас</p>
          </Link>
          <Link
            href="/portfolio"
            className={pahtname === "/portfolio" ? styles.active : ""}
          >
            <p className={styles.link_text}>Наші роботи</p>
          </Link>
          <Link
            href="/contact"
            className={pahtname === "/contact" ? styles.active : ""}
          >
            <p className={styles.link_text}>Контакти</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
