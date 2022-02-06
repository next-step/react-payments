import React from 'react';
import { AppContext, initialAppContext } from '../../AppContext';
import { GROUP } from '../../constants';
import CompanyListModal from './CompanyListModal';

export default {
  component: CompanyListModal,
  title: `${GROUP.MODAL}/CompanyListModal`,
};

const Template = (args) => <CompanyListModal {...args} />;

export const Default = () => {
  return (
    <AppContext.Provider value={initialAppContext}>
      <CompanyListModal />
    </AppContext.Provider>
  );
};
