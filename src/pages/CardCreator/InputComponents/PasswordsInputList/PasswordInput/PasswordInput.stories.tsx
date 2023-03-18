import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardContext, CardProvider, passwordsInit } from '@/stores/CardContext';

import { PasswordInput } from './PasswordInput';
import { initialCardStore } from '@/stores/CardContext/cardStore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordsInputList/PasswordInput',
  component: PasswordInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordInput> = ({ password, ...props }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, passwords: [password!] }}>
        <CardContext.Consumer>
          {(store) => store && <PasswordInput password={store.passwords[0]} {...props} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  password: passwordsInit[0],
  index: 0,
};
