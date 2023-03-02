import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';

function handleInputChange<T>(setValue: Dispatch<SetStateAction<T>>) {
  return (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { value, name } = event.target;
    setValue((prev: T): T => {
      if (isObjectState(prev)) {
        return {
          ...prev,
          [name]: value,
        };
      }
      if (isStringState(prev)) {
        return value as unknown as T;
      }
      return prev;
    });
  };
}

export const handleFormInput = <T extends object>(
  formData: React.MutableRefObject<T>,
  key: string
) => {
  return (value: unknown) => {
    formData.current = {
      ...formData.current,
      [key]: value,
    };
  };
};

export default function useFormData(initialData = {}) {
  const formData = useRef(initialData);

  const getFormData = () => formData;

  return {
    getFormData,
    handleFormInput,
    handleInputChange,
  };
}

function isObjectState<T>(v: T): v is T {
  return typeof v == 'object';
}
// const isObjectState = <T extends object>(v: T): v is T => typeof v == 'object';
const isStringState = (v: any): v is string => typeof v == 'string';
