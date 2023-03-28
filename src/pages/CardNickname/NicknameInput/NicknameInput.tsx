import React, { ChangeEvent, useCallback, useEffect } from 'react';

import { CardNicknameInputElement, useCardApiContext } from '@/stores/CardContext';

import { StyledNicknameInput, StyledNicknameInputErrorMessage } from './NicknameInput.styled';

interface NicknameInputProps {
  cardNickname?: CardNicknameInputElement;
}

export function NicknameInput({ cardNickname }: NicknameInputProps) {
  const cardContextApis = useCardApiContext();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      cardContextApis?.dispatch({ type: 'cardNicknames', payload: { value: e.currentTarget.value } });
    },
    [cardContextApis]
  );

  useEffect(() => {
    cardNickname?.ref?.focus();
  }, [cardNickname?.ref]);

  return (
    <div className="input-container flex-column-center w-100">
      <StyledNicknameInput
        className="input-underline w-75"
        type="text"
        maxLength={10}
        error={!!cardNickname?.errorMessage}
        ref={cardNickname?.setRef?.bind(cardNickname)}
        value={cardNickname?.value || ''}
        placeholder="카드 별칭 (선택)"
        onChange={handleCardNicknameChange}
      />
      {cardNickname?.errorMessage && (
        <StyledNicknameInputErrorMessage>{cardNickname.errorMessage}</StyledNicknameInputErrorMessage>
      )}
    </div>
  );
}
