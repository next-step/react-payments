import { createRef, useEffect, useState } from 'react';

export const INPUT_FIELDS = {
  NUMBER: {
    TYPE: 'number',
    REGEX: /\D/g,
  },
  TEXT: {
    TYPE: 'text',
    REGEX: /[^a-zA-Z]/g,
  },
} as const;

type InputFieldType = (typeof INPUT_FIELDS)[keyof typeof INPUT_FIELDS]['TYPE'];

interface UseInputFieldProps {
  amount: number;
  type: InputFieldType;
  maxLength?: number;
  onFieldChangeCallback?: (fields: string[]) => void;
}

export const useInputFields = ({
  amount,
  type,
  maxLength,
  onFieldChangeCallback,
}: UseInputFieldProps) => {
  const [value, setValue] = useState<string[]>(
    Array.from({ length: amount }, () => '')
  );
  const [inputRefs, setInputRefs] = useState<
    React.RefObject<HTMLInputElement>[]
  >([]);

  useEffect(() => {
    setInputRefs(
      Array.from({ length: amount }, () => createRef<HTMLInputElement>())
    );
  }, [amount]);

  const getRegex = (inputType: InputFieldType) => {
    return inputType === INPUT_FIELDS.NUMBER.TYPE
      ? INPUT_FIELDS.NUMBER.REGEX
      : INPUT_FIELDS.TEXT.REGEX;
  };

  const onFieldChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fields = [...value];
    const changedField = target.value.replace(getRegex(type), '');

    if (maxLength && changedField.length > maxLength) return;

    fields[index] = changedField;

    if (fields[index].length === maxLength && index < amount - 1) {
      inputRefs[index + 1].current?.focus();
    }

    setValue(fields);
    onFieldChangeCallback?.(fields);
  };

  return { value, inputRefs, onFieldChange };
};
