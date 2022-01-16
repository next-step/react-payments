import { useState } from 'react';

export type CardNumber = [string, string, string, string];
export type ExpireDate = [string, string];

export interface CardForm {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
  userName?: string;
}

const useCardForm = () => {
  const [form, setForm] = useState<CardForm>({
    cardNumber: ['', '', '', ''],
    expireDate: ['', ''],
  });

  const setCardNumber = (value: string, index: 0 | 1 | 2 | 3) => {
    if (value.length > 4 || value.match(/[^\d]/)) return;

    const newForm = { ...form, cardNumber: [...form.cardNumber] as CardNumber };

    newForm.cardNumber[index] = value;

    setForm(newForm);
  };

  const setExpireMonth = (value: string) => {
    const month = Number(value);
    const isInRange = !Number.isNaN(month) && month >= 1 && month <= 12;

    if (value !== '' && !isInRange) return;

    setForm({ ...form, expireDate: [value, form.expireDate[1]] });
  };

  const setExpireYear = (value: string) => {
    const year = Number(value);
    const isInRange = !Number.isNaN(year) && year >= 1 && year <= 99;

    if (value !== '' && !isInRange) return;

    setForm({ ...form, expireDate: [form.expireDate[0], value] });
  };

  const setUserName = (value: string) => {
    if (value.length > 30) return;

    setForm({ ...form, userName: value });
  };

  return { form, setCardNumber, setExpireMonth, setExpireYear, setUserName };
};

export default useCardForm;
