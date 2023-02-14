import { ChangeEvent, useCallback, useState } from 'react';

interface ReturnType<T> {
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput<T extends ReturnType<T>>(initialState: T | string): T {
  const [state, setState] = useState(initialState);

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    const newState = target.value;
    setState(newState);
  }, [state]);

  return {
    value: state,
    onChange,
  } as T;
}