
import { Metadata } from "next";
import Posts from './portfol.json'
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import defdaultImage from "@/public/free-icon-wood-plane-2884267.png"

export const metadata: Metadata = {
    title:"Наші роботи",
    description: "Кухня, шафа, меблі на замовлення, Київ, Голосіївський, передмістя",
}

export default function Portfolio() {
    return (
    <div>
      {/* <h2>Наші роботи</h2> */}
      <ul className={styles.list}>
        {Posts.map((post: any) => (
            <li key={post.id} className={styles.item}>
              <Link className={styles.link} href={`/portfolio/${post.id}`}>
                <Image className={styles.img} src={post.url ? post.url : defdaultImage} alt="image" width={0} height={0} priority={true}/>
                <p className={styles.title}>{post.title}</p>
                </Link>
                </li>
        ))}
      </ul>     
      </div>
    );
  }