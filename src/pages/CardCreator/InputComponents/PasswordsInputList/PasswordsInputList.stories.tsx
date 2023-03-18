import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardContext, CardProvider, passwordsInit } from '@/stores/CardContext';

import { PasswordsInputListPure } from './PasswordsInputList';
import { initialCardStore } from '@/stores/CardContext/cardStore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordsInputList',
  component: PasswordsInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordsInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordsInputListPure> = ({ passwords }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, passwords: passwords! }}>
        <CardContext.Consumer>
          {(store) => <PasswordsInputListPure passwords={store?.passwords} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  passwords: passwordsInit,
};
