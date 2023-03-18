import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { cardNumbersInit, CardProvider } from '@/stores/CardContext';
import { CardContext, initialCardStore } from '@/stores/CardContext/cardStore';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { CardNumbersInputListPure } from './CardNumbersInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardNumbersInputList',
  component: CardNumbersInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardNumbersInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumbersInputListPure> = (props) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, cardNumbers: props.cardNumbers! }}>
        <CardContext.Consumer>
          {(store) => store && <CardNumbersInputListPure cardNumbers={store.cardNumbers} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
export const ValueSet = Template.bind({});

Primary.args = {
  cardNumbers: cardNumbersInit,
};

ValueSet.args = {
  cardNumbers: cardNumbersInit.map((cardNumber) => {
    cardNumber.value = '1234';
    return cardNumber;
  }),
};
