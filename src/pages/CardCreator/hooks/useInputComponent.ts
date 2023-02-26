import { useMemo, useRef, useState } from 'react';

import { InputStateType } from '@/types';

import { createCardStateSetter } from '../utils';

export function useInputComponent<T>(initState: InputStateType<string>[]) {
  const [state, setState] = useState(initState);
  const ref = useRef<T>(null);

  const createStateSetter = useMemo(() => createCardStateSetter(setState), []);

  return useMemo(
    () =>
      [
        state,
        createStateSetter,
        ref,
        {
          state,
          ref,
        },
      ] as const,
    [state, createStateSetter]
  );
}
