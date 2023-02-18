import React, { InputHTMLAttributes, useMemo } from "react";

import { Input } from "@/components/common";

import { CardOwnerInputContainer } from "./cardOwnerInput.style";

interface CardOwnerInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ownerNameLength?: number;
}

export default function CardOwnerInput({
  ownerNameLength = 0,
  ...props
}: CardOwnerInputProps) {
  const CardOwnerInputLabel = useMemo(
    () => (
      <CardOwnerInputContainer>
        <span>카드 소유자 이름(선택)</span>
        <span>{ownerNameLength}/30</span>
      </CardOwnerInputContainer>
    ),
    [ownerNameLength]
  );

  return (
    <Input
      label={CardOwnerInputLabel}
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      {...props}
    />
  );
}
