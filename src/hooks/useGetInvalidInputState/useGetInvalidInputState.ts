import { useMemo } from 'react';

import { useCardContext } from '@/stores/CardContext';
import type { InputStateType } from '@/types';

export function useGetInvalidCardInputState() {
  const cardInfo = useCardContext();

  // const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo || {};

  // const cardCategories = useMemo(
  //   () => [[cardCompany], cardNumbers, expireDates, cardOwners, securityCodes, passwords],
  //   [cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes]
  // );

  return useMemo(() => {
    // const targetCategory = cardCategories.find((cardCategory) => {
    //   // @ts-ignore
    //   return cardCategory?.some((cardState) => !cardState?.checkIsValid());
    // });

    // if (!targetCategory) return null;

    // // @ts-ignore
    // const invalidElement = targetCategory?.find((cardState) => !cardState.checkIsValid()) as Pick<
    //   InputStateType,
    //   'ref' | 'key' | 'getInvalidMessage' | 'checkIsValid'
    // >;

    // return invalidElement;

    return null;
  }, []);
}
