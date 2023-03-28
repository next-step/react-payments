import { useEffect } from 'react';

import { checkIsArrayLast } from '@/utils';

type TCardState = { ref?: HTMLElement | null; errorMessage?: string; isAllowToFocusNext: () => boolean };

// FIXME: 너무 길다... 해체가 필요하다. 따라서 아래와 같이 simple하게 간다.
// 현재 active인 ref의 state가 isValid인 것을 확인하고 처음부터 끝까지 valid를 확인하고 처음 invalid한 곳을 바라보게한다.
// listener에 들어가는 로직은 검증 로직으로서 재사용할 수 있어야한다. submit때에도 똑같은 로직이 돌아야하기 때문이다.
export function useSequentialAutoFocus(cardStore?: TCardState[][] | null) {
  useEffect(() => {
    if (!cardStore) return;
    // active한 list를 찾아서
    // active한 element를 찾은 다음
    const activeState = findActiveState(cardStore);
    console.log('active : ', activeState);
    if (activeState && !activeState.errorMessage && activeState.isAllowToFocusNext()) {
      // isValidate면,
      // 처음부터 끝까지 다시 탐색.
      // 다시 탐색과정에서 처음 걸리는 element에 focus를 준다.
      console.log('첨부터 끝까지');
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

function checkIsEveryRowFinished(inputRowList: { ref: HTMLInputElement }[][]) {
  return function everyCallback(inputRow: { ref: HTMLInputElement }[], inputRowListIndex: number) {
    const isActiveRow = inputRow?.some((input) => checkIsActiveElement(input.ref));
    if (!isActiveRow) return true;

    // @ts-ignore
    const isEveryRowFinished = inputRow?.every(checkIsEveryInputFinished(inputRow));
    if (isAllowToFocusNextInputRow({ isEveryRowFinished, currentIndex: inputRowListIndex, inputRowList })) {
      inputRowList?.[inputRowListIndex + 1][0]?.ref?.focus();
    }

    return isEveryRowFinished;
  };
}

function isAllowToFocusNextInputRow({
  isEveryRowFinished,
  inputRowList,
  currentIndex,
}: {
  isEveryRowFinished: boolean;
  inputRowList: any[];
  currentIndex: number;
}) {
  return isEveryRowFinished && !checkIsArrayLast(inputRowList, currentIndex);
}

function checkIsEveryInputFinished(inputRow: { ref: HTMLInputElement }[]) {
  return function everyCallback(input: { checkIsInputFinished: () => boolean; ref: HTMLInputElement }, i: number) {
    const isInputFinished = input?.checkIsInputFinished();

    if (isAllowToFocusNextInput({ isInputFinished, inputRef: input.ref, inputRow, currentIndex: i })) {
      inputRow?.[i + 1]?.ref?.focus();
    }

    return isInputFinished;
  };
}

function isAllowToFocusNextInput({
  isInputFinished,
  inputRef,
  inputRow,
  currentIndex,
}: {
  isInputFinished: boolean;
  inputRef: HTMLInputElement;
  inputRow: any[];
  currentIndex: number;
}) {
  return isInputFinished && checkIsActiveElement(inputRef) && !checkIsArrayLast(inputRow, currentIndex);
}

function checkIsActiveElement(ref?: HTMLElement | null) {
  return document.activeElement === ref;
}
