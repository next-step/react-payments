import { Meta, StoryObj } from '@storybook/react';
import { Circle, styleToken, Tooltip, Typography } from '@/shared';

const meta: Meta<typeof Tooltip> = {
  title: 'Primitive/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => (
    <Tooltip
      message="보안코드 3자리"
      direction="top"
      icon={
        <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
          <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
            ?
          </Typography>
        </Circle>
      }
    />
  ),
};

export const WithBottom: Story = {
  render: () => (
    <Tooltip
      message="보안코드 3자리"
      direction="bottom"
      icon={
        <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
          <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
            ?
          </Typography>
        </Circle>
      }
    />
  ),
};

export const WithLeft: Story = {
  render: () => (
    <Tooltip
      message="보안코드 3자리"
      direction="left"
      icon={
        <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
          <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
            ?
          </Typography>
        </Circle>
      }
    />
  ),
};

export const WithRight: Story = {
  render: () => (
    <Tooltip
      message="보안코드 3자리"
      direction="right"
      icon={
        <Circle backgroundColor="unset" border={`1px solid ${styleToken.color.gray400}`} cursor="pointer">
          <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
            ?
          </Typography>
        </Circle>
      }
    />
  ),
};
