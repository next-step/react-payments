import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import { GROUP } from '../constants';
import Add from './Add';

export default {
  component: Add,
  title: `${GROUP.PAGES}/Add`,
};

const Template = (args) => <Add {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <Add />
    </AppContext.Provider>
  );
};
