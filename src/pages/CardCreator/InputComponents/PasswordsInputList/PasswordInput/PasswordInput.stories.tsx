import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardProvider, passwordsInit } from '@/stores/CardContext';

import { PasswordInput } from './PasswordInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordsInputList/PasswordInput',
  component: PasswordInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordInput> = (props) => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <PasswordInput {...props} />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  password: passwordsInit[0],
};
