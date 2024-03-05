import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  zIndex?: number;

  children: ReactNode;
  backgroundColor?: string;

  /**
   * @description 0 ~ 1
   */
  backgroundOpacity?: number;
}

export default function Modal({
  zIndex = 2,
  children,
  backgroundColor = "black",
  backgroundOpacity = 0.5,
}: ModalProps) {
  const containerInlineStyle = {
    zIndex,
    backgroundColor,
    opacity: backgroundOpacity,
  };

  const innerInlineStyle = {
    zIndex: zIndex + 1,
  };

  return (
    <>
      <div style={containerInlineStyle} className={styles.container}></div>
      <div style={innerInlineStyle} className={styles.modal__children}>
        {children}
      </div>
    </>
  );
}
