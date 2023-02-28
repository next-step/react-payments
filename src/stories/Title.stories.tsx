import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../components/common/Title';

export default {
  title: 'Common/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '< 카드 추가',
};
