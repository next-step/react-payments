import { useState } from 'react';

type StateRefreshValidator<T> = (prev: T) => boolean;
type NewStateCreator<T> = (prev: T) => T;

interface ExtendedSetStateOptions<T> {
  stateRefreshValidator?: StateRefreshValidator<T>;
}

function useExtendedState<T>(
  initialState: T
): [T, (newStateCreator: NewStateCreator<T>, { stateRefreshValidator }: ExtendedSetStateOptions<T>) => void] {
  const [state, setState] = useState(initialState);

  function extendedSetState(newStateCreator: NewStateCreator<T>, options?: ExtendedSetStateOptions<T>) {
    if (typeof newStateCreator !== 'function') {
      throw new Error('only function can use useExtendedState Setter function');
    }

    setState((prev) => {
      if (!options?.stateRefreshValidator?.(prev)) {
        return prev;
      }

      return newStateCreator(prev);
    });
  }

  return [state, extendedSetState];
}

export default useExtendedState;
