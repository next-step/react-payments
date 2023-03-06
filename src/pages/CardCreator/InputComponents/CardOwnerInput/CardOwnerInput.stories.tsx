import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { cardOwnersInit } from '../../CardCreatorInits';
import { CardOwnerInputPure } from './CardOwnerInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardOwnerInput',
  component: CardOwnerInputPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardNumbers: { control: false },
    createCardNumberSetter: { control: false },
  },
} as ComponentMeta<typeof CardOwnerInputPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardOwnerInputPure> = () => {
  const [ownerNames, setOwnerNames] = useState(cardOwnersInit);
  return <CardOwnerInputPure />;
};

export const Primary = Template.bind({});
