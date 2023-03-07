import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './index';

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'This is placeholder',
  value: '',
  maxLength: 10,
};
