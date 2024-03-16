import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from '@/shared/components/VStack';
import { storybookControls, styleToken } from '@/shared/styles';

const meta: Meta = {
  title: 'Primitive/VStack',
  component: VStack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    as: 'div',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '100px',
    backgroundColor: styleToken.color.gray100,
    children: 'Hello VStack',
  },
} satisfies Meta<typeof VStack>;

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
    width: 'auto',
    height: 'auto',
    children: (
      <>
        <VStack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          VStack 1
        </VStack>
        <VStack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          VStack 2
        </VStack>
      </>
    ),
  },
};

export const WithSpacing: Story = {
  args: {
    padding: '40px',
    spacing: '20px',
    width: 'auto',
    height: 'auto',
    children: (
      <>
        <VStack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          VStack 1
        </VStack>
        <VStack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          VStack 2
        </VStack>
      </>
    ),
  },
};
