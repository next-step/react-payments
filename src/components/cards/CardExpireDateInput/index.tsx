import React, { InputHTMLAttributes } from "react";

import { CardExpireDateInputEl } from "./cardExpireDateInput.style";

export default function CardExpireDateInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <CardExpireDateInputEl
      label="만료일"
      textAlign="center"
      placeholder="MM / YY"
      {...props}
    />
  );
}
