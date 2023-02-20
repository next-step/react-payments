import React, { InputHTMLAttributes } from "react";

import * as S from "./cardCvcInput";

export default function CardCvcInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.CardCvcInput
      label="보안 코드(CVC/CVV)"
      textAlign="center"
      type="password"
      {...props}
    />
  );
}
