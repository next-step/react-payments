import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { securityCodesInit } from '../../CardCreatorInits';
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
  const [securityCodes, setSecurityCodes] = useState(securityCodesInit);
  return <SecurityCodesInputListPure />;
};

export const Primary = Template.bind({});
