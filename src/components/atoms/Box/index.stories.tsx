import type { Meta, StoryObj } from '@storybook/react';

import Box from './index';

const meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'w-44 p-10 border border-dashed border-gray-400',
    children: 'Hello, world!',
  },
};
