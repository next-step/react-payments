import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardProvider } from '@/stores/CardContext';

import { ExpireDatesInputListPure } from './ExpireDatesInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDateInput',
  component: ExpireDatesInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof ExpireDatesInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireDatesInputListPure> = () => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <ExpireDatesInputListPure />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
