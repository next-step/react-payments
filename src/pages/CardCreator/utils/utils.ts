import type { Dispatch, SetStateAction } from 'react';

import type { InputStateType } from '@/types';
import { createUpdatedArray, createUpdatedObject } from '@/utils';

// prettier-ignore
// eslint-disable-next-line
type SetInputState<T> = Dispatch<SetStateAction<InputStateType<T>[]>>;

export function createCardStateSetter<T = string>(setState: SetInputState<T>) {
  return (i: number) => {
    return (newValue: T) => {
      setState((prev) => {
        return createUpdatedCardInfoState(prev, i, newValue);
      });
    }
  }
}

// prettier-ignore
// eslint-disable-next-line
export type CardStateSetter<T = string> = ReturnType<typeof createCardStateSetter<T>>;

function createUpdatedCardInfoState<T = string>(prevState: InputStateType<T>[], i: number, newValue: T) {
  return createUpdatedArray(prevState, i, createUpdatedObject(prevState[i], 'value', newValue));
}
