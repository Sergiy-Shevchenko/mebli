import { Metadata } from "next";
import Image from "next/image";
import Map from "../../public/Map.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Меблі київ",
};

export default function ContactPage() {
  return (
    <div>
      <div className={styles.container}>
        <Image src={Map} alt="#" width={0} height={0} className={styles.img} />
        <span className={styles.text_box}>
          <p className={styles.text}>Працюємо у місті Києві та передмісті.</p>
          <p className={styles.text}>
            Для отримання консультації зателефонуйте або напишіть нам на
            мессенджер.
          </p>
        </span>
      </div>
    </div>
  );
}
