import type { ChangeEvent, Dispatch, SetStateAction, FocusEvent } from 'react';

import { filterNumber, updateArray, updateObject } from '@/utils';
import type { InputStateType } from '@/types/types';
import useExtendedState from '@/hooks/useExtendedState';

// prettier-ignore
// eslint-disable-next-line
type SetInputState<T> = Dispatch<SetStateAction<InputStateType<T>[]>> | ReturnType<typeof useExtendedState<InputStateType<T>[]>>[1];

interface UseInputOnChangeProps<T> {
  state: InputStateType<T>;
  setState: SetInputState<T>;
  i: number;
}

function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({ state, setState, i }: UseInputOnChangeProps<string>) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const numberString = filterNumber(e.currentTarget.value);
        if (!state.checkIsAllowInput(numberString)) return;

        setCardInfoState(setState, i, numberString);
      },
    createInputBlurHandler:
      ({
        props,
        checkWhetherSetState,
        getNewValue,
      }: {
        props: UseInputOnChangeProps<string>;
        checkWhetherSetState: (e: FocusEvent<HTMLInputElement, Element>) => boolean;
        getNewValue: (e: FocusEvent<HTMLInputElement, Element>) => string;
      }) =>
      (e: FocusEvent<HTMLInputElement, Element>) => {
        const { setState, i } = props;
        if (checkWhetherSetState(e)) {
          const paddedValue = getNewValue(e);
          e.currentTarget.value = paddedValue;

          setCardInfoState(setState, i, paddedValue);
        }
      },
  };
}

export { useInputEventHandler };

function setCardInfoState<T = string>(setState: SetInputState<T>, i: number, newValue: T) {
  setState((prev) => {
    return updateCardInfoState(prev, i, newValue);
  });
}

function updateCardInfoState<T = string>(prevState: InputStateType<T>[], i: number, newValue: T) {
  return updateArray(prevState, i, updateObject(prevState[i], 'value', newValue));
}
