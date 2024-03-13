import { ChangeEvent } from 'react';
import { CardFormOptions, useProvidedCardFormContext } from './CardFormContext';

type UseCardOptionHook = {
  options: CardFormOptions;
  updateCardCompany: (company: string) => void;
  handleCardNicknameInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useCardOption = (): UseCardOptionHook => {
  const {
    state: { options },
    updateCardCompany,
    handleCardNicknameInputChange,
  } = useProvidedCardFormContext();

  return {
    options,
    updateCardCompany,
    handleCardNicknameInputChange,
  };
};
