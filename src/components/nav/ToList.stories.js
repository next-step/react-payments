import React from 'react';
import { AppContext, initialAppContext } from '../../AppContext';
import { GROUP } from '../../constants';
import ToList from './ToList';

export default {
  component: ToList,
  title: `${GROUP.NAV}/ToList`,
};

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <ToList />
    </AppContext.Provider>
  );
};
