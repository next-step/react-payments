import { useState } from 'react';

export const useStringInput = (initialStringValue = '') => {
  const [stringValue, setStringValue] = useState(initialStringValue);

  const handleChange = (value: string) => {
    setStringValue(value);
  };

  return { value: stringValue, handleChange };
};
