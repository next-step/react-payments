import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@/shared/components/Stack';
import { storybookControls, styleToken } from '@/shared/styles';

const meta: Meta = {
  title: 'Primitive/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    as: 'div',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '100px',
    backgroundColor: styleToken.color.gray100,
    children: 'Hello Stack',
  },
} satisfies Meta<typeof Stack>;

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
        <Stack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          Stack 1
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          Stack 2
        </Stack>
      </>
    ),
  },
};

export const WithSpacing: Story = {
  args: {
    padding: '40px',
    width: 'auto',
    height: 'auto',
    spacing: '20px',
    children: (
      <>
        <Stack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          Stack 1
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          Stack 2
        </Stack>
      </>
    ),
  },
};
