import React from 'react';
import { AppContext, initialAppContext } from '../../AppContext';
import ToList from './ToList';

export default {
  component: ToList,
  title: 'ToList',
};

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <ToList />
    </AppContext.Provider>
  );
};
