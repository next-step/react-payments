import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardProvider } from '@/stores/CardContext';

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
  return (
    <ErrorContextProvider>
      <CardProvider>
        <CardOwnerInputPure />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
