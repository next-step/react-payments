import { useMemo } from 'react';

import {
  useSelectCardCompany,
  useSelectCardNumbers,
  useSelectExpireDates,
  useSelectCardOwners,
  useSelectPasswords,
  useSelectSecurityCodes,
} from '@/stores/CardCreatorContext';

export function useValidateCardInfos() {
  const cardCompany = useSelectCardCompany();
  const cardNumbersStore = useSelectCardNumbers();
  const expireDatesStore = useSelectExpireDates();
  const cardOwnersStore = useSelectCardOwners();
  const passwordsStore = useSelectPasswords();
  const securityCodesStore = useSelectSecurityCodes();

  const inputs = useMemo(
    () => [
      createInputObject('cardCompany', cardCompany),
      createInputObject('cardNumbers', cardNumbersStore),
      createInputObject('expireDates', expireDatesStore),
      createInputObject('cardOwners', cardOwnersStore),
      createInputObject('passwords', passwordsStore),
      createInputObject('securityCodes', securityCodesStore),
    ],
    [cardCompany, cardNumbersStore, expireDatesStore, cardOwnersStore, passwordsStore, securityCodesStore]
  );

  return useMemo(
    () =>
      inputs.find(({ store }) => {
        if (Array.isArray(store)) {
          return store?.some(({ value, checkIsValid }) => !checkIsValid(value));
        }
        return !store?.checkIsValid(store.value);
      }),
    [inputs]
  );
}

function createInputObject<T>(type: string, store: T): { type: string; store: T } {
  return { type, store };
}
