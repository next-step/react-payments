import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'cardNumber',
  value: 'test',
  onChange: () => {},
  textAlign: 'center',
  width: '100%',
  fontColor: 'blue',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'cardNumber',
  onChange: () => {},
  textAlign: 'left',
  width: '100%',
  fontColor: 'blue',
  placeholder: '카드번호를 입력해주세요',
};
