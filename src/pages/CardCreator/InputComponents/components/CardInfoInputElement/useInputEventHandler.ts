import type { ChangeEvent, FocusEvent } from 'react';

interface UseInputOnChangeProps {
  setState: (newState: any) => void;
}

export interface OnChangeHandlerProps {
  props: UseInputOnChangeProps;
  checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => boolean;
  getNewValue: (e: ChangeEvent<HTMLInputElement>) => string;
}

export interface OnBlurHandlerProps {
  props: UseInputOnChangeProps;
  checkWhetherSetState: (e: FocusEvent<HTMLInputElement, Element>) => boolean;
  getNewValue: (e: FocusEvent<HTMLInputElement, Element>) => string;
}

function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({ props, checkWhetherSetState, getNewValue }: OnChangeHandlerProps) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const { setState } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          setState(newValue);
        }
      },
    createInputBlurHandler:
      ({ props, checkWhetherSetState, getNewValue }: OnBlurHandlerProps) =>
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

export { useInputEventHandler };
