import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '버튼'
};