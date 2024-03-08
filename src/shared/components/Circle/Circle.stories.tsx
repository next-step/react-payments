import type { Meta, StoryObj } from '@storybook/react';
import { Circle } from '@/shared/components/Circle';
import { storybookControls, styleToken } from '@/shared/styles';

const meta: Meta = {
  title: 'Primitive/Circle',
  component: Circle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    width: '37px',
    height: '37px',
    borderRadius: '50%',
    backgroundColor: styleToken.color.teal200,
  },
} satisfies Meta<typeof Circle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithBackgroundColor: Story = {
  args: {
    backgroundColor: styleToken.color.mustard,
  },
};

export const WithBorder: Story = {
  args: {
    backgroundColor: 'unset',
    border: `1px solid ${styleToken.color.gray400}`,
  },
};
