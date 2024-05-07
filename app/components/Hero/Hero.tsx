import Link from "next/link";


import styles from "./hero.module.css";




export default function Hero() {
  
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text_section}>
        <h1 className={styles.title}>
            Виготовлення меблів на замовлення
          </h1>
          {/* <h3 className={styles.text}>
            Втілення Ваших мрій в практичну реальність
          </h3> */}
        </div>

        <div className={styles.image}>
          {/* <h1 className={styles.title}>
            Виготовлення меблів на замовлення
          </h1> */}
         
          <Link href="#contact" className={styles.link}>
            Замовити
          </Link>
        </div>
        {/* <Image src={Kitchen} alt="#" max-width={1400} className={styles.image}/> */}
      </div>
     </div>
  );
}
  