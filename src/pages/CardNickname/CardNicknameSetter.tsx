import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Card } from '@/components/Card';
import { useValidateCardInfos } from '@/hooks/useValidateCardInfos';
import { routes } from '@/routes';
import { useCardInfoSelector } from '@/stores/CardCreatorContext';

import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import { useCardListWithLocalStorage } from './hooks/useCardListWithLocalStorage';

export function CardNicknameSetter() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const cardInfo = useCardInfoSelector();

  const { getCardFromStorage } = useCardListWithLocalStorage();

  // TODO: validate 하는 부분 hook으로 빼서 가독성 올려주기
  const invalidInfo = useValidateCardInfos();

  useEffect(
    function checkIfCorrectPageAccess() {
      if (cardId) {
        getCardFromStorage(cardId, () => {
          alert('해당 카드가 존재하지 않습니다.');
          navigate(routes.home);
        });
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

      <Card
        disableNickname
        cardCompany={cardInfo?.cardCompany?.value}
        cardExpireDate={cardInfo?.expireDates?.map((ss) => ss.value)}
        cardNumbers={cardInfo?.cardNumbers}
        cardOwnerName={cardInfo?.cardOwners?.[0]?.value}
        cardNickname={cardInfo?.cardNickname?.value}
      />

      <NicknameInput />

      <CardNicknameSubmitButton />
    </div>
  );
}
