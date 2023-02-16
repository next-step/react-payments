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
  const refactorState = {};

  Object.keys(initialState).forEach((key) => {
    refactorState[key] = {
      name: key,
      value: initialState[key],
    };
  });

  const [formState, setState] = useState(refactorState);

  const handleChange: FormChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    const newFormState = Object.freeze(formState);

    newFormState[name].value = value;
    setState({ ...newFormState });
  }, []);

  return [formState, handleChange];
}