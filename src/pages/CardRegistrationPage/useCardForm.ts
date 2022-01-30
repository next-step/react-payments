import { useState } from 'react';
import { CardForm, CardNumber, Password } from '../../types';

const useCardForm = () => {
  const [form, setForm] = useState<CardForm>({
    cardNumber: ['', '', '', ''],
    expireDate: ['', ''],
    CVC: '',
    password: ['', ''],
  });

  const setCardNumber = (value: string, index: 0 | 1 | 2 | 3) => {
    if (value.length > 4 || value.match(/[^\d]/)) return;

    const cardNumber: CardNumber = [...form.cardNumber];

    cardNumber[index] = value;

    setForm({ ...form, cardNumber });
  };

  const setExpireMonth = (value: string) => {
    const month = Number(value);
    const isInRange = !Number.isNaN(month) && month >= 0 && month <= 12;

    if (value !== '' && !isInRange) return;

    if (value === '0') value = '';
    if (month > 0 && month < 10) value = value.padStart(2, '0');
    if (month > 10) value = Number(value).toString();

    setForm({ ...form, expireDate: [value, form.expireDate[1]] });
  };

  const setExpireYear = (value: string) => {
    const year = Number(value);
    const isInRange = !Number.isNaN(year) && year >= 0 && year <= 99;

    if (value !== '' && !isInRange) return;

    if (value === '0') value = '';
    if (year > 0 && year < 10) value = value.padStart(2, '0');
    if (year > 10) value = Number(value).toString();

    setForm({ ...form, expireDate: [form.expireDate[0], value] });
  };

  const setUserName = (value: string) => {
    if (value.length > 30) return;

    setForm({ ...form, userName: value });
  };

  const setCVC = (value: string) => {
    if (value.match(/[^\d]/)) return;

    setForm({ ...form, CVC: value });
  };

  const setPassword = (value: string, index: 0 | 1) => {
    if (value.match(/[^\d]/) || value.length > 1) return;

    const password: Password = [...form.password];

    password[index] = value;

    setForm({ ...form, password });
  };

  return { form, setCardNumber, setExpireMonth, setExpireYear, setUserName, setCVC, setPassword };
};

export default useCardForm;
