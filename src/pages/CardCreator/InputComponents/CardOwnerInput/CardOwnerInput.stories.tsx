import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { cardOwnersInit, CardProvider } from '@/stores/CardContext';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { CardOwnerInputPure } from './CardOwnerInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardOwnerInput',
  component: CardOwnerInputPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardOwnerInputPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardOwnerInputPure> = (props) => {
  return (
    <ErrorContextProvider>
      <CardProvider>
        <CardOwnerInputPure {...props} />
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  cardOwners: cardOwnersInit,
};
