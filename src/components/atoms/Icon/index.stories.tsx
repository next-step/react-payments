import ReactIcon from '@assets/react.svg';
import type { Meta, StoryObj } from '@storybook/react';

import Icon from './index';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: ReactIcon,
    size: 36,
  },
};
