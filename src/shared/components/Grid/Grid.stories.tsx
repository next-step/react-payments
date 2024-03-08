import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@/shared/components';
import { storybookControls, styleToken } from '@/shared/styles';

const meta: Meta = {
  title: 'Primitive/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: storybookControls.argTypes,
  args: {
    as: 'div',
    children: 'Hello Grid',
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithGridTemplateColumns: Story = {
  args: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    alignItems: 'center',
    backgroundColor: styleToken.color.gray200,
    borderRadius: '7px',
    padding: '0 45px',
    children: (
      <>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.mustard}
          width="100px"
          height="100px"
        >
          Grid 1
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.teal100}
          width="100px"
          height="100px"
        >
          Grid 2
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.teal200}
          width="100px"
          height="100px"
        >
          Grid 3
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.gray200}
          width="100px"
          height="100px"
        >
          Grid 4
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.gray400}
          width="100px"
          height="100px"
        >
          Grid 5
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          backgroundColor={styleToken.color.gray600}
          width="100px"
          height="100px"
        >
          Grid 6
        </Grid>
      </>
    ),
  },
};
