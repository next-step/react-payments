import type { ComponentStory, Meta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const TextInput = Template.bind({});
TextInput.args = {
  className: 'input-basic ',
  type: 'text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  className: 'input-basic ',
  type: 'password',
};

export const InputW15 = Template.bind({});
InputW15.args = {
  className: 'input-basic w-15',
};

export const InputW25 = Template.bind({});
InputW25.args = {
  className: 'input-basic w-25',
};

export const InputFixed = Template.bind({});
InputFixed.args = {
  className: 'input-fixed',
  disabled: true,
  value: '•',
};

export const InputUnderline = Template.bind({});
InputUnderline.args = {
  className: 'input-underline',
};
