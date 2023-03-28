import { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCardListWithLocalStorage } from '@/hooks';
import { routes } from '@/routes';
import { useCardContext } from '@/stores/CardContext';
import { findInvalidStoreAndFocus } from '@/utils/card';

export function useNicknameSubmitEvent() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const cardInfo = useCardContext();

  const { setCardInStorage } = useCardListWithLocalStorage();

  return (e: MouseEvent<HTMLElement>) => {
    if (!cardInfo) return;

    const { cardNicknames, cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo;
    const cardNickname = cardNicknames[0];
    if (cardNickname.errorMessage) {
      e.preventDefault();
      return;
    }

    const invalidElement = findInvalidStoreAndFocus([
      cardCompanies,
      cardNumbers,
      expireDates,
      cardOwners,
      passwords,
      securityCodes,
    ]);

    if (invalidElement) {
      e.preventDefault();
      navigate(routes.cardCreator);
      return;
    }

    const newCardNicknameValue = !cardNickname.value ? cardCompanies[0]?.value?.name : cardNickname.value;
    const saveCardId = cardId || new Date().getTime();

    // setCardInStorage(saveCardId, {
    //   cardNickname: { ...cardNickname, value: newCardNicknameValue },
    //   cardCompany,
    //   cardNumbers,
    //   expireDates,
    //   cardOwners,
    //   passwords,
    //   securityCodes,
    // });
  };
}
