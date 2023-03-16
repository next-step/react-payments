import type { ChangeEvent, FocusEvent } from 'react';

interface UseInputOnChangeProps {
  setState: (newState: any) => void;
}

export interface ChangeEventHandlerProps {
  props: UseInputOnChangeProps;
  checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => boolean;
  getNewValue: (e: ChangeEvent<HTMLInputElement>) => string;
}

export interface BlurEventHandlerProps {
  props: UseInputOnChangeProps;
  checkWhetherSetState: (e: FocusEvent<HTMLInputElement, Element>) => boolean;
  getNewValue: (e: FocusEvent<HTMLInputElement, Element>) => string;
}

export function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({ props, checkWhetherSetState, getNewValue }: ChangeEventHandlerProps) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const { setState } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          setState(newValue);
        }
      },
    createInputBlurHandler:
      ({ props, checkWhetherSetState, getNewValue }: BlurEventHandlerProps) =>
      (e: FocusEvent<HTMLInputElement, Element>) => {
        const { setState } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          e.currentTarget.value = newValue;

          setState(newValue);
        }
      },
  };
}
