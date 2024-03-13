import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCompanyPicker from './index';

const meta = {
  title: 'organisms/CreditCardCompanyPicker',
  component: CreditCardCompanyPicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardCompanyPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
