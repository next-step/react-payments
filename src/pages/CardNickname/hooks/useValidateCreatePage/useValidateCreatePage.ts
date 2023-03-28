import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { routes } from '@/routes';
import { findInvalidStoreAndFocus } from '@/utils/card';
import { useCardContext } from '@/stores/CardContext';

export function useValidateCreatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardStore = useCardContext();

  useEffect(() => {
    if (cardId || !cardStore || !navigate) return;

    const { cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardStore;
    const invalidState = findInvalidStoreAndFocus([
      cardNumbers,
      expireDates,
      cardOwners,
      passwords,
      securityCodes,
      cardCompanies,
    ]);
    if (invalidState) {
      navigate(routes.cardCreator);
    }
  }, [cardId, navigate, cardStore]);
}
