import { Meta, StoryObj } from '@storybook/react';
import { AppLayout, Tooltip } from '@/shared';

const meta: Meta<typeof Tooltip> = {
  title: 'Primitive/Tooltip',
  component: Tooltip,
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

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {},
};
