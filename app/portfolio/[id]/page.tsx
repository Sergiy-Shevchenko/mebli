"use client";

import Slide from "@/app/components/Swiper/Swiper";
import Posts from "../portfol.json";
import Image from "next/image";

import styles from "./page.module.css";

function getData(id: string) {
  let idNum = Number(`${id}`);
  let postEl = Posts.find((post) => post.id === idNum);

  return postEl;
}

type Props = {
  params: {
    id: string;
  };
};

export default function Card({ params: { id } }: Props) {
  const el = getData(id);

  return (
    <div className={styles.container}>
      <h4>{el?.title}</h4>
      <Slide slides={el?.images} />
      <span className={styles.text_containet}>
      <p className={styles.material}>Матеріали: {el?.material}</p>
      <p className={styles.furniture}>Фурнітура: {el?.furniture}</p>
      <p className={styles.description}>Опис: {el?.description}</p>

      </span>
      
    </div>
  );
}
