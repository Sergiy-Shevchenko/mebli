"use client";

import styles from "./hero.module.css";

export interface props {
  isOpen?: any;
}

export default function Hero({ isOpen }: props) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={styles.text_section}>
            <h1 className={styles.title}>Меблі на замовлення</h1>
            <h3 className={styles.text}>
              Втілення Ваших мрій в практичну реальність
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            isOpen();
          }}
          className={styles.button}
        >
          Замовити
        </button>
      </div>
    </div>
  );
}
