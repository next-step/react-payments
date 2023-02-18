import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../components/Header';

export default {
  title: 'Common/Title',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '< 카드 추가',
  path: '/',
};
