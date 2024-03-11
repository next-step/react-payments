import type { Meta, StoryObj } from '@storybook/react';

import CreditCard from './index';

const meta = {
  title: 'organisms/CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    cardNumber: '1111-1111-1111',
    expirationMonth: '11',
    expirationYear: '30',
    ownerName: 'jxxunnn',
    cardCompany: '준 카드',
  },
};
