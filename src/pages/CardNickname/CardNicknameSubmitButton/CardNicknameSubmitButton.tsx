import React, { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCardListWithLocalStorage } from '@/hooks/useCardListWithLocalStorage';
import { routes } from '@/routes';
import { useCardSelector } from '@/stores/CardContext';

export function CardNicknameSubmitButton() {
  const { cardId } = useParams();

  const cardInfo = useCardSelector();

  const { cardNickname, cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo || {};

  const { setCardInStorage } = useCardListWithLocalStorage();

  const handleSubmitButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardNickname?.checkIsValid()) {
      e.preventDefault();
      alert('카드 별명은 10자리를 넘을 수 없습니다.');
      return;
    }

    if (!cardCompany || !cardNumbers || !expireDates || !cardOwners || !passwords || !securityCodes) {
      alert('카드 정보를 모두 입력해주세요.');
      return;
    }

    const newCardNicknameValue = !cardNickname?.value ? cardCompany?.value?.name : cardNickname.value;

    const saveCardId = cardId || new Date().getTime();

    setCardInStorage(saveCardId, {
      cardNickname: { ...cardNickname, value: newCardNicknameValue },
      cardCompany,
      cardNumbers,
      expireDates,
      cardOwners,
      passwords,
      securityCodes,
    });
  };

  return (
    <div className="button-box mt-50">
      <Link to={routes.home} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}
