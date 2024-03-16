import { useState } from 'react';
import { UpdateValueProps } from '../Input.type';

const validateComplete = (values: string[], maxLength?: number) =>
  values.every(Boolean) && values.every((value) => value.length === maxLength);

export const useInputFieldsValues = (
  defaultValue: string[],
  onValueChange?: (payload: { values: string[] }) => void,
  onValueComplete?: (payload: { values: string[] }) => void,
) => {
  const [values, setValues] = useState(defaultValue);

  const updateValue = ({ index, value, inputRefs, maxLength, focus = true }: UpdateValueProps) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    onValueChange?.({ values: newValues });

    if (validateComplete?.(newValues, maxLength)) {
      onValueComplete?.({ values: newValues });
    }

    if (focus) {
      if ((maxLength && value.length === maxLength) || (!maxLength && value)) {
        if (index < inputRefs.length - 1) {
          inputRefs[index + 1].current?.focus();
        }
      } else if (value.length === 0 && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  return { values, updateValue };
};
