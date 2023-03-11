import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardInfoProvider } from '@/stores/CardCreatorContext';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { CardNumbersInputListPure } from './CardNumbersInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardNumberInput',
  component: CardNumbersInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof CardNumbersInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumbersInputListPure> = () => {
  return (
    <ErrorContextProvider>
      <CardInfoProvider>
        <CardNumbersInputListPure />
      </CardInfoProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
