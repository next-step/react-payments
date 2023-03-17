import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardProvider } from '@/stores/CardContext';

import { CardCreator } from './CardCreator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator',
  component: CardCreator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardCreator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardCreator> = () => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <CardCreator />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
