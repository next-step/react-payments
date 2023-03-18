import type { MouseEvent } from 'react';

import { useGetInvalidCardInputState } from '@/hooks';
import { useErrorContextApiSelector } from '@/stores/ErrorContext';

useGetInvalidCardInputState;

export function useCardSubmitEvent() {
  const errorApis = useErrorContextApiSelector();

  const invalidElement = useGetInvalidCardInputState();

  // select된 inputState가 변하면 아래 함수도 새로 만들어져야 하므로, useCallback은 적용하지 않음.
  return (e: MouseEvent<HTMLElement>) => {
    if (invalidElement) {
      e.preventDefault();

      errorApis?.dispatch({ type: invalidElement.key, message: invalidElement.getInvalidMessage() });
      invalidElement.ref?.focus();
    }
  };
}
