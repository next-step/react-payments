import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import Add from './Add';

export default {
  component: Add,
  title: 'Add',
};

const Template = (args) => <Add {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <Add />
    </AppContext.Provider>
  );
};
