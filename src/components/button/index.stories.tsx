import { Button } from '@/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
    },
    children: { defaultValue: 'Button', control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Button',
  },
};
export const Icon: Story = {
  args: {
    children: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14h4v-2H10v2zm0-4h4V7H10v5z' />
      </svg>
    ),
  },
};
export const Text: Story = {
  args: {
    type: 'text',
    children: 'Button',
  },
};
