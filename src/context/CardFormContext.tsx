import { CardInformation } from '@/types';
import { ChangeEvent, createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type FormHandler = {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onReset(): void;
};

const CardFormContext = createContext<CardInformation | null>(null);
const CardFormHandlerContext = createContext<FormHandler | null>(null);

function useCardForm() {
  const value = useContext(CardFormContext);
  if (!value) {
    throw new Error('useCardForm는 CardFormProvider에서 사용해야합니다.');
  }
  return value;
}

function useCardFormHandler() {
  const value = useContext(CardFormHandlerContext);
  if (!value) {
    throw new Error('useCardFormHandler CardFormProvider에서 사용해야합니다.');
  }
  return value;
}

const initCardInformation = {
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  year: '',
  month: '',
  cvc: '',
  password1: '',
  password2: '',
  cardOwner: '',
  nickname: '',
};

interface CardFormProviderProps {
  children: ReactNode;
}

function CardFormProvider({ children }: CardFormProviderProps) {
  const [cardForm, setCardForm] = useState<CardInformation>(initCardInformation);

  const handlers = useMemo(
    () => ({
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, validity } = e.target;
        if (!validity.valid) return;

        setCardForm(prev => ({ ...prev, [name]: value }));
      },
      onReset() {
        setCardForm(initCardInformation);
      },
    }),
    [],
  );

  return (
    <CardFormHandlerContext.Provider value={handlers}>
      <CardFormContext.Provider value={cardForm}>{children}</CardFormContext.Provider>
    </CardFormHandlerContext.Provider>
  );
}

export { CardFormContext, CardFormProvider, useCardForm, useCardFormHandler };
