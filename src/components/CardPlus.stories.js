import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import CardPlus from './CardPlus';

export default {
  component: CardPlus,
  title: 'CardPlus',
};

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CardPlus />
    </AppContext.Provider>
  );
};
