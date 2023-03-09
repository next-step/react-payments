import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextButton from './TextButton';

export default {
  title: 'TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: '버튼',
  onClick: () => alert('버튼 클릭'),
};
