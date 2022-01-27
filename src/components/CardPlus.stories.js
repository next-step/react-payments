import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import { GROUP } from '../constants';
import CardPlus from './CardPlus';

export default {
  component: CardPlus,
  title: `${GROUP.COMPONENTS}/CardPlus`,
};

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CardPlus />
    </AppContext.Provider>
  );
};
