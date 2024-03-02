import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonText: Story = {
  args: {
    children: '다음',
  },
};

export const ButtonContained: Story = {
  args: {
    variant: 'contained',
    children: '다음',
  },
};

export const ButtonOutlined: Story = {
  args: {
    variant: 'outlined',
    children: '다음',
  },
};
