import type { Meta, StoryObj } from '@storybook/react';
import { Typography, AppLayout } from '@/shared';

const meta = {
  title: 'Components/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <AppLayout.Root>
      <AppLayout.Header>
        <Typography variant="headline">Header</Typography>
      </AppLayout.Header>
      <AppLayout.Body>
        <Typography variant="headline">Body</Typography>
      </AppLayout.Body>
      <AppLayout.Footer>
        <Typography variant="headline">Footer</Typography>
      </AppLayout.Footer>
    </AppLayout.Root>
  ),
};
