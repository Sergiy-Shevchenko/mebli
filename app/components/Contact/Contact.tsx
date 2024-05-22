import Image from "next/image";
import Contacts from "./contact.json";

import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.section}>
      <div className={styles.contacts_container}>
        <ul className={styles.contact_list}>
          {Contacts.map((el) => (
            <li key={el.id} className={styles.contact_item}>
              <Link href={el.url}>
                <Image
                  src={el.img}
                  alt="icon"
                  width={42}
                  height={42}
                  className={styles.img}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
