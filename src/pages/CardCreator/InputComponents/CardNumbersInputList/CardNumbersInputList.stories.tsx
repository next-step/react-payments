import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardStore } from '@/stores/CardContext';

import { CardNumbersInputList } from './CardNumbersInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardNumbersInputList',
  component: CardNumbersInputList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardNumbersInputList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumbersInputList> = (props) => {
  return (
    <CardProvider value={{ ...getInitialCardStore(), cardNumbers: props.cardNumbers! }}>
      <CardContext.Consumer>
        {(store) => store && <CardNumbersInputList cardNumbers={store.cardNumbers} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});
export const ValueSet = Template.bind({});

Primary.args = {
  cardNumbers: getInitialCardStore().cardNumbers,
};

ValueSet.args = {
  cardNumbers: getInitialCardStore().cardNumbers.map((cardNumber) => {
    cardNumber.value = '1234';
    return cardNumber;
  }),
};
