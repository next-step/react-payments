import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';

function handleInputChange(
  input: Dispatch<SetStateAction<object>>
): (e: ChangeEvent<HTMLInputElement>) => void;
function handleInputChange(
  input: Dispatch<SetStateAction<string>>
): (e: ChangeEvent<HTMLInputElement>) => void;

function handleInputChange(setValue: any) {
  return (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { value, name } = event.target;
    setValue((prev: object | string) =>
      isObjectState(prev)
        ? {
            ...prev,
            [name]: value,
          }
        : value
    );
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

const isObjectState = (v: any): v is object => typeof v == 'object';
