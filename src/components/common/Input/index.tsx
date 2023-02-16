import React, { ReactNode, InputHTMLAttributes } from "react";

import {
  InputEl,
  InputWrapper,
  InputLabel,
  InputContainer,
} from "./input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: "left" | "center" | "right";
  variant?: "outlined" | "underlined";
  color?: string;
  label?: ReactNode;
}

export default function Input({
  textAlign = "left",
  variant = "outlined",
  color = "#04C09E",
  label,
  className,
  ...props
}: InputProps) {
  return (
    <InputContainer className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper variant={variant}>
        <InputEl textAlign={textAlign} color={color} {...props} />
      </InputWrapper>
    </InputContainer>
  );
}
