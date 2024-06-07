import Image from "next/image";
import Link from "next/link";
import Sample from "./example.json";

import styles from "./servise.module.css";

export default function Servise() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.text}>
          Індивідуальні рішення для кожного клієнта
        </h3>
      </div>
      <div className={styles.servise_container}>
        <ul className={styles.servise_list}>
          {Sample.map((el) => (
            <li key={el.id} className={styles.servise_item}>
              <Link href="/portfolio">
                <Image
                  src={el.url}
                  alt="icon"
                  width={300}
                  height={300}
                  className={styles.img}
                />
                <p className={styles.item_title}>{el.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
