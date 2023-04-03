import { RefObject } from 'react';

type Value = {
  values: { value: any; ref: RefObject<HTMLInputElement> }[];
  maxLength: number;
};

const useFocus = ({ values, maxLength }: Value) => {
  const focusOnTarget = (i = 0) => {
    if (values.length === i) return;
    values[i]?.ref?.current?.focus();
  };

  const targetIndex =
    values.findIndex((v) => v.value?.length !== maxLength) ?? 0;

  return {
    focusOnTarget,
    target: targetIndex,
  };
};

export default useFocus;
