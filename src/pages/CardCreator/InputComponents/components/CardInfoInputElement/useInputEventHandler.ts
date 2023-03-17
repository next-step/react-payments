import type { ChangeEvent, FocusEvent } from 'react';

interface InputEventProps {
  setState?: (newValue: string) => void;
  eventCallback?: (e: unknown) => void;
}

export interface ChangeEventHandlerProps {
  props: InputEventProps;
  checkWhetherSetState?: (e: ChangeEvent<HTMLInputElement>) => boolean;
  getNewValue?: (e: ChangeEvent<HTMLInputElement>) => string;
}

export interface BlurEventHandlerProps {
  props: InputEventProps;
  checkWhetherSetState?: (e: FocusEvent<HTMLInputElement, Element>) => boolean;
  getNewValue?: (e: FocusEvent<HTMLInputElement, Element>) => string;
}

export function useInputEventHandler() {
  return {
    createInputChangeHandler:
      ({
        props,
        checkWhetherSetState = checkWhetherSetStateDefault,
        getNewValue = getNewValueDefault,
      }: ChangeEventHandlerProps) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        const { setState, eventCallback } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          setState?.(newValue);
        }

        eventCallback?.(e);
      },
    createInputBlurHandler:
      ({
        props,
        checkWhetherSetState = checkWhetherSetStateDefault,
        getNewValue = getNewValueDefault,
      }: BlurEventHandlerProps) =>
      (e: FocusEvent<HTMLInputElement, Element>) => {
        const { setState, eventCallback } = props;
        if (checkWhetherSetState(e)) {
          const newValue = getNewValue(e);
          e.currentTarget.value = newValue;
          setState?.(newValue);
        }

        eventCallback?.(e);
      },
  };
}

function checkWhetherSetStateDefault() {
  return true;
}

function getNewValueDefault(e: { currentTarget: { value: string } }) {
  return e.currentTarget.value;
}
