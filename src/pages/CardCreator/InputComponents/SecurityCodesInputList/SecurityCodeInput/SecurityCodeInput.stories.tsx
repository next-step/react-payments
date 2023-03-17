import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardProvider, securityCodesInit } from '@/stores/CardContext';

import { SecurityCodeInput } from './SecurityCodeInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodesInputList',
  component: SecurityCodeInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecurityCodeInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodeInput> = (props) => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <SecurityCodeInput {...props} />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  securityCode: securityCodesInit[0],
};
