import { createRef, useState } from 'react';

interface UseAutoFocusProps {
  amount: number;
}

interface HandleAutoFocusProps {
  value: string;
  maxLength: number;
  index: number;
}

export const useAutoFocus = ({ amount }: UseAutoFocusProps) => {
  const [autoFocusRefs] = useState<React.RefObject<HTMLInputElement>[]>(
    Array.from({ length: amount }, () => createRef<HTMLInputElement>())
  );

  const handleAutoFocus = ({
    value,
    maxLength,
    index,
  }: HandleAutoFocusProps) => {
    const nextFieldIndex = index + 1;

    if (value.length === maxLength && nextFieldIndex < autoFocusRefs.length) {
      autoFocusRefs[nextFieldIndex].current?.focus();
    }
  };

  return { autoFocusRefs, handleAutoFocus };
};
