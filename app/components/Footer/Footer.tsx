import styles from "./footer.module.css";
import Contact from "../Contact/Contact";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
      <div className={styles.contact_start}>
          <Contact />
        </div>
        <div className={styles.logo}>
          <Logo/>
          <h3 className={styles.logo_text}>М Е Б Л І</h3>
        </div>
        <div className={styles.contact_end}>
          <Contact />
        </div>
      </div>
    </footer>
  );
}
