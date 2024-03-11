import type { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './index';

const meta = {
  title: 'molecules/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Hello, world!',
    fullHeight: false,
  },
};

export const FullHeight: Story = {
  args: {
    children: 'Hello, world!',
    fullHeight: true,
  },
};
