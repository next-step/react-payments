import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardContext, CardProvider, securityCodesInit } from '@/stores/CardContext';

import { SecurityCodesInputListPure } from './SecurityCodesInputList';
import { initialCardStore } from '@/stores/CardContext/cardStore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodesInputList',
  component: SecurityCodesInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecurityCodesInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodesInputListPure> = ({ securityCodes }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, securityCodes: securityCodes! }}>
        <CardContext.Consumer>
          {(store) => <SecurityCodesInputListPure securityCodes={store?.securityCodes} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  securityCodes: securityCodesInit,
};
