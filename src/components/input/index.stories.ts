import Input from '@/components/input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    // showCount: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'tel', 'email', 'url'],
    },
    inputMode: {
      control: 'select',
      options: [
        'none',
        'text',
        'decimal',
        'numeric',
        'tel',
        'search',
        'email',
        'url',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
