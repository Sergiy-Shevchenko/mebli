/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import Icon from "../../../public/succses.svg";

export interface props {
  children?: React.ReactNode;
  isVisible?: boolean;
  onClose?: any;
  e?: any;
}

const Modal = ({ isVisible, onClose, children }: props) => {
  if (!isVisible) return true;

  useEffect(() => {
    const handleKeyDown = (e: { code: string }) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event: { currentTarget: any; target: any }) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <Image src={Icon} alt="icon" className={styles.svg} />

        <h3 className={styles.modal_title}>
          Зателефонуйте <br />
          або напишіть нам...
        </h3>
        <div className={styles.modal__content}>{children}</div>
        <button
          data-modal-close
          className={styles.button}
          onClick={() => onClose()}
        >
          <p className={styles.button__text}>Ok</p>
        </button>
      </div>
    </div>
  );
};

export { Modal };
