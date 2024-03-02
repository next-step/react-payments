import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['basic', 'underline'],
      control: { type: 'radio' },
    },
    type: {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'basic',
    type: 'text',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    type: 'text',
  },
};
