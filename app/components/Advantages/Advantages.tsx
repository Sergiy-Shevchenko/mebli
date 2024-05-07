
import styles from './advantages.module.css'

export default function Advantages() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Меблеве виробництво в Києві</h3>
        <p className={styles.text}>
          Ми гарантуємо високу якість меблів за цінами виробника
        </p>
        <ul className={styles.servise_list}>
          <li className={styles.servise_item}><p className={styles.item_text}>15 років досвіду в меблевому виробництві</p></li>
          <li className={styles.servise_item}><p className={styles.item_text}>Готівковий та безготівковий розрахунок</p></li>
          <li className={styles.servise_item}><p className={styles.item_text}>Гарантія на меблі 12 місяців</p></li>
          <li className={styles.servise_item}><p className={styles.item_text}>Власне виробництво в межах Києва</p></li>
        </ul>
      </div>
    </div>
  );
}
  