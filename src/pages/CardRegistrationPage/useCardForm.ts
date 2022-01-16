import { useState } from 'react';

export type CardNumber = [string, string, string, string];

export interface CardForm {
  cardNumber: CardNumber;
  expireDate: Date | null;
}

const useCardForm = () => {
  const [form, setForm] = useState<CardForm>({
    cardNumber: ['', '', '', ''],
    expireDate: null,
  });

  const setCardNumber = (cardNumber: string, index: 0 | 1 | 2 | 3) => {
    if (cardNumber.length > 4 || cardNumber.match(/[^0-9]/)) return;

    const newForm = { ...form, cardNumber: [...form.cardNumber] as CardNumber };

    newForm.cardNumber[index] = cardNumber;

    setForm(newForm);
  };

  const setExpireMonth = (month: number) => {
    if (month < 1 || month > 12) return;
  };

  const setExpireDay = (day: number) => {};

  return { form, setCardNumber, setExpireMonth, setExpireDay };
};

export default useCardForm;
