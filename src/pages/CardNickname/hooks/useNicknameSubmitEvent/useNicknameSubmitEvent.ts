import { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCardListWithLocalStorage, useGetInvalidCardInputState } from '@/hooks';
import { routes } from '@/routes';
import { useCardContext } from '@/stores/CardContext';
import { useErrorContextApiSelector } from '@/stores/ErrorContext';

export function useNicknameSubmitEvent() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const errorContextApis = useErrorContextApiSelector();
  const cardInfo = useCardContext();
  const { cardNickname, cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo || {};

  const invalidElement = useGetInvalidCardInputState();

  const { setCardInStorage } = useCardListWithLocalStorage();

  return (e: MouseEvent<HTMLElement>) => {
    if (!cardNickname?.checkIsValid()) {
      e.preventDefault();
      errorContextApis?.dispatch({ type: cardNickname?.key, message: cardNickname?.getInvalidMessage() });
      return;
    }

    if (!cardCompany || !cardNumbers || !expireDates || !cardOwners || !passwords || !securityCodes) return;

    if (invalidElement) {
      e.preventDefault();
      errorContextApis?.dispatch({ type: invalidElement.key, message: invalidElement.getInvalidMessage() });
      navigate(routes.cardCreator);
      return;
    }

    const newCardNicknameValue = !cardNickname.value ? cardCompany?.value?.name : cardNickname.value;
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
}
