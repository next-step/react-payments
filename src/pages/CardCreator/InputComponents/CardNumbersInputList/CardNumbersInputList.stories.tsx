import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { cardNumbersInit } from '../../CardCreatorInits';
import { CardNumbersInputListPure } from './CardNumbersInputList';
import { createCardStateSetter } from '../../utils';

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
  const [cardNumber, setCardNumber] = useState(cardNumbersInit);
  return (
    <CardNumbersInputListPure cardNumbers={cardNumber} createCardNumberSetter={createCardStateSetter(setCardNumber)} />
  );
};

export const Primary = Template.bind({});
