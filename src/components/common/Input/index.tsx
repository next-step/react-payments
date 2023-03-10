import React, { InputHTMLAttributes, ReactNode } from "react";

import { Label } from "..";
import { InputContainer, InputEl, InputWrapper } from "./input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textAlign?: "left" | "center" | "right";
  variant?: "outlined" | "underlined";
  color?: string;
  error?: string;
  label?: ReactNode;
}

export default function Input({
  textAlign = "left",
  variant = "outlined",
  color = "#04C09E",
  error,
  label,
  className,
  ...props
}: InputProps) {
  return (
    <InputContainer className={className}>
      {label && <Label>{label}</Label>}
      <InputWrapper variant={variant}>
        <InputEl textAlign={textAlign} color={color} {...props} />
      </InputWrapper>
      {error && <Label isError>{error}</Label>}
    </InputContainer>
  );
}
