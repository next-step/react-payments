import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { passwordsInit } from '../CardCreatorInits';
import { PasswordInputPure } from './PasswordInput';
import { createCardStateSetter } from '../utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordInput',
  component: PasswordInputPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof PasswordInputPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordInputPure> = () => {
  const [passwords, setPasswords] = useState(passwordsInit);
  return <PasswordInputPure passwords={passwords} createPasswordSetter={createCardStateSetter(setPasswords)} />;
};

export const Primary = Template.bind({});
