import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardSelection } from './index';

export default {
  title: 'Payments/CardSelection',
  component: CardSelection,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof CardSelection>;
const Template: ComponentStory<typeof CardSelection> = (args) => <CardSelection {...args} />;

export const Default = Template.bind({});
Default.args = {};
