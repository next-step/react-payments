import { ChangeEvent, Dispatch, SetStateAction } from 'react';

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

export const useInputChange = () => {
  return handleInputChange;
};
const isObjectState = (v: any): v is object => typeof v == 'object';
