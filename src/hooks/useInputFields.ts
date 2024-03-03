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

  // FIXME: 값을 평가하고 특정 조건이 아니라면 입력을 막아내는 외부로 분리해낼 수 있을듯. validation과 다르게 생각해야 함.
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
    const { maxLength, fieldType, validation } = fieldConfigs[index];

    // FIXME: InputGurad : validation과 달리 값 평가 후 true인 경우에만 state를 변경하는 로직으로 바꾸면 더 좋을듯
    const changedValue = target.value.replace(getRegex(fieldType), '');

    if (!maxLength || (maxLength && changedValue.length <= maxLength)) {
      newFields[index] = changedValue;
      setFields(newFields);
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

    return true;
  });

  return {
    fields,
    autoFocusRefs,
    onFieldChange,
    fieldsFulfilled,
  };
};
