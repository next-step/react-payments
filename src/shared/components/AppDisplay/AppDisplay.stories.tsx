import type { Meta, StoryObj } from '@storybook/react';
import { Typography, AppDisplay } from '@/shared';

const meta = {
  title: 'Components/AppDisplay',
  component: AppDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <AppDisplay.Root>
      <AppDisplay.Header>
        <Typography variant="headline">Header</Typography>
      </AppDisplay.Header>
      <AppDisplay.Body>
        <Typography variant="headline">Body</Typography>
      </AppDisplay.Body>
      <AppDisplay.Footer>
        <Typography variant="headline">Footer</Typography>
      </AppDisplay.Footer>
    </AppDisplay.Root>
  ),
};
