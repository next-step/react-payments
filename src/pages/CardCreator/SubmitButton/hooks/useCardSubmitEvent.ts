import type { MouseEvent } from 'react';

import { useCardContext } from '@/stores/CardContext';
import { findInvalidStoreAndFocus } from '@/utils/card';

export function useCardSubmitEvent() {
  const cardStore = useCardContext();

  // select된 inputState가 변하면 아래 함수도 새로 만들어져야 하므로, useCallback은 적용하지 않음.
  return (e: MouseEvent<HTMLElement>) => {
    if (!cardStore) return;

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
      e.preventDefault();
      invalidState.ref?.focus();
    }
  };
}
