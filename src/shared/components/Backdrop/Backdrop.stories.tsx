import { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '@/components';
import { Backdrop } from '@/shared/components';

const meta: Meta<typeof Backdrop> = {
  title: 'Primitive/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
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
