import { useEffect } from 'react';

import { TCardState, findInvalidStoreAndFocus, findActiveState } from '@/utils/card';

// 현재 active인 ref의 state가 isValid인 것을 확인하고 처음부터 끝까지 valid를 확인하고 처음 invalid한 곳을 바라보게한다.
export function useSequentialAutoFocus(cardStore?: TCardState[][] | null) {
  useEffect(() => {
    if (!cardStore) return;

    const activeState = findActiveState(cardStore);
    if (activeState && !activeState.errorMessage && activeState.isAllowToFocusNext()) {
      findInvalidStoreAndFocus(cardStore);
    }
  }, [cardStore]);
}
