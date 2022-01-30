import { useState } from 'react';
import { ERROR_MESSAGES } from '@/constants';
import { isValidValue, isValueValidLength } from '@/helper/isValid';

type stateCode = 'invalidLength' | 'invalidValue' | 'pass' | '';

const useInputValidationStates = () => {
  const [validationStates, setValidationState] = useState({
    cardNumber: ['', '', '', ''],
    expiryDate: ['', ''],
    cvc: '',
    password: ['', ''],
  });

  const setInputValidationStates = ({
    value,
    fieldKey,
    index,
  }: {
    value: number | string;
    fieldKey: keyof typeof ERROR_MESSAGES;
    index: number;
  }) => {
    const currentValidationState: stateCode =
      (!isValueValidLength(value, fieldKey) && 'invalidLength') ||
      (!isValidValue(value, fieldKey, index) && 'invalidValue') ||
      'pass';

    const prevValidationState =
      validationStates[fieldKey][index] || validationStates[fieldKey];

    if (prevValidationState === currentValidationState) return;

    setValidationState({
      ...validationStates,
      [fieldKey]:
        Array.from(validationStates[fieldKey])?.map((v, i) =>
          i === index ? currentValidationState : v
        ) || currentValidationState,
    });
  };

  const isValidField = ({
    value,
    fieldKey,
    index,
  }: {
    value: number | string;
    fieldKey: keyof typeof ERROR_MESSAGES;
    index: number;
  }) =>
    isValidValue(value, fieldKey, index) && isValueValidLength(value, fieldKey);

  const isAllValid = () =>
    Object.values(validationStates).every((v) => v === 'pass');

  const getErrorMessage = ({
    stateCode,
    fieldKey,
    index,
  }: {
    stateCode: stateCode;
    fieldKey: keyof typeof ERROR_MESSAGES;
    index: number;
  }) => {
    if (stateCode === '' || stateCode === 'pass') return;

    if (stateCode === 'invalidLength' || stateCode === 'invalidValue') {
      return ERROR_MESSAGES[fieldKey][stateCode];
    }

    if (fieldKey === 'expiryDate') {
      if (stateCode[index] === 'invalidValue') {
        return ERROR_MESSAGES.expiryDate[stateCode][index];
      }
      if (stateCode[index] === 'invalidLength') {
        return ERROR_MESSAGES.expiryDate[stateCode];
      }
    }
  };

  return {
    validationStates,
    setInputValidationStates,
    getErrorMessage,
    isValidField,
    isAllValid,
  };
};

export default useInputValidationStates;
