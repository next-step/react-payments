import React, { useMemo } from "react";

import { Input } from "@/components/common";

import { CardOwnerInputContainer } from "./cardOwnerInput.style";

export default function CardOwnerInput({ ...props }) {
  const CardOwnerInputLabel = useMemo(
    () => (
      <CardOwnerInputContainer>
        <span>카드 소유자 이름(선택)</span>
        <span>3/30</span>
      </CardOwnerInputContainer>
    ),
    []
  );

  return (
    <Input
      label={CardOwnerInputLabel}
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      {...props}
    />
  );
}
