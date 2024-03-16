import type { Meta, StoryObj } from '@storybook/react';
import { Flex, storybookControls, styleToken } from '@/shared';

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
    width: '100%',
    height: 'auto',
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

export const Row: Story = {
  args: {
    flexDirection: 'row',
    gap: '20px',
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

export const WithColumn: Story = {
  args: {
    flexDirection: 'column',
    gap: '20px',
    children: (
      <>
        <Flex backgroundColor={styleToken.color.mustard} width="100%" height="100px">
          Flex 1
        </Flex>
        <Flex backgroundColor={styleToken.color.teal100} width="100%" height="100px">
          Flex 2
        </Flex>
      </>
    ),
  },
};

export const WithJustifyContent: Story = {
  args: {
    justifyContent: 'space-between',
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

export const WithAlignItems: Story = {
  args: {
    alignItems: 'center',
    height: '200px',
    children: (
      <>
        <Flex backgroundColor={styleToken.color.mustard} width="100px" height="100px">
          Flex 1
        </Flex>
        <Flex backgroundColor={styleToken.color.teal100} width="100px" height="50px">
          Flex 2
        </Flex>
      </>
    ),
  },
};
