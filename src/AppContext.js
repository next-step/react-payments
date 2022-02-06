import React from 'react';

export const AppContext = React.createContext();

export const initialInputCard = {
  cardNumbers: ['', '', '', ''],
  expirationMonth: '',
  expirationYear: '',
  cardHolder: '',
  cvc: '',
  passwords: ['', ''],
  companyName: '',
  color: '',
  nickName: '',
};

export const initialAppContext = {
  inputCard: initialInputCard,
};
