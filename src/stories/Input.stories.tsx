import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/common/Input';

export default {
  title: 'Common/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
