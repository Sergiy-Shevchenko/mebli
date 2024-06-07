import styles from "./materials.module.css";

export default function Materials() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наша філософія</h2>
        <ul className={styles.servise_list}>
          <li className={styles.servise_item}>
            <p className={styles.item_text}>
              Наш підхід максимально ефективно організує Ваш простір
            </p>
          </li>
          <li className={styles.servise_item}>
            <p className={styles.item_text}>
              Технологічна та якісна фурнітура працюватиме від одного дотику
            </p>
          </li>
          <li className={styles.servise_item}>
            <p className={styles.item_text}>
              Збалансованість матеріалів та відтінків створить відчуття затишку
            </p>
          </li>
          <li className={styles.servise_item}>
            <p className={styles.item_text}>
              Всі сучасні рішення спрямовані на створення практичності і
              елегантності
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
