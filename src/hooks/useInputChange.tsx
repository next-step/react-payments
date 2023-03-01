import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const useInputChange = () => {
  const handleInputChange = <T extends object>(
    setValue: Dispatch<SetStateAction<T>>
  ) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      event.persist();
      setValue((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };
  };

  return handleInputChange;
};
