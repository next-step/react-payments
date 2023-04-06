import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExpiredInput } from '.';

export default {
  title: 'Payments/Input/ExpiredInput',
  component: ExpiredInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ExpiredInput>;

const Template: ComponentStory<typeof ExpiredInput> = () => <ExpiredInput />;

export const Default = Template.bind({});
