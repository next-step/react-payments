import React, { InputHTMLAttributes } from "react";

import { Input, Label } from "@/components/common";

import CardInputDivider from "../CardInputDivider";
import * as S from "./cardExpireDateInput.style";
import type { CardExpireDate } from "./hook/useCardExpireDateInput";

interface CardExpireDateInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  cardExpireDate: CardExpireDate;
}

export default function CardExpireDateInput({
  cardExpireDate,
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
          value={month}
          {...props}
        />
        <CardInputDivider>/</CardInputDivider>
        <Input
          id="year"
          className="left-side-none-border-radius"
          textAlign="center"
          placeholder="YY"
          value={year}
          {...props}
        />
      </S.CardExpireDateInputWrapper>
    </S.CardExpireDateInputContainer>
  );
}
