import { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';

const meta = {
  title: 'Atom/Input/DefaultInput',
  component: DefaultInput,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<typeof DefaultInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {};
