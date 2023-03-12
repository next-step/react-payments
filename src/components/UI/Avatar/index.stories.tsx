import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar, { AvatarShape, CardVariant } from '.';

export default {
  title: 'Components/UI/Avatar',
  component: Avatar,
  argTypes: {
    shape: {
      options: [...Object.keys(AvatarShape)],
      control: { type: 'radio' },
    },
    variant: {
      options: [...Object.keys(CardVariant)],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Default = Template.bind({});
Default.args = {};

export const Square = Template.bind({});
Square.args = {
  variant: 'pc',
  shape: 'square',
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'ek',
  shape: 'circle',
};
