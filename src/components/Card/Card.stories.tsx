import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  tags: ['autodocs'],
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    brand: '클린카드',
    numbers: ['1234', '5678', '1234', '5678'],
    owner: 'NAME',
    expirationMonth: 'MM',
    expirationYear: 'YY',
  },
};
