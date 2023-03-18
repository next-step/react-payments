import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, cardNumbersInit, CardProvider } from '@/stores/CardContext';
import { initialCardStore } from '@/stores/CardContext/cardStore';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { CardNumberInput } from './CardNumberInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardNumbersInputList/CardNumberInput',
  component: CardNumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: { control: 'false' },
    needDividerRender: { type: 'boolean' },
  },
} as ComponentMeta<typeof CardNumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumberInput> = ({ cardNumber, index, needDividerRender }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, cardNumbers: [{ ...cardNumbersInit[0], ...cardNumber }] }}>
        <CardContext.Consumer>
          {(store) =>
            store && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100px',
                  }}
                >
                  <CardNumberInput
                    cardNumber={store.cardNumbers[0]}
                    index={index}
                    needDividerRender={needDividerRender}
                  />
                </div>
              </div>
            )
          }
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});
export const WithDivider = Template.bind({});
export const SecreteValue = Template.bind({});

Primary.args = {
  index: 0,
  cardNumber: cardNumbersInit[0],
};

WithDivider.args = {
  cardNumber: {
    ...cardNumbersInit[0],
  },
  index: 0,
  needDividerRender: true,
};

SecreteValue.args = {
  cardNumber: {
    type: 'password',
    key: 'card-first-num',
    checkIsValid() {
      const { value } = this;
      return !!value && value.length === 4;
    },
    checkIsAllowInput: (input) => !input || input.length <= 4,
    getInvalidMessage() {
      if (this.checkIsValid()) return null;
      return '카드 번호 4자리를 입력해주세요.';
    },
    getPOJO() {
      return { value: this.value, type: this.type };
    },
  },
  index: 0,
};
