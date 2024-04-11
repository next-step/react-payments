import { useState } from 'react';

export const useInputValues = (
  initialValues: string[],
  options?: {
    validate?: (values: string[]) => boolean;
    transform?: (values: string[]) => string;
  },
) => {
  const [values, setValues] = useState<string[]>(initialValues);

  const updateValues = ({ values }: { values: string[] }) => {
    setValues(values);
  };

  const valid = options?.validate?.(values) ?? true;
  const transformedValue = options?.transform?.(values) ?? values.join('');

  return { value: values, transformedValue, valid, update: updateValues };
};
