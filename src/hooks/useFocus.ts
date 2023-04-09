import { RefObject, useRef } from 'react';

type Value = {
  values: { value: any; ref: RefObject<HTMLInputElement>; isFocus?: boolean }[];
  maxLength: number;
};

const useFocus = ({ values, maxLength }: Value) => {
  const focus = useRef<any>(null);
  const focusOnTarget = (i = 0) => {
    if (values.length === i) return;
    values[i]?.ref?.current?.focus();
    focus.current = values[i];
  };

  const targetIndex =
    values.findIndex((v) => v.value?.length !== maxLength) ?? 0;

  return {
    focusOnTarget,
    target: targetIndex,
    focus: focus.current,
  };
};

export default useFocus;
