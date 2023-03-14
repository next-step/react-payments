import { useMemo } from 'react';

import { useCardInfoSelector } from '@/stores/CardCreatorContext';

export function useValidateCardInfos() {
  const cardInfo = useCardInfoSelector();

  const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo || {};

  const inputs = useMemo(
    () => [
      createInputObject('cardCompany', cardCompany),
      createInputObject('cardNumbers', cardNumbers),
      createInputObject('expireDates', expireDates),
      createInputObject('cardOwners', cardOwners),
      createInputObject('passwords', passwords),
      createInputObject('securityCodes', securityCodes),
    ],
    [cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes]
  );

  return useMemo(
    () =>
      inputs.find(({ store }) => {
        if (Array.isArray(store)) {
          return store.some((inputInstance) => !inputInstance.checkIsValid());
        }
        // @ts-ignore
        return !store?.checkIsValid();
      }),
    [inputs]
  );
}

function createInputObject<T>(type: string, store: T): { type: string; store: T } {
  return { type, store };
}
