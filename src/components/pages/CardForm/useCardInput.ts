import { ChangeEvent, useContext } from 'react';
import { CardFormContext, CardFormFields } from './CardFormContext';

type UseCardInputHook = {
  fields: CardFormFields;
  handleCardNumberInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExpirationMonthInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExpirationYearInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOwnerNameInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleVerificationCodeInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCardPasswordInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const useCardInput = (): UseCardInputHook => {
  const {
    state: { fields },
    handleCardNumberInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
  } = useContext(CardFormContext);

  return {
    fields,
    handleCardNumberInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
  };
};
