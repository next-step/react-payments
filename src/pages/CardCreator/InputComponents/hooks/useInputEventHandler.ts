import type { ChangeEvent, FocusEvent } from 'react';

import type { InputStateType } from '@/types/types';
import { filterNumber } from '@/utils';

interface UseInputOnChangeProps<T = string> {
  state: InputStateType<T>;
  setState: (newState: any) => void;
}

function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({ state, setState }: UseInputOnChangeProps<string>) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const numberString = filterNumber(e.currentTarget.value);
        if (!state.checkIsAllowInput(numberString)) return;

        setState(numberString);
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
        const { setState } = props;
        if (checkWhetherSetState(e)) {
          const paddedValue = getNewValue(e);
          e.currentTarget.value = paddedValue;

          setState(paddedValue);
        }
      },
  };
}

export { useInputEventHandler };
