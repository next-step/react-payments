import { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetchCardList } from '@/hooks';
import { routes } from '@/router';
import { CardNicknameInputElement, useCardContext } from '@/contexts/CardContext';
import { convertCardStoreToCard, findInvalidStoreAndFocus } from '@/utils/card';

export function useNicknameSubmitEvent() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const cardContext = useCardContext();

  const { postCard } = useFetchCardList();

  return (e: MouseEvent<HTMLElement>) => {
    if (!cardContext) return;

    const { cardNicknames, cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } =
      cardContext;
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

    postCard(
      convertCardStoreToCard({
        ...cardContext,
        cardNicknames: [new CardNicknameInputElement({ value: newCardNicknameValue })],
      }),
      cardId
    );
  };
}
