import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardInfoProvider } from '@/stores/CardCreatorContext';

import { SecurityCodesInputListPure } from './SecurityCodesInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodeInput',
  component: SecurityCodesInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof SecurityCodesInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodesInputListPure> = () => {
  return (
    <ErrorContextProvider>
      <CardInfoProvider>
        <SecurityCodesInputListPure />
      </CardInfoProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
