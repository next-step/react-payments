import React, { InputHTMLAttributes } from "react";

import { Label } from "@/components/common";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import * as S from "./cardPasswordInput.style";
import type { CardPassword } from "./hook/useCardPasswordInput";

interface CardPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  cardPassword: CardPassword;
  error?: string;
}

export default function CardPasswordInput({
  cardPassword,
  error,
  ...props
}: CardPasswordProps) {
  return (
    <S.CardPasswordInputContainer>
      <Label>비밀번호</Label>
      <S.CardPasswordInputWrapper>
        <S.CardPasswordInput
          id="password1"
          textAlign="center"
          type="password"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_PASSWORD_MAX_LENGTH}
          value={cardPassword.password1}
          {...props}
        />
        <S.CardPasswordInput
          id="password2"
          textAlign="center"
          type="password"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_PASSWORD_MAX_LENGTH}
          value={cardPassword.password2}
          {...props}
        />
        <S.CardPasswordInput
          textAlign="center"
          type="password"
          value="*"
          disabled
          {...props}
        />
        <S.CardPasswordInput
          textAlign="center"
          type="password"
          value="*"
          disabled
          {...props}
        />
      </S.CardPasswordInputWrapper>
      {error && <Label isError>{error}</Label>}
    </S.CardPasswordInputContainer>
  );
}
