import React, { ChangeEvent, useCallback, useEffect } from 'react';

import { useGetErrorMessage } from '@/hooks';
import { CardNicknameState, useCardApiContext } from '@/stores/CardContext';

import { StyledNicknameInput, StyledNicknameInputErrorMessage } from './NicknameInput.styled';

interface NicknameInputProps {
  cardNickname?: CardNicknameState;
}

export function NicknameInput({ cardNickname }: NicknameInputProps) {
  const errorMessage = useGetErrorMessage(cardNickname);
  const cardContextApis = useCardApiContext();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      cardContextApis?.dispatch({ type: 'cardNickname', payload: { value: e.currentTarget.value } });
    },
    [cardContextApis]
  );

  useEffect(() => {
    cardNickname?.ref?.focus();
  }, [cardNickname?.ref]);

  return (
    <div className="input-container flex-center w-100">
      <StyledNicknameInput
        className="input-underline w-75"
        type="text"
        maxLength={10}
        error={!!errorMessage}
        ref={cardNickname?.setRef?.bind(cardNickname)}
        value={cardNickname?.value || ''}
        placeholder="카드 별칭 (선택)"
        onChange={handleCardNicknameChange}
      />
      {errorMessage && <StyledNicknameInputErrorMessage>{errorMessage}</StyledNicknameInputErrorMessage>}
    </div>
  );
}
