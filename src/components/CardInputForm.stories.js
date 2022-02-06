import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import { GROUP } from '../constants';
import CardInputForm from './CardInputForm';

export default {
  component: CardInputForm,
  title: `${GROUP.COMPONENTS}/CardInputForm`,
};

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CardInputForm />
    </AppContext.Provider>
  );
};
