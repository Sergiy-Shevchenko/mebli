import Image from 'next/image';
import Sample from './example.json'


import styles from "./servise.module.css";

export default function Servise() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.text}>За індивідуальними розмірами</h3>
      </div>
        <div className={styles.servise_container}>
            <ul className={styles.servise_list}>
          {Sample.map((el) => (
            <li key={el.id} className={styles.servise_item}>
              <Image src={el.url} alt='icon' width={300} height={300} className={styles.img}/>
              <p className={styles.item_title}>{el.title}</p>
            </li>
          ))}
        </ul>
        </div>
        
      
    </div>
  );
}
