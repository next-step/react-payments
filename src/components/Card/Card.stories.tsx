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
    brand: { label: '클린 카드', color: '#E76E9A' },
    numbers: { first: '1234', second: '5678', third: '1234', fourth: '5672' },
    owner: 'NAME',
    expiration: { month: 'MM', year: 'YY' },
  },
};
