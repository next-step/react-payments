import { useState } from 'react';
import { forceNextTaskQueue, UpdateValueProps } from '@/shared';

const validateComplete = (values: string[], maxLength?: number) =>
  values.every(Boolean) && values.every((value) => value.length === maxLength);

type UseInputFieldsValues = {
  values: string[];
  pattern?: RegExp;
  onValueChange?: (payload: { values: string[] }) => void;
  onValueComplete?: (payload: { values: string[] }) => void;
};

export const useInputFieldsValues = ({ values, pattern, onValueChange, onValueComplete }: UseInputFieldsValues) => {
  const [error, setError] = useState(false);

  const updateValue = ({ index, value, inputRefs, maxLength, focus = true }: UpdateValueProps) => {
    const newValues = [...values];
    newValues[index] = value;
    onValueChange?.({ values: newValues });
    setError(false);

    if (validateComplete(newValues, maxLength)) {
      forceNextTaskQueue(() => {
        onValueComplete?.({ values: newValues });
      });
    }

    if (focus && !inputRefs[index + 1]?.current?.readOnly) {
      forceNextTaskQueue(() => {
        if ((maxLength && value.length === maxLength) || (!maxLength && value)) {
          if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
          }
        } else if (value.length === 0 && index > 0) {
          inputRefs[index - 1].current?.focus();
        }
      });
    }
  };

  const validateValues = () => {
    const validIndexes = values.reduce((acc: number[], value, index) => {
      if (pattern && !new RegExp(pattern).test(value)) {
        acc.push(index);
      }
      return acc;
    }, []);

    setError(values.some(Boolean) && validIndexes.length > 0);
  };

  return { value: values, error, update: updateValue, validate: validateValues };
};
