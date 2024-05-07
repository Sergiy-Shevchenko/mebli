import Image from 'next/image';
import Logo from '../../../public/klipartz.png'
import styles from './footer.module.css'
import Contact from '../Contact/Contact';

export default function Footer() {

   
    return (
      <footer id='footer' className={styles.section} >
        <div className={styles.container}>
          <div className={styles.logo}>
          <Image src={Logo} alt="#" width={300} className={styles.icon_out}/>
          <p className={styles.logo_letter}>A</p>
          <h3 className={styles.logo_text}>М Е Б Л І</h3>
  
          </div>
        
          <div className={styles.contact}>
            {/* <h3 className={styles.text}>Втілимо Ваші мрії в практичну реальність</h3> */}
          <Contact/>
          </div>
        </div>
      </footer>
    );
  }
  