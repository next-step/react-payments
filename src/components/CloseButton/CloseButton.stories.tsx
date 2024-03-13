import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  tags: ['autodocs'],
  component: CloseButton,
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {},
};
