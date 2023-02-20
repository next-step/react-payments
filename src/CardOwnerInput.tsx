import React from 'react';
import type { useState } from 'react';

interface CardOwnerInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardOwnerNameStateBundle: ReturnType<typeof useState<string>>;
}

function CardOwnerInput({
  cardOwnerNameStateBundle,
}: CardOwnerInputProps) {
  const [ownerName, setOwnerName] = cardOwnerNameStateBundle;

  return (
    <div className="input-container">
      <div className="flex-between">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <div className="input-title">
          <span>{ownerName?.length || 0}</span>
          <span>/</span>
          <span>30</span>
        </div>
      </div>
      <input
        type="text"
        className="input-basic"
        value={ownerName ?? ''}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={(e) => {
          const inputName = e.currentTarget.value;
          setOwnerName(inputName);
        }}
      />
    </div>
  );
}

export default CardOwnerInput;
