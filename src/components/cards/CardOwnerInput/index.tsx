import React, { InputHTMLAttributes, useMemo } from "react";

import { Input } from "@/components/common";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";

import * as S from "./cardOwnerInput.style";

interface CardOwnerInputProps extends InputHTMLAttributes<HTMLInputElement> {
  cardOwnerName: string;
}

export default function CardOwnerInput({
  cardOwnerName,
  ...props
}: CardOwnerInputProps) {
  const CardOwnerInputLabel = useMemo(
    () => (
      <S.CardOwnerInputLabelContainer>
        <span>카드 소유자 이름(선택)</span>
        <span>
          {cardOwnerName.length}/{CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH}
        </span>
      </S.CardOwnerInputLabelContainer>
    ),
    [cardOwnerName]
  );

  return (
    <Input
      style={{ padding: "0px 10px" }}
      id="ownerName"
      label={CardOwnerInputLabel}
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      value={cardOwnerName}
      {...props}
    />
  );
}
