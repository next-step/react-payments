import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BaseInput } from '../../components';

export default {
  title: 'Payments/BaseInput',
  component: BaseInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'This is placeholder'
};