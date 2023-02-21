import { ChangeEvent, useCallback, useState } from 'react';

interface StateType<T> {
  [key: string]: { name: string, value: T };
}

interface FormState<T> {
  [key: string]: T;
}

interface FormChangeHandler {
  (e: ChangeEvent<HTMLInputElement>): void;
}

export default function useForm<T>(initialState: FormState<T>): [StateType<T>, FormChangeHandler] {
  const [formState, setState] = useState(Object.fromEntries(
    Object.entries(initialState).map(([key, value]) => [
      key, { name: key, value },
    ])
  ));

  const handleChange: FormChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    const newFormState = Object.freeze(formState);

    newFormState[name].value = value as T;
    setState({ ...newFormState });
  }, []);

  return [formState, handleChange];
}