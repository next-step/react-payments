import { useState } from 'react';

export const useStringInput = (initialStringValue: string = '') => {
  const [stringValue, setStringValue] = useState(initialStringValue);

  const handleChange = (value: string) => {
    setStringValue(value);
  };

  return { value: stringValue, setValue: setStringValue, handleChange };
};
