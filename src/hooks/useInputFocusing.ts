import { useEffect } from 'react';

interface UseInputFocusingProps {
  refs: React.RefObject<HTMLInputElement>[];
  deps: React.DependencyList;
  maxLength: number;
}

const useInputFocusing = ({ refs, deps, maxLength }: UseInputFocusingProps) => {
  useEffect(() => {
    const focusedInput = refs.find((ref) => document.activeElement === ref.current);

    if (!focusedInput) {
      return;
    }

    const value = focusedInput.current?.value;
    const focusedInputIndex = refs.findIndex((ref) => document.activeElement === ref.current);

    if (value?.length === maxLength) {
      const nextInput = refs[focusedInputIndex + 1];

      nextInput && nextInput.current?.focus();
    }

    if (value?.length === 0) {
      const previousInput = refs[focusedInputIndex - 1];

      previousInput && previousInput.current?.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, maxLength]);
};

export default useInputFocusing;
