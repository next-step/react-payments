import React, { InputHTMLAttributes } from "react";

import { Input, Label } from "@/components/common";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import CardInputDivider from "../CardInputDivider";
import * as S from "./cardNumberInput.style";
import type { CardNumber } from "./hook/useCardNumberInput";

interface CardNumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  cardNumber: CardNumber;
}

export default function CardNumberInput({
  cardNumber,
  ...props
}: CardNumberInputProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  return (
    <S.CardNumberInputContainer>
      <Label>카드번호</Label>
      <S.CardNumberInputWrapper>
        <Input
          id="num1"
          value={num1}
          className="right-side-none-border-radius"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH}
          textAlign="center"
          {...props}
        />
        <CardInputDivider>-</CardInputDivider>
        <Input
          id="num2"
          value={num2}
          className="both-side-none-border-radius"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH}
          textAlign="center"
          {...props}
        />
        <CardInputDivider>-</CardInputDivider>
        <Input
          id="num3"
          value={num3}
          type="password"
          className="both-side-none-border-radius"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH}
          textAlign="center"
          {...props}
        />
        <CardInputDivider>-</CardInputDivider>
        <Input
          id="num4"
          value={num4}
          type="password"
          className="left-side-none-border-radius"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH}
          textAlign="center"
          {...props}
        />
      </S.CardNumberInputWrapper>
    </S.CardNumberInputContainer>
  );
}
