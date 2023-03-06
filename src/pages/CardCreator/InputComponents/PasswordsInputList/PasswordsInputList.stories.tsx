import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { passwordsInit } from '../../CardCreatorInits';
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
  const [passwords, setPasswords] = useState(passwordsInit);
  return <PasswordsInputListPure />;
};

export const Primary = Template.bind({});
