import { HTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonTheme = "outline" | "primary";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  theme?: ButtonTheme;
}

const style = {
  primary: styles.non_outline,
  outline: styles.outline,
};

export default function Button({
  children,
  className,
  disabled,
  theme = "primary",
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <button
      disabled={disabled}
      className={`${style[theme]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
