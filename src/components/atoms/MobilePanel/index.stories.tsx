import type { Meta, StoryObj } from '@storybook/react';

import MobilePanel from './index';

const meta = {
  title: 'Atoms/MobilePanel',
  component: MobilePanel,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof MobilePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
