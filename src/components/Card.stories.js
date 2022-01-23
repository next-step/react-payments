import React from 'react';
import { AppContext } from '../AppContext';
import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const Default = () => {
  return (
    <AppContext.Provider
      value={{
        inputCard: {
          cardNumbers: ['1234', '1234', '1234', '1234'],
          expirationMonth: '12',
          expirationYear: '24',
          cardHolder: '이영범',
          cvc: '123',
          passwords: ['1', '2', '3', '4'],
          companyName: 'Zigbang',
        },
      }}
    >
      <Card />
    </AppContext.Provider>
  );
};
