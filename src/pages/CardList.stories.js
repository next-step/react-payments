import React from 'react';
import { AppContext, initialAppContext } from '../AppContext';
import CardList from './CardList';

export default {
  component: CardList,
  title: 'CardList',
};

const Template = (args) => <CardList {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CardList />
    </AppContext.Provider>
  );
};
