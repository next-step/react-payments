import { useState } from 'react';

export const useInputValues = (initialValues: string[]) => {
  const [values, setValues] = useState<string[]>(initialValues);

  const updateValues = ({ values }: { values: string[] }) => {
    setValues(values);
  };

  return { values, updateValues };
};
