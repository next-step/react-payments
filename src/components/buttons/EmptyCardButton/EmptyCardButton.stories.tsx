import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmptyCardButton from './EmptyCardButton';

export default {
  title: 'EmptyCardButton',
  component: EmptyCardButton,
} as ComponentMeta<typeof EmptyCardButton>;

const Template: ComponentStory<typeof EmptyCardButton> = (args) => (
  <EmptyCardButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => console.log('clicked'),
};
