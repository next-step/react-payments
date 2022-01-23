import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import Complete from './Complete';

export default {
  component: Complete,
  title: 'Complete',
};

const Template = (args) => <Complete {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <Complete />
    </AppContext.Provider>
  );
};
