import Card from "../components/CardList/CardList";

import { Metadata } from "next";
import Posts from './portfol.json'
import Link from "next/link";

// console.log(Posts);

export const metadata: Metadata = {
    title:"Наші роботи",
    description: "Кухня, шафа, меблі на замовлення, Київ, Голосіївський, передмістя",
}

export default function Portfolio() {
    return (
    <div>
      <h2>Наші роботи</h2>
      <ul>
        {Posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/portfolio/${post.id}`}>{post.title}</Link>
                </li>
        ))}
      </ul>
     
      </div>
    );
  }