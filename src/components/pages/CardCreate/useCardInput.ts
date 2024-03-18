import { ChangeEvent } from 'react';
import { CardFormFieldErrors, CardFormFields, useProvidedCardFormContext } from './CardFormContext';

type UseCardInputHook = {
  fields: CardFormFields;
  isErrorField: CardFormFieldErrors;
  handleCardNumberInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExpirationMonthInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExpirationYearInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOwnerNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVerificationCodeInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCardPasswordInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useCardInput = (): UseCardInputHook => {
  const {
    state: { fields, isErrorField },
    handleCardNumberInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
  } = useProvidedCardFormContext();

  return {
    fields,
    isErrorField,
    handleCardNumberInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
  };
};
