import { ChangeEvent, useContext } from 'react';
import { CardFormContext, CardFormOptions } from './CardFormContext';

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
  } = useContext(CardFormContext);

  return {
    options,
    updateCardCompany,
    handleCardNicknameInputChange,
  };
};
