import { useState } from 'react';
import { INPUT_INFO } from '@/constants';
import { isValidValue, isValueValidLength } from '@/helper/isValid';

const useInputValidationStates = () => {
  const [validationStates, setValidationState] = useState({
    cardNumber: ['', '', '', ''],
    expiryDate: ['', ''],
    owner: [''],
    cvc: [''],
    password: ['', ''],
  });

  const setInputValidationStates = ({
    value,
    fieldKey,
    index,
  }: {
    value: number | string;
    fieldKey: keyof Omit<typeof INPUT_INFO, 'nickname'>;
    index: number;
  }) => {
    const currentValidationState =
      (!INPUT_INFO[fieldKey].require && 'pass') ||
      (!isValueValidLength(value, fieldKey) && 'invalidLength') ||
      (!isValidValue(value, fieldKey, index) && 'invalidValue') ||
      'pass';

    if (currentValidationState === validationStates[fieldKey][index]) return;

    setValidationState({
      ...validationStates,
      [fieldKey]: validationStates[fieldKey].map((v, i) =>
        i === index ? currentValidationState : v
      ),
    });
  };

  const isValidField = ({
    value,
    fieldKey,
    index,
  }: {
    value: number | string;
    fieldKey: keyof Omit<typeof INPUT_INFO, 'nickname'>;
    index: number;
  }) =>
    isValidValue(value, fieldKey, index) && isValueValidLength(value, fieldKey);

  const isAllValid = () =>
    Object.values(validationStates).every((v) => v.every((v) => v === 'pass'));

  const hasInvalidState = (validationState: string) =>
    validationState === 'invalidLength' || validationState === 'invalidValue';

  const getErrorMessage = ({
    fieldKey,
    index,
  }: {
    fieldKey: keyof Omit<typeof INPUT_INFO, 'nickname'>;
    index: number;
  }) => {
    const stateCode = validationStates[fieldKey][index];

    if (
      !stateCode ||
      stateCode === 'pass' ||
      !INPUT_INFO[fieldKey].errorMessage
    )
      return '';

    if (stateCode === 'invalidLength') {
      return INPUT_INFO[fieldKey].errorMessage?.invalidLength || '';
    }
    if (fieldKey === 'expiryDate' && stateCode === 'invalidValue') {
      return INPUT_INFO.expiryDate.errorMessage[stateCode][index];
    }
    if (stateCode === 'invalidValue') {
      return INPUT_INFO[fieldKey].errorMessage?.invalidValue || '';
    }
  };

  return {
    validationStates,
    setInputValidationStates,
    getErrorMessage,
    isValidField,
    isAllValid,
    hasInvalidState,
  };
};

export default useInputValidationStates;
