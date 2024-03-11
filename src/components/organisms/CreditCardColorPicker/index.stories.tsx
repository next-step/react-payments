import type { Meta, StoryObj } from '@storybook/react';

import CreditCardColorPicker from './index';

const meta = {
  title: 'organisms/CreditCardColorPicker',
  component: CreditCardColorPicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CreditCardColorPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
