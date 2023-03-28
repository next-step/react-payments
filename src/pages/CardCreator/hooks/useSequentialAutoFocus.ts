import { useEffect } from 'react';

type TCardState = {
  value?: any;
  ref?: HTMLElement | null;
  errorMessage?: string;
  isAllowToFocusNext: () => boolean;
};

// FIXME: 너무 길다... 해체가 필요하다. 따라서 아래와 같이 simple하게 간다.
// 현재 active인 ref의 state가 isValid인 것을 확인하고 처음부터 끝까지 valid를 확인하고 처음 invalid한 곳을 바라보게한다.
// listener에 들어가는 로직은 검증 로직으로서 재사용할 수 있어야한다. submit때에도 똑같은 로직이 돌아야하기 때문이다.
export function useSequentialAutoFocus(cardStore?: TCardState[][] | null) {
  useEffect(() => {
    if (!cardStore) return;
    // active한 list를 찾아서
    // active한 element를 찾은 다음
    const activeState = findActiveState(cardStore);
    if (activeState && !activeState.errorMessage && activeState.isAllowToFocusNext()) {
      // isValidate면,
      // 처음부터 끝까지 다시 탐색.
      // 다시 탐색과정에서 처음 걸리는 element에 focus를 준다.
      findInvalidStoreAndFocus(cardStore);
    }
  }, [cardStore]);
}

function findActiveState(cardStore: TCardState[][]): TCardState | null {
  let activeState: TCardState | null = null;

  cardStore.some((cardStateList) =>
    cardStateList.some((cardState) => {
      const isActiveElement = cardState.ref === document.activeElement;
      if (isActiveElement) activeState = cardState;
      return isActiveElement;
    })
  );

  return activeState;
}

// value가 없거나 errorMessage가 있는 state를 focus한다.
// error체크 메소드 실행시켜서 현재상태를 확인시킨다.
function findInvalidStoreAndFocus(cardStore: TCardState[][]) {
  let invalidState: TCardState | null = null;

  cardStore.some((cardStateList) =>
    cardStateList.some((cardState) => {
      const isInvalid = !cardState.value || !!cardState.errorMessage;
      if (isInvalid) {
        invalidState = cardState;
        cardState.ref?.focus();
      }
      return isInvalid;
    })
  );

  return invalidState;
}
