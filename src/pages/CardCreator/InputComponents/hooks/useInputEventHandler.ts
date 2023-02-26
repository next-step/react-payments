import type { ChangeEvent, FocusEvent } from 'react';

interface UseInputOnChangeProps {
  setState: (newState: any) => void;
}

function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({
        props,
        checkWhetherSetState,
        getNewValue,
      }: {
        props: UseInputOnChangeProps;
        checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => boolean;
        getNewValue: (e: ChangeEvent<HTMLInputElement>) => string;
      }) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const { setState } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          console.log(newValue);
          setState(newValue);
        }
      },
    createInputBlurHandler:
      ({
        props,
        checkWhetherSetState,
        getNewValue,
      }: {
        props: UseInputOnChangeProps;
        checkWhetherSetState: (e: FocusEvent<HTMLInputElement, Element>) => boolean;
        getNewValue: (e: FocusEvent<HTMLInputElement, Element>) => string;
      }) =>
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
