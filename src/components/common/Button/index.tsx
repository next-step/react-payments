import React, { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained";
  color?: string;
  children: ReactNode;
}

export default function Button({
  children,
  variant = "text",
  color = "#94dacd",
  className,
  ...props
}: ButtonProps) {
  return (
    <S.Button className={className} variant={variant} color={color} {...props}>
      {children}
    </S.Button>
  );
}
