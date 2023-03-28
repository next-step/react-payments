export type TCardState = {
  value?: any;
  ref?: HTMLElement | null;
  errorMessage?: string;
  isAllowToFocusNext: () => boolean;
};

// 현재 active한 Element를 찾는다.
export function findActiveState(cardStore: TCardState[][]): TCardState | null {
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
export function findInvalidStoreAndFocus(cardStore: TCardState[][]): TCardState | null {
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
