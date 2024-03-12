import type { Meta, StoryObj } from '@storybook/react';

import CardNumber from './CardNumber';

const cardNumber = {
  firstNumber: '1111',
  secondNumber: '1111',
  thirdNumber: '1111',
  fourthNumber: '1111',
};

const setCardNumber = () => {};

const meta = {
  title: 'CARD-ADD/CardNumber',
  component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber,
    setCardNumber,
  },
};
