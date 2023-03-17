import { useMemo } from 'react';

import { useErrorSelector } from '@/stores/ErrorContext';
import { isNil } from '@/utils';

type ObjectWithKey = { key: string; getInvalidMessage: () => null | string; checkIsValid: () => boolean };

export function useGetErrorMessage(inputState?: ObjectWithKey | ObjectWithKey[]) {
  const errorContext = useErrorSelector();

  const inputStateList = useMemo(() => {
    if (isNil(inputState)) return null;
    return Array.isArray(inputState) ? inputState : [inputState];
  }, [inputState]);

  return useMemo(() => {
    const targetInputState = inputStateList?.find((inputState) => inputState.key === errorContext.type);
    if (targetInputState) return targetInputState.getInvalidMessage();
    return null;
  }, [errorContext, inputStateList]);
}
