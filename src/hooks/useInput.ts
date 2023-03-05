import { ChangeEvent, useCallback, useState } from 'react';

interface ReturnObject<T> {
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput<T>(initialState: T): ReturnObject<T> {
  const [state, setState] = useState(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as T;
    setState(newValue);
  }, []);

  return {
    value: state,
    onChange
  };
}
