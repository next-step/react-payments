import { useState } from 'react';

export type CardNumber = [string, string, string, string];

export interface CardForm {
  cardNumber: CardNumber;
}

const useCardForm = () => {
  const [form, setForm] = useState<CardForm>({
    cardNumber: ['', '', '', ''],
  });

  const setCardNumber = (cardNumber: string, index: 0 | 1 | 2 | 3) => {
    const newForm = { ...form, cardNumber: [...form.cardNumber] as CardNumber };

    newForm.cardNumber[index] = cardNumber;

    setForm(newForm);
  };

  return { form, setCardNumber };
};

export default useCardForm;
