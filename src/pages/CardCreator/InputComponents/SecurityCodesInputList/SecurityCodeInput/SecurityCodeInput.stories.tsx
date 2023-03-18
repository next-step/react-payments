import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardContext, CardProvider, securityCodesInit } from '@/stores/CardContext';

import { SecurityCodeInput } from './SecurityCodeInput';
import { getInitialCardStore } from '@/stores/CardContext/cardStore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodesInputList/SecurityCodeInput',
  component: SecurityCodeInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecurityCodeInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodeInput> = ({ securityCode, ...props }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...getInitialCardStore(), securityCodes: [securityCode] }}>
        <CardContext.Consumer>
          {(store) => store && <SecurityCodeInput securityCode={store.securityCodes[0]} {...props} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  securityCode: securityCodesInit[0],
  index: 0,
};
