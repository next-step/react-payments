import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasUnderbar?: boolean;
  textAlign?: "left" | "center" | "right";
}

const style = {
  textAlign: {
    left: styles["input__textalign-left"],
    center: styles["input__textalign-center"],
    right: styles["input__textalign-right"],
  },
};

export default function Input({
  hasUnderbar = true,
  textAlign = "left",
  ...props
}: InputProps) {
  const stylesClassName = `${styles.input} ${
    hasUnderbar && styles.input__underbar
  } ${style.textAlign[textAlign]}`;
  return <input className={stylesClassName} {...props} />;
}
