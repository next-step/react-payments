import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    className: '',
    children: 'Button',
    disabled: false,
  },
};
