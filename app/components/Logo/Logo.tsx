import styles from "./logo.module.css";
import Image from "next/image";
import Logos from "../../../public/logo.png";

export default function Logo() {

  return (      
        <div className={styles.logo}>
          <Image src={Logos} alt="#" width={0} priority={true} className={styles.icon_out} />
          <p className={styles.logo_letter}>A</p>
          </div>   
  );
}
