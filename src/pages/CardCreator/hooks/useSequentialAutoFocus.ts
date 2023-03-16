import { useEffect } from 'react';

import { checkIsArrayLast } from '@/utils';
import type { useCardSelector } from '@/stores/CardContext';

export function useSequentialAutoFocus(cardInfo: ReturnType<typeof useCardSelector>) {
  useEffect(() => {
    if (!cardInfo) return;

    const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo;
    const inputRowList = [[cardCompany], cardNumbers, expireDates, cardOwners, securityCodes, passwords];

    // @ts-ignore
    inputRowList.every(checkIsEveryRowFinished(inputRowList));
  }, [cardInfo]);
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
