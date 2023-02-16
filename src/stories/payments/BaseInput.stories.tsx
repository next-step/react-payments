import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '../../components';

export default {
  title: 'Payments/BaseInput',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'This is placeholder'
};