import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardProvider } from '@/stores/CardContext';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { PasswordsInputListPure } from './PasswordsInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordInput',
  component: PasswordsInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof PasswordsInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordsInputListPure> = () => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <PasswordsInputListPure />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
