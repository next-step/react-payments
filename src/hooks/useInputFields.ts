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
  fieldAmount: number;
  type: InputFieldType;
  maxLength?: number;
  onFieldChangeCallback?: (fields: string[]) => void;
}

export const useInputFields = ({
  fieldAmount,
  type,
  maxLength,
  onFieldChangeCallback,
}: UseInputFieldProps) => {
  const [fields, setValue] = useState<string[]>(
    Array.from({ length: fieldAmount }, () => '')
  );
  const [autoFocusRef, setAutoFocusRef] = useState<
    React.RefObject<HTMLInputElement>[]
  >([]);

  useEffect(() => {
    setAutoFocusRef(
      Array.from({ length: fieldAmount }, () => createRef<HTMLInputElement>())
    );
  }, [fieldAmount]);

  const getRegex = (inputType: InputFieldType) => {
    return inputType === INPUT_FIELDS.NUMBER.TYPE
      ? INPUT_FIELDS.NUMBER.REGEX
      : INPUT_FIELDS.TEXT.REGEX;
  };

  const onFieldChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldsValue = [...fields];
    const changedField = target.value.replace(getRegex(type), '');

    if (maxLength && changedField.length > maxLength) return;

    fieldsValue[index] = changedField;

    if (fieldsValue[index].length === maxLength && index < fieldAmount - 1) {
      autoFocusRef[index + 1].current?.focus();
    }

    setValue(fieldsValue);
    onFieldChangeCallback?.(fieldsValue);
  };

  // FIXME: 조건이 가변적이니 상위에서 주입하도록 변경
  const fulfilled = fields.every((field) => field.length === maxLength);

  return {
    fields,
    autoFocusRef,
    onFieldChange,
    fulfilled,
  };
};
