import React, { ChangeEvent, useCallback } from 'react';

import { useCardContextApiSelector } from '@/stores/CardCreatorContext';

interface NicknameInputProps {
  cardNickname?: string;
}

export function NicknameInput({ cardNickname = '' }: NicknameInputProps) {
  const apis = useCardContextApiSelector();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      apis?.dispatch({ type: 'cardNickname', payload: { value: e.currentTarget.value } });
    },
    [apis]
  );

  return (
    <div className="input-container flex-center w-100">
      <input
        className="input-underline w-75"
        type="text"
        maxLength={10}
        value={cardNickname}
        placeholder="카드 별칭 (선택)"
        onChange={handleCardNicknameChange}
      />
    </div>
  );
}
