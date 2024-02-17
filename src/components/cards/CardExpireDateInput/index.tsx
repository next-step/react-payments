import React, { InputHTMLAttributes } from "react";

import { Input, Label } from "@/components/common";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import CardInputDivider from "../CardInputDivider";
import * as S from "./cardExpireDateInput.style";
import type { CardExpireDate } from "./hook/useCardExpireDateInput";

interface CardExpireDateInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  cardExpireDate: CardExpireDate;
  error?: string;
}

export default function CardExpireDateInput({
  cardExpireDate,
  error,
  ...props
}: CardExpireDateInputProps) {
  const { month, year } = cardExpireDate;
  return (
    <S.CardExpireDateInputContainer>
      <Label>만료일</Label>
      <S.CardExpireDateInputWrapper>
        <Input
          id="month"
          className="right-side-none-border-radius"
          textAlign="center"
          placeholder="MM"
          maxLength={CARD_INPUT_VARIABLES.DATE_MAX_LENGTH}
          value={month}
          {...props}
        />
        <CardInputDivider>/</CardInputDivider>
        <Input
          id="year"
          className="left-side-none-border-radius"
          textAlign="center"
          placeholder="YY"
          maxLength={CARD_INPUT_VARIABLES.DATE_MAX_LENGTH}
          value={year}
          {...props}
        />
      </S.CardExpireDateInputWrapper>
      {error && <Label isError>{error}</Label>}
    </S.CardExpireDateInputContainer>
  );
}
