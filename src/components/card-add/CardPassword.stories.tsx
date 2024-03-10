import type { Meta, StoryObj } from '@storybook/react';

import CardPassword from './CardPassword';

const cardPassword = {
  firstNumber: '1',
  secondNumber: '5',
};

const setCardPassword = () => {};

const meta = {
  title: 'CARD-ADD/CardPassword',
  component: CardPassword,
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword,
    setCardPassword,
  },
};
