import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { expireDatesInit } from '../CardCreatorInits';
import { ExpireDateInputPure } from './ExpireDateInput';
import { createCardStateSetter } from '../utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDateInput',
  component: ExpireDateInputPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof ExpireDateInputPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireDateInputPure> = () => {
  const [expireDates, setExpireDates] = useState(expireDatesInit);
  return (
    <ExpireDateInputPure expireDates={expireDates} createExpireDateSetter={createCardStateSetter(setExpireDates)} />
  );
};

export const Primary = Template.bind({});
