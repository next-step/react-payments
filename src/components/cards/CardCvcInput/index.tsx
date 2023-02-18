import React, { InputHTMLAttributes } from "react";

import { CardCvcInputEl } from "./cardCvcInput";

export default function CardCvcInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <CardCvcInputEl
      label="보안 코드(CVC/CVV)"
      textAlign="center"
      type="password"
      {...props}
    />
  );
}
