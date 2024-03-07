import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@/shared/components/Flex/Flex.tsx';
import { storybookControls, styleToken } from '@/shared/styles';

const meta: Meta = {
  title: 'Primitive/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    as: 'div',
    width: '300px',
    height: '100px',
    backgroundColor: styleToken.color.gray100,
    children: 'Hello Flex',
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithPadding: Story = {
  args: {
    padding: '20px',
  },
};

export const WithBorder: Story = {
  args: {
    border: `2px solid ${styleToken.color.gray600}`,
  },
};

export const WithChildren: Story = {
  args: {
    padding: '40px',
    gap: '20px',
    width: 'auto',
    height: 'auto',
    children: (
      <>
        <Flex backgroundColor={styleToken.color.mustard} width="100px" height="100px">
          Flex 1
        </Flex>
        <Flex backgroundColor={styleToken.color.teal100} width="100px" height="100px">
          Flex 2
        </Flex>
      </>
    ),
  },
};
