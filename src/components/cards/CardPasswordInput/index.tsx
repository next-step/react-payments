import React, { InputHTMLAttributes } from "react";

import { Label } from "@/components/common";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import {
  CardPasswordInputContainer,
  CardPasswordInputEl,
  CardPasswordInputWrapper,
} from "./cardPasswordInput";
import type { CardPassword } from "./hook/useCardPasswordInput";

interface CardPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  cardPassword: CardPassword;
}

export default function CardPasswordInput({
  cardPassword,
  ...props
}: CardPasswordProps) {
  return (
    <CardPasswordInputContainer>
      <Label>비밀번호</Label>
      <CardPasswordInputWrapper>
        <CardPasswordInputEl
          id="password1"
          textAlign="center"
          type="password"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_PASSWORD_MAX_LENGTH}
          value={cardPassword.password1}
          {...props}
        />
        <CardPasswordInputEl
          id="password2"
          textAlign="center"
          type="password"
          maxLength={CARD_INPUT_VARIABLES.PARTIAL_PASSWORD_MAX_LENGTH}
          value={cardPassword.password2}
          {...props}
        />
        <CardPasswordInputEl
          textAlign="center"
          type="password"
          value="*"
          disabled
          {...props}
        />
        <CardPasswordInputEl
          textAlign="center"
          type="password"
          value="*"
          disabled
          {...props}
        />
      </CardPasswordInputWrapper>
    </CardPasswordInputContainer>
  );
}
