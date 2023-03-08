import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Card } from '@/components/Card';
import { useValidateCardInfos } from '@/hooks/useValidateCardInfos';

import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import { useCardListWithLocalStorage } from './hooks/useCardListWithLocalStorage';
import { routes } from '@/routes';

export function CardNicknameSetter() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const { getCardFromStorage } = useCardListWithLocalStorage();

  const invalidInfo = useValidateCardInfos();

  useEffect(
    function checkIfCorrectPageAccess() {
      if (cardId) {
        getCardFromStorage(cardId);
        return;
      }

      if (invalidInfo) {
        alert('카드 정보를 모두 등록해주세요.');
        navigate(routes.cardCreator);
      }
    },
    [cardId, getCardFromStorage, invalidInfo, navigate]
  );

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card disableNickname />

      <NicknameInput />

      <CardNicknameSubmitButton />
    </div>
  );
}
