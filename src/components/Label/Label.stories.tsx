import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from './Label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: '카드번호',
  children: (
    <input
      type="text"
      placeholder="카드번호를 입력해주세요"
      aria-label="카드번호"
    />
  ),
};

export const WithLimit = Template.bind({});

WithLimit.args = {
  label: '카드번호',
  textLimit: 30,
  textLength: 10,
  children: (
    <input
      type="text"
      placeholder="카드번호를 입력해주세요"
      aria-label="카드번호"
    />
  ),
};
