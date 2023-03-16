import { useEffect } from 'react';

import { checkIsArrayLast } from '@/utils';
import type { useCardInfoSelector } from '@/stores/CardContext';

// FIXME: 클린코드
export function useSequentialAutoFocus(cardInfo: ReturnType<typeof useCardInfoSelector>) {
  useEffect(() => {
    if (!cardInfo) return;

    const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo;
    const inputLists = [[cardCompany], cardNumbers, expireDates, cardOwners, securityCodes, passwords];

    inputLists.every((inputList, inputListIndex) => {
      const isActiveList = inputList?.some((input) => checkIsActiveElement(input.ref));
      if (!isActiveList) return true;

      // @ts-ignore
      const isEveryInputFinished = inputList?.every((input, i) => {
        const isFinished = input?.checkIsInputFinished();

        if (isFinished && checkIsActiveElement(input.ref) && !checkIsArrayLast(inputList, i)) {
          inputList?.[i + 1]?.ref?.focus();
        }

        return isFinished;
      });

      if (isEveryInputFinished && !checkIsArrayLast(inputLists, inputListIndex)) {
        inputLists?.[inputListIndex + 1][0]?.ref?.focus();
      }

      return isEveryInputFinished;
    });
  }, [cardInfo]);
}

function checkIsActiveElement(ref?: HTMLElement | null) {
  return document.activeElement === ref;
}
