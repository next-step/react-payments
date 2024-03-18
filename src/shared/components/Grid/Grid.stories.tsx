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
    width: '100%',
    height: 'auto',
    children: 'Hello Grid',
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithGridTemplateColumns: Story = {
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    children: (
      <>
        <Grid backgroundColor={styleToken.color.mustard} height="100px">
          Grid 1
        </Grid>
        <Grid backgroundColor={styleToken.color.teal100} height="100px">
          Grid 2
        </Grid>
        <Grid backgroundColor={styleToken.color.teal200} height="100px">
          Grid 3
        </Grid>
      </>
    ),
  },
};

export const WithGridTemplateRows: Story = {
  args: {
    gridTemplateRows: 'repeat(3, 100px)',
    gap: '20px',
    children: (
      <>
        <Grid backgroundColor={styleToken.color.mustard}>Grid 1</Grid>
        <Grid backgroundColor={styleToken.color.teal100}>Grid 2</Grid>
        <Grid backgroundColor={styleToken.color.teal200}>Grid 3</Grid>
      </>
    ),
  },
};

export const WithGridAutoFlow: Story = {
  args: {
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr',
    gap: '20px',
    children: (
      <>
        <Grid backgroundColor={styleToken.color.mustard} height="100px">
          Grid 1
        </Grid>
        <Grid backgroundColor={styleToken.color.teal100} height="100px">
          Grid 2
        </Grid>
        <Grid backgroundColor={styleToken.color.teal200} height="100px">
          Grid 3
        </Grid>
      </>
    ),
  },
};

export const WithGridArea: Story = {
  args: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 100px)',
    gridTemplateAreas: `
      "header header header"
      "sidebar content content"
    `,
    gap: '20px',
    children: (
      <>
        <Grid gridArea="header" backgroundColor={styleToken.color.mustard}>
          Header
        </Grid>
        <Grid gridArea="sidebar" backgroundColor={styleToken.color.teal100}>
          Sidebar
        </Grid>
        <Grid gridArea="content" backgroundColor={styleToken.color.teal200}>
          Content
        </Grid>
      </>
    ),
  },
};
