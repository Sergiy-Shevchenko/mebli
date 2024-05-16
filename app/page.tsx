"use client";

import styles from "./page.module.css";

import Hero from "./components/Hero/Hero";
import Servise from "./components/Servise/Servise";
import Advantages from "./components/Advantages/Advantages";
import Materials from "./components/Materials/Materials";
import { Modal } from "./components/Modal/Modal";
import Contact from "./components/Contact/Contact";
import { useState } from "react";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Hero isOpen={handleOpenModal} />
      <Servise />
      <Advantages />
      <Materials />
      {isOpenModal && (
        <Modal isVisible={isOpenModal} onClose={handleOpenModal}>
          <Contact />
        </Modal>
      )}
    </>
  );
}
