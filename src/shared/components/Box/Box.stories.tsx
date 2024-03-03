import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { storybookControls, styleToken } from '@/shared/styles';

const meta = {
  title: 'Primitive/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    as: 'section',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '100px',
    backgroundColor: styleToken.color.gray100,
    children: 'Hello Box',
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithPadding: Story = {
  args: {
    padding: '20px',
    children: 'Hello Box',
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          Box 1
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          Box 2
        </Box>
      </>
    ),
  },
};
