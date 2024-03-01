import { createRef, useEffect, useState } from 'react';

export const INPUT_FIELDS = {
  NUMBER: {
    TYPE: 'number',
    REGEX: /\D/g,
  },
  STRING: {
    TYPE: 'string',
    REGEX: /[^a-zA-Z]/g,
  },
} as const;

type InputFieldType = (typeof INPUT_FIELDS)[keyof typeof INPUT_FIELDS]['TYPE'];

interface FieldConfig {
  fieldType: InputFieldType;
  maxLength?: number;
  validation?: (fields: string) => boolean;
  onFieldChangeCallback?: (fields: string[]) => void;
}

export const useInputFields = (fieldConfigs: FieldConfig[]) => {
  const fieldAmount = fieldConfigs.length;
  const [fields, setFields] = useState<string[]>(
    Array.from({ length: fieldAmount }, () => '')
  );
  const [autoFocusRefs, setAutoFocusRefs] = useState<
    React.RefObject<HTMLInputElement>[]
  >([]);

  useEffect(() => {
    setAutoFocusRefs(
      Array.from({ length: fieldAmount }, () => createRef<HTMLInputElement>())
    );
  }, [fieldAmount]);

  const getRegex = (inputType: InputFieldType) => {
    return inputType === INPUT_FIELDS.NUMBER.TYPE
      ? INPUT_FIELDS.NUMBER.REGEX
      : INPUT_FIELDS.STRING.REGEX;
  };

  const onFieldChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFields = [...fields];
    const { maxLength, fieldType, onFieldChangeCallback, validation } =
      fieldConfigs[index];
    const changedValue = target.value.replace(getRegex(fieldType), '');

    if (!maxLength || (maxLength && changedValue.length <= maxLength)) {
      newFields[index] = changedValue;
      setFields(newFields);
      onFieldChangeCallback?.(newFields);
    }

    if (validation && validation(changedValue) && index < fieldAmount - 1) {
      autoFocusRefs[index + 1].current?.focus();
    }
  };

  const fieldsFulfilled = fields.map((field, index) => {
    const { validation } = fieldConfigs[index];

    if (validation) {
      return validation(field);
    }

    return field.length > 0;
  });

  return {
    fields,
    autoFocusRefs,
    onFieldChange,
    fieldsFulfilled,
  };
};
