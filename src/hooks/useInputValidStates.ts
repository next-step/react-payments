import { useState } from 'react';
import { ERROR_MESSAGES } from '@/constants';
import { isValidValue, isValueValidLength } from '@/helper/isValid';

type stateCode = 'invalidLength' | 'invalidValue' | 'pass' | '';

const useInputValidStates = () => {
  const [validState, setValidState] = useState({
    cardNumber: ['', '', '', ''],
    expiryDate: ['', ''],
    cvc: '',
    password: ['', ''],
  });

  const setInputValidStates = ({
    value,
    fieldKey,
    index,
  }: {
    value: number | string;
    fieldKey: keyof typeof ERROR_MESSAGES;
    index: number;
  }) => {
    const stateCode: stateCode =
      (!isValueValidLength(value, fieldKey) && 'invalidLength') ||
      (!isValidValue(value, fieldKey, index) && 'invalidValue') ||
      'pass';

    if (
      (Array.isArray(validState[fieldKey]) &&
        validState[fieldKey][index] === stateCode) ||
      validState[fieldKey] === stateCode
    )
      return;
    setValidState({
      ...validState,
      [fieldKey]: Array.isArray(validState[fieldKey])
        ? Array.from(validState[fieldKey]).map((v, i) =>
            i === index ? stateCode : v
          )
        : stateCode,
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

  const isAllValid = () => Object.values(validState).every((v) => v === 'pass');

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
    validState,
    setInputValidStates,
    getErrorMessage,
    isValidField,
    isAllValid,
  };
};

export default useInputValidStates;
