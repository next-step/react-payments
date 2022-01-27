import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import { GROUP } from '../constants';
import CardList from './CardList';

export default {
  component: CardList,
  title: `${GROUP.PAGES}/CardList`,
};

const Template = (args) => <CardList {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CardList />
    </AppContext.Provider>
  );
};
