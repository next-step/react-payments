import { useMemo } from 'react';

import { useCardInfoSelector } from '@/stores/CardContext';
import type { InputStateType } from '@/types';

export function useValidateCardInfos() {
  const cardInfo = useCardInfoSelector();

  const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo || {};

  const inputs = useMemo(
    () => [
      createInputObject('cardCompany', [cardCompany]),
      createInputObject('cardNumbers', cardNumbers),
      createInputObject('expireDates', expireDates),
      createInputObject('cardOwners', cardOwners),
      createInputObject('securityCodes', securityCodes),
      createInputObject('passwords', passwords),
    ],
    [cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes]
  );

  return useMemo(() => {
    const targetStore = inputs.find(({ store }) => {
      // @ts-ignore
      return store?.some((inputInstance) => !inputInstance?.checkIsValid());
    });

    if (!targetStore) return null;

    // @ts-ignore
    const invalidElement = targetStore.store?.find((store) => !store.checkIsValid()) as Pick<InputStateType, 'ref'>;

    return createInputObject(targetStore?.type, invalidElement);
  }, [inputs]);
}

function createInputObject<T>(type: string, store: T): { type: string; store: T } {
  return { type, store };
}
