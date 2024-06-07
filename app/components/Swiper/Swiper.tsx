import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import styles from "./swiper.module.css";

export interface props {
  slides: any;
}

export default function Slide({ slides }: props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
      {slides.map((el: any) => (
        <SwiperSlide
          key={el.id}
          style={{
            height: "unset",
          }}
        >
          <Image
            src={el.img}
            alt="img"
            width={0}
            height={0}
            priority={true}
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
