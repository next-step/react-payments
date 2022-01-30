import { parse } from 'date-fns';
import { Card, CardForm } from '../types';

export const convertToCard = (cardForm: CardForm): Card => {
  return {
    CVC: cardForm.CVC,
    cardNumber: cardForm.cardNumber.join('-'),
    expireDate: parse(cardForm.expireDate.join(''), 'MMyy', new Date()),
    password: cardForm.password.join(''),
    userName: cardForm.userName,
  };
};
