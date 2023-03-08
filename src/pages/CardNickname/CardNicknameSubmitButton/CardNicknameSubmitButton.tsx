import React, { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import { routes } from '@/routes';
import {
  useSelectCardCompany,
  useSelectCardNickname,
  useSelectCardNumbers,
  useSelectCardOwners,
  useSelectExpireDates,
  useSelectPasswords,
  useSelectSecurityCodes,
} from '@/stores/CardCreatorContext';

import { useCardListWithLocalStorage } from '../hooks/useCardListWithLocalStorage';

export function CardNicknameSubmitButton() {
  const { cardId } = useParams();

  const cardNickname = useSelectCardNickname();
  const cardCompany = useSelectCardCompany();
  const cardNumbers = useSelectCardNumbers();
  const expireDates = useSelectExpireDates();
  const cardOwners = useSelectCardOwners();
  const passwords = useSelectPasswords();
  const securityCodes = useSelectSecurityCodes();

  const { setCardInStorage } = useCardListWithLocalStorage();

  const handleSubmitButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const { value, checkIsValid } = cardNickname!;
    if (!checkIsValid(value)) {
      e.preventDefault();
      alert('카드 별명은 10자리를 넘을 수 없습니다.');
      return;
    }

    if (!cardCompany || !cardNumbers || !expireDates || !cardOwners || !passwords || !securityCodes) {
      alert('카드 정보를 모두 입력해주세요.');
      return;
    }

    const newCardNicknameValue = !value ? cardCompany!.value!.name : value;

    const saveCardId = cardId || new Date().getTime();

    setCardInStorage(saveCardId, {
      cardNickname: { ...cardNickname!, value: newCardNicknameValue },
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
