import React, { ChangeEvent, useCallback } from 'react';

import { useCardContextApiSelector } from '@/stores/CardContext';

interface NicknameInputProps {
  cardNickname?: string;
}

export function NicknameInput({ cardNickname = '' }: NicknameInputProps) {
  const cardContextApis = useCardContextApiSelector();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      cardContextApis?.dispatch({ type: 'cardNickname', payload: { value: e.currentTarget.value } });
    },
    [cardContextApis]
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
