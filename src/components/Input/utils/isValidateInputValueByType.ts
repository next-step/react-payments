import { InputType } from '@/components/Input/Input.type.ts';

const isAlphabetic = (value: string) => /^[a-zA-Z]*$/.test(value);
const isAlphanumeric = (value: string) => /^[a-zA-Z0-9]*$/.test(value);
const isNumeric = (value: string) => /^\d*$/.test(value);

const inputValidators = {
  all: () => true,
  numeric: isNumeric,
  alphabetic: isAlphabetic,
  alphanumeric: isAlphanumeric,
};

export const isValidateInputValueByType = (type: InputType, inputValue: string) => {
  const validator = inputValidators[type];
  return validator(inputValue);
};
