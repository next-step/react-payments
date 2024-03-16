import { Meta, StoryObj } from '@storybook/react';
import { AppDisplay, Backdrop } from '@/shared';

const meta: Meta<typeof Backdrop> = {
  title: 'Primitive/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Primary: Story = {
  args: {},
};

export const WithClick: Story = {
  args: {
    onClick: () => alert('Clicked'),
  },
};
