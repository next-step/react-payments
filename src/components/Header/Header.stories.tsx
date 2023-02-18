import React from 'react';
import { ReactComponent as RightArrowIcon } from '@/assets/right_arrow.svg';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '카드 추가',
  rightIcon: <RightArrowIcon />,
};

export const NonIcon = Template.bind({});

NonIcon.args = {
  title: '카드 추가',
};
