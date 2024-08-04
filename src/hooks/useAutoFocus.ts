import { createRef, useCallback, useState } from 'react';

interface UseAutoFocusProps {
  amount: number;
}

export interface HandleAutoFocusProps {
  index: number;
  value: string;
  maxLength: number;
}

export const useAutoFocus = ({ amount }: UseAutoFocusProps) => {
  const [autoFocusRefs] = useState<React.RefObject<HTMLInputElement>[]>(
    Array.from({ length: amount + 1 }, () => createRef<HTMLInputElement>())
  );

  const onBlur = useCallback(() => {
    (document.activeElement as HTMLElement).blur();
  }, []);

  const handleAutoFocus = ({
    value,
    maxLength,
    index,
  }: HandleAutoFocusProps) => {
    const nextFieldIndex = index + 1;

    if (value.length >= maxLength && nextFieldIndex < autoFocusRefs.length) {
      autoFocusRefs[nextFieldIndex].current?.focus();
    } else if (
      value.length >= maxLength &&
      nextFieldIndex === autoFocusRefs.length
    ) {
      onBlur();
    }
  };

  return { autoFocusRefs, handleAutoFocus };
};
