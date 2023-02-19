import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputExpire from '../../components/form/InputExpire';

export default {
  title: 'Common/Form',
  component: InputExpire,
} as ComponentMeta<typeof InputExpire>;

const Template: ComponentStory<typeof InputExpire> = (args) => (
  <InputExpire {...args} />
);

export const Expire = Template.bind({});
