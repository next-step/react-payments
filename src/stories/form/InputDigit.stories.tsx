import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputDigit from '../../components/form/InputDigit';

export default {
  title: 'Common/Form',
  component: InputDigit,
} as ComponentMeta<typeof InputDigit>;

const Template: ComponentStory<typeof InputDigit> = (args) => (
  <InputDigit {...args} />
);

export const Digit = Template.bind({});
