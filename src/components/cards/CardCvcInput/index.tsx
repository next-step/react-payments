import React, { InputHTMLAttributes } from "react";

import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import * as S from "./cardCvcInput";

interface CardCvcInputProps extends InputHTMLAttributes<HTMLInputElement> {
  cardCvc: string;
  error?: string;
}

export default function CardCvcInput({
  cardCvc,
  error,
  ...props
}: CardCvcInputProps) {
  return (
    <S.CardCvcInput
      id="cvc"
      label="보안 코드(CVC/CVV)"
      textAlign="center"
      type="password"
      maxLength={CARD_INPUT_VARIABLES.CVC_NUMBER_MAX_LENGTH}
      value={cardCvc}
      error={error}
      {...props}
    />
  );
}
